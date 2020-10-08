import React, { useState, useEffect } from 'react';
import UserItemFn from '../userItem/index'
import './style.scss';
import { Row, Spin } from 'antd';

const View = (props) => {
console.log(props,'props itemsPAge')

    if (props.usersData == null) {
        return (
            <Spin />
        )
    }
    let userItems = props.usersData.map(i => <UserItemFn data={i} key={i.postcode} />);



    return (
        <div className={'usersItemsWrap'}>
            <Row gutter={8, 16}>
                {userItems}
            </Row>
        </div>

    )
}


export default View;
