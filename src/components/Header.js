import React from 'react';
import { Component } from 'react';
import Header from '../components/Header';
import  '../style/Navbar.css';
import { ShoppingCartOutlined } from '@ant-design/icons';


const Navbarr = (props) => {
  return (
    <nav>
      <div> <a href='nike.com'><img src="https://i.pinimg.com/originals/6a/4f/d3/6a4fd37ecd7daf28531ec7f8752e7c34.png"></img></a> 
     </div>
      {/* <nav style={{ background: 'url("your-image-url.jpg") center/cover', padding: '10px' }}> */}
      
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>Contact</li>
        <button onClick={props.opendrawer} ><ShoppingCartOutlined/></button>
      </ul>
    </nav>
    

  );

};

export default Navbarr;


