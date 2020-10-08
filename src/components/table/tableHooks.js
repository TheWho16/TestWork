
import React from 'react'
import reqwest from 'reqwest';
import { Tag, Typography, Table } from 'antd';
import { NATIONALITIES } from 'constants/nationalities';
import './table.scss'

const locationRender = (location) => {
    const { Paragraph } = Typography;
   
    return (
        <Paragraph className={'country_paragraph'} copyable>{`/${location.country}/`+        
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

const getRandomuserParams = params => {
    return {
        results: params.pagination.pageSize,
        page: params.pagination.current,
        ...params,
    };
};

class TableIn extends React.Component {
    state = {
        data: [],
        pagination: {
            current: 1,
            pageSize: 10,
        },
        loading: false,
    };

    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };

    fetch = (params = {}) => {
        this.setState({ loading: true });
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            type: 'json',
            data: getRandomuserParams(params),
        }).then(data => {
            console.log(data);
            this.setState({
                loading: false,
                data: data.results,
                pagination: {
                    ...params.pagination,
                    total: 200,
                    // 200 is mock data, you should read it from server
                    // total: data.totalCount,
                },
            });
        });
    };

    render() {
        const { data, pagination, loading } = this.state;
        console.log('data',data)
        return (
            <Table
                columns={columns}
                rowKey={record => record.login.uuid}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                scroll={{ x: 1500 }}
                onChange={this.handleTableChange}
            />
        );
    }
}

export default TableIn