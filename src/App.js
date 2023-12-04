import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import  Data from './components/Data';
import Slideimg from './components/slideimg';
import  Floatbutton  from './components/floatbutton';
import Footer from './components/footer';
import  Drawerr  from './components/drawerr';





export default function  App() {
  const [cart ,setcart] = useState(false);

  function openDrawer(){
    setcart(true);
  };

  function closeDrawer(){
    setcart(false);
};

  return (
    <div className='container'>
    <Header opendrawer={openDrawer} />
    <Drawerr close={closeDrawer} cart={cart} />
    <Slideimg/>
    <Data/>
    <Floatbutton/> 
    <Footer/>
    </div>
    )
};
