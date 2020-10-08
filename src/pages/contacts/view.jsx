import UserItemPage from 'components/user_item_page';
import React, { useState, useEffect } from 'react';
import { Pagination, Spin, Button, Radio } from 'antd';
import TableIn from 'components/table';
import './style.scss'
import { RedoOutlined, UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import Statistic from 'components/statistic';
import SerchPanel from 'components/serchPanel';

const View = (props) => {
  const [page, setpage] = useState(1);
  const [users, setusers] = useState(6);
  const [showPage, setshowPage] = useState(true)
  const userData = props.usersData
  const loader = props.loader
  console.log(loader,'loader')
  useEffect(() => {

    props.getAllUserThunk(page, users)
  }, [page, users]);

  const uploadData = () => {
    console.log('up')
    props.getAllUserThunk(page, users)
  }

  const onChange = (pageNumber) => {
    if (pageNumber !== page) {
      setpage(pageNumber)
    }
  }
  const onSize = (current, size) => {
    if (size !== users) {
      setusers(size)
    }
  }

  const radioChange = (event) => {
    setshowPage(event.target.value)
  }

  const itemPage = (
    <>
      <UserItemPage page={page} users={users} />
      <Statistic/>
      <Pagination
        total={586}
        pageSizeOptions={['6', '12', '36', '48']}
        showSizeChanger
        onChange={onChange}
        defaultPageSize={6}
        onShowSizeChange={onSize}
        showTotal={total => `Total ${total} items`}/>
    </>
  )

  const tablePage = (
    <>
      <TableIn/>
    </>
  )



  if (!userData) {
    return (
      <div className={'page contacts'}>
        <Spin />
      </div>
    )
  }

  return (
    <div className={'page contacts'}>
      <div className={'contacts_header'}>
        <h1>Contats</h1>

        <div className={'contacts_header_icons'}>
          <Button type="primary" shape="circle" onClick={uploadData}>
            <RedoOutlined />
          </Button>

          <Radio.Group defaultValue={showPage} buttonStyle="solid" onChange={radioChange}>
            <Radio.Button value={true}><AppstoreOutlined /></Radio.Button>
            <Radio.Button value={false}><UnorderedListOutlined /></Radio.Button>

          </Radio.Group>

        </div>
      </div>
      <SerchPanel/>
      {showPage ? itemPage : tablePage}


    </div>
  );
};

export { View };
