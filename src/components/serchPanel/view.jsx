import React from 'react';
import { Input, Select, Checkbox, Card, Row, Col, Button, AutoComplete, Spin } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './style.scss'
import { getStatistikNat } from 'assets/helpFun/statistikNat';

const View = (props) => {

    const { Option } = Select;
    const statistik = props.statistik
    const filterValue = (event) => {
        console.log(event.target.value)
    }


    if (!statistik) {
        return <Spin />
    }
    const options = getStatistikNat(props.statistik).slice().map((a) => {
        return {
            value: a.nat
        }
    })



    return (
        <Card bordered={true}>
            <Input.Group >
                <Row >
                    <Col flex="auto">
                        <Row gutter={[16, 16]}>
                            <Col span={10}>
                                <Input.Search onChange={(event) => filterValue(event)} size='large' placeholder="Serch by full name" />
                            </Col>
                            <Col span={6}>
                                <Select className={'serchPanel_select'} size='large' placeholder="Gender">
                                    <Option value="Female">Female</Option>
                                    <Option value="Male">Male</Option>
                                    <Option value="Indeterminate">Indeterminate</Option>
                                </Select>
                            </Col>
                            <Col span={5}>
                                <AutoComplete
                                   className={'serchPanel_autoComplete'} 
                                    size='large'
                                    placeholder="Nationality"
                                    options={options}
                                />
                            </Col>
                            <Col className={'serchPanel_checkbox'} span={3}>
                                <Checkbox>
                                    Im a creator
                                </Checkbox>
                            </Col>
                        </Row>
                    </Col>
                    <Col flex="100px">
                        <Button className={'serchPanel_button'} type="link" icon={<CloseOutlined />} >
                            Close
                        </Button>
                    </Col>
                </Row>
            </Input.Group>
        </Card>
    )
}

export default View
