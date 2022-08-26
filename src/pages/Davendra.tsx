// Component for the url /dave
import { Table } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Link',
    dataIndex: 'link', 
    key: 'link',
  },
];

const data = [
  { name: 'HK Sharma', link: 'https://dashboard.traqo.in/control_tower/' },
  { name: 'HK Sharma', link: 'https://dashboard.traqo.in/control_tower/' },
]
 
const ChildComp: React.FC = () => <h2>
  <Table columns={columns} dataSource={data} />
</h2>

const Davendra: React.FC = () => (
  <div>
    <ChildComp/>
  </div>
);

export default Davendra;
