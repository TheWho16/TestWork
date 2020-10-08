import React, { useState, useEffect } from 'react';
import { Tag, Typography, Table, Spin, Pagination } from 'antd';
import { NATIONALITIES } from 'constants/nationalities';
import './table.scss'
import Statistic from 'components/statistic';

const locationRender = (location) => {
    const { Paragraph } = Typography;

    return (
        <Paragraph className={'country_paragraph'} copyable>{`/${location.country}/` +
            `${location.street.number}, ${location.street.name}, ${location.city}, ${location.state}, ${location.postcode}`}</Paragraph>
    )


}
const countryRender = (nat) => {
    for (var i in NATIONALITIES) {
        if (i === nat) {
            return (
                <Tag color={NATIONALITIES[i].color}>{NATIONALITIES[i].name}</Tag>
            )
        }
    }


}
const avatarRender = (picture) => {
    return (
        <img className='thumbnail_avatar' src={picture.thumbnail} />
    )
}
const paragrafRender = (...data) => {
    const { Paragraph } = Typography;
    return (
        <Paragraph copyable>{data}</Paragraph>
    )
}
const dateRender = (dob) => {
    const data = new Date(dob.date)
    return (
        <p>{`${data}`},{dob.age}years</p>
    )
}


const columns = [
    {
        title: 'Avatar',
        dataIndex: 'picture',
        render: picture => avatarRender(picture),
    },
    {
        title: 'Full Name',
        dataIndex: 'name',
        sorter: true,
        render: name => `${name.first} ${name.last}`,
        width: '20%',

    },
    {
        title: 'Birthday',
        dataIndex: 'dob',
        width: '20%',
        render: dob => dateRender(dob)
    },
    {
        title: 'Email',
        dataIndex: 'email',
        render: email => paragrafRender(email)
    },
    {
        title: 'Phone Number',
        dataIndex: 'phone',
        width: '10%',
        render: phone => paragrafRender(phone)
    },
    {
        title: 'Location',
        dataIndex: 'location',
        width: '20%',
        render: location => locationRender(location),
    },
    {
        title: 'Nationality',
        dataIndex: 'nat',
        render: nat => countryRender(nat)
    }
];



const View = (props) => {
    const [page, setpage] = useState(1);
    const [users, setusers] = useState(10);



    const loader = props.loader;
    const pagination = { page: page, pageSize: users };
    useEffect(() => {
        if (props.usersData === null) {
            console.log(pagination, 'pagination pagination pagination')
            props.getAllUserTableThunk({ pagination });
        }

    });


    const handleTableChange = (pagination, filters, sorter) => {
        setpage(pagination.current)
        setusers(pagination.pageSize)
        props.getAllUserTableThunk({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };


    if (props.usersData === null) {
        return <Spin></Spin>
    }


    return (
        <div className={'table_wrap'}>
            <Table
                columns={columns}
                rowKey={record => record.login.uuid}
                dataSource={props.usersData.data}
                pagination={props.usersData.pagination}
                loading={loader}
                scroll={{ x: 1500 }}
                onChange={handleTableChange}
            />
            <Statistic />
            <br />
        </div>
    );

}

export default View