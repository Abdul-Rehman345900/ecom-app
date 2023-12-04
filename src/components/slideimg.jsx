import React from 'react';
import { Carousel } from 'antd';
import '../style/slidestyle.css';


const contentStyle = {
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'blue',
};

const App = () => (
  <Carousel autoplay>
    <div className='slide' >
      <img style={contentStyle} src="https://img.freepik.com/free-photo/photography-black-hoodie-green-background_1409-5173.jpg?t=st=1701707615~exp=1701711215~hmac=74305cf3353a96d0109a2ddfaf855e93a99f09032124a0460fdcdff15e43c342&w=740" alt="" /><p>ncbcdbcnasxkasnx</p>

      
    </div>
    <div className='slide' >
      <img style={contentStyle} src="https://img.freepik.com/free-photo/bff-printed-red-hoodie_53876-105408.jpg?size=626&ext=jpg&ga=GA1.1.999932694.1701707549&semt=sph" alt="" />
      <div className="slide-content">
          {/* <p className="caption">Caption 1</p> */}
          <p>ncbcdbcnasxkasnx</p>
        </div>
    </div>

    <div className='slide' >
      <img style={contentStyle} src="https://img.freepik.com/free-psd/3d-editable-hoodie-mock-up-design_1048-12288.jpg?size=626&ext=jpg&ga=GA1.1.999932694.1701707549&semt=sph" alt="" />
      <p>ncbcdbcnasxkasnx</p>
    </div>
    <div className='slide' >
      <img style={contentStyle} src="https://img.freepik.com/premium-psd/free-editable-mock-up-front-view-stylish-man-black-hoodie-your-brand_756803-13.jpg?size=626&ext=jpg&ga=GA1.1.999932694.1701707549&semt=sph" alt="" />
      <p>ncbcdbcnasxkasnx</p>
    </div>
 </Carousel> 
 
);

export default App;

