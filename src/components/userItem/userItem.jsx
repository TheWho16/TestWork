import React from 'react'
import './style.scss';
import { Card, Typography, Col } from 'antd';
import { Tag } from 'antd';
import { NATIONALITIES } from 'constants/nationalities';




const UserItemFn = (props) => {
  const { Paragraph } = Typography;

  const { street: { number, name }, picture: { medium }, name: { title, first, last }, userState, age, email, city, country, phone, postcode, nat } = props.data

  const titleRender = (
    <div className={"user__title__wraper"}>
      <p className={"user__title__p"}>{title} {first} {last}</p>
      <small className={"user__title__small"}>({age})</small>
    </div>

  )

  const countryRender = (nat) => {
    for (var i in NATIONALITIES) {
      console.log(nat,'helpNAt')
      if (i === nat) {
        return (
          <Tag color={NATIONALITIES[i].color}>{NATIONALITIES[i].name}</Tag>
        )
      }
    }


  }
  const nation = countryRender(nat)
  const userAdrres = <div className={'user__andress'}><p>{number} {name}, {city}, {userState} {postcode}</p><h5>/{country}/</h5></div>


  return (
    <div className={'userCard'}>
      <Col span={24 / 6}>

        <Card
          className='card_item'
          hoverable
          cover={<img className='card_img' alt="example" src={medium} />}
        >
          <Card className={'user__title'} style={{ height: 50 }} title={titleRender} bordered={false} style={{ color: '#1890ff' }}></Card>
          <Paragraph ellipsis copyable>{email}</Paragraph>
          <Paragraph ellipsis copyable>{phone}</Paragraph>
          <Paragraph copyable>{userAdrres}</Paragraph>
          {nation}
        </Card>

      </Col >
    </div>
  )


}




export default UserItemFn;

