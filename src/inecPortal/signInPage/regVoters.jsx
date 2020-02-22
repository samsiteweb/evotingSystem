import React, {Component} from 'react'

import { List, Avatar } from 'antd';

const data = [
  {
	title: ' Lawal Oladapo',
	details: 'Registration Date: 11/12/2019'
  },
  {
	title: 'Iyanu Alamala',
	details: 'Registration Date: 11/12/2019'
  },
  {
	title: 'Titilayo Ayomide',
	details: 'Registration Date: 11/12/2019'
  },
  {
	title: 'Malam Oladipupo',
	details: 'Registration Date: 11/12/2019'
  },
  {
	title: ' Lawal Oladapo',
	details: 'Registration Date: 11/12/2019'
  },
  {
	title: 'Iyanu Alamala',
	details: 'Registration Date: 11/12/2019'
  },
  {
	title: 'Titilayo Ayomide',
	details: 'Registration Date: 11/12/2019'
  },
  {
	title: 'Malam Oladipupo',
	details: 'Registration Date: 11/12/2019'
  },
];

class VotersList extends Component {
render() {
	return (
		<List style={{marginLeft: '20%', marginRight: '20%'}}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar  />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.details}
        />
      </List.Item>
    )}
  />
	)
} }

export default VotersList