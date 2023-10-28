import React from 'react';
import { Card, Divider, Flex } from 'antd';
import carddata from '../data/carddata.json';



const { Meta } = Card;
const App = () => (

<Flex style={{
    marginTop: '2rem',
    marginLeft:'25px',

}} wrap="wrap" gap="large">

{
carddata.map((product) => (
  <Card 
  hoverable
  style= {{
    width: 240,
    color: '#DFCCFB',
    backgroundColor: 'lightgray'
  }}
  cover={<img  alt="example" src={product.image} />}
>
  <Meta title={product.title} 
  description={ product.desc}/>
</Card>
))
}
</Flex>
);
export default App;