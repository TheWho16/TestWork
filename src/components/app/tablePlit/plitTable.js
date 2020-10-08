import React from "react";
import { version, Button, Card, Table, Pagination } from "antd";
import "antd/dist/antd.css";

export default class Plits extends React.Component {
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 150
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 150
    },
    {
      title: "Address",
      dataIndex: "address"
    },
    {
      title: "Expirationaaaabbb",
      dataIndex: "expirationaaaabbb"
    },
    {
      title: "Expiration",
      dataIndex: "expiration"
    },
    {
      title: "phone",
      dataIndex: "phone"
    }
  ];

  data = [
    {
      key: 1,
      name: `Edward King`,
      expirationaaaabbb: "hello",
      expiration: "this is a bug",
      age: 32,
      address: `London, Park Lane no.`,
      phone: "13132257654"
    },
    {
      key: 2,
      name: `Edward King`,
      expirationaaaabbb: "hello",
      expiration: "this is a bug",
      age: 32,
      address: `London, Park Lane no.`,
      phone: "15632257654"
    }
  ];
  render() {
    return (
      <div className="App">
        <p>Current antd version: {version}</p>
        <p>Please fork this codesandbox to reproduce your issue.</p>
        <p>请 fork 这个链接来重现你碰到的问题。</p>
        <Button type="primary">Hello</Button>
        <Card
          className="limitable"
          bodyStyle={{ padding: "0px", marginTop: 20, width: "100%" }}
        >
          <Table
            columns={this.columns}
            dataSource={this.data}
            pagination={false}
          />
          <div style={{ margin: 29, textAlign: "right" }}>
            <Pagination />
          </div>
        </Card>
      </div>
    );
  }
}