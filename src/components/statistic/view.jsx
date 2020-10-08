import React, { useState, useEffect } from 'react';
import { Row, Col, Statistic, Descriptions, Spin, Card } from 'antd';
import { NATIONALITIES } from 'constants/nationalities';
import './statistik.scss'
const View = (props) => {

    const statistik = props.statistik


    const sexSort = (arr, comparator) => {
        if (statistik !== null) {
            const resSort = arr.slice().filter((a) => a.gender === comparator)
            return resSort
        }
    }


    if (!statistik) {
        return (
            <Spin />
        )
    }

    const nationalRender = getStatistikNat(statistik);
    const renderDescriptions = nationalRender.map(d => <Descriptions.Item className={'statistik_nat_items'} key={d.id} label={d.nat}>{d.value}</Descriptions.Item>)
    const male = sexSort(statistik, 'male').length
    const female = sexSort(statistik, 'female').length
    const indeterminate = sexSort(statistik, 'indeterminate')

    const mark = () => {
        if (male > female) {
            return <mark>Men predominate</mark>
        } else if (male < female) {
            return <mark>Women predominate</mark>
        } else {
            return <mark>Indeterminate predominate</mark>
        }
    }

    return (
        <div className={'statistick_box'}>
            <Card  bordered={true}> 
                <h1>Statistic</h1>
                <Row justify="start">
                    <Col flex={1}><Statistic title="Colection size" value={statistik.length} /></Col>
                    <Col flex={20}>
                        <Row justify="start">
                            <Col span={36} >
                                <Col span={24}>
                                    <Row flex={24} justify="start">
                                        <Col span={8}>
                                            <Statistic title="Males" value={male} />
                                        </Col>
                                        <Col span={8}>
                                            <Statistic title="Females" value={female} />
                                        </Col>
                                        <Col span={8}>
                                            <Statistic title="Indeterminate" value={indeterminate.length} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col justify="center">
                                    <Col span={24}>
                                        {
                                            mark()
                                        }
                                    </Col>
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Statistic title='Nationalites' value=' ' />
                        <Descriptions>
                            {renderDescriptions}
                        </Descriptions>
                    </Col>
                </Row>
            </Card>

        </div>
    )
}

export default View

function getStatistikNat(nat) {
    function groupBy(arr, property) {
        return arr.reduce(function (memo, x) {
            if (!memo[x[property]]) { memo[x[property]] = []; }
            memo[x[property]].push(x);
            return memo;
        }, []);
    }
    const done = groupBy(nat, 'nat');

    const newObj = Object.keys(done).map((key, index) => {
        return {
            id: index,
            title: key,
            value: done[key].length,
        };
    });
    const newObjNAt = Object.keys(NATIONALITIES).map((key) => {
        return {
            nat: NATIONALITIES[key].name,
        };
    });

    let third = newObj.map((item, index) => ({ ...item, ...newObjNAt[index] }));
    return third;
}
