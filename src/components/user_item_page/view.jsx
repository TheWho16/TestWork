import React, { useState, useEffect } from 'react';
import UserItemFn from '../userItem/index'
import './style.scss';
import { Row } from 'antd';
const View = (props) => {


    if (props.usersData == null) {
        return (
            <div>
                loader
            </div>
        )
    }
    let userItems = props.usersData.map(i => <UserItemFn data={i} key={i.id} />);



    return (
        <div className={'usersItemsWrap'}>
            <Row gutter={8, 16}>
                {userItems}
            </Row>

        </div>
    )
}


export default View;
