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
      <img style={contentStyle} src="https://captaincreps.com/wp-content/uploads/2021/10/Air-Max-270.png" alt="" />
      
    </div>
    <div className='slide' >
      <img style={contentStyle} src="https://captaincreps.com/wp-content/uploads/2021/10/Nike-Air-Max-90-Wolf-Grey-Black-On-Foot-Side_w900.jpg" alt="" />
      <div className="slide-content">
          <p className="caption">Caption 1</p>
        </div>
    </div>

    <div className='slide' >
      <img style={contentStyle} src="https://pbs.twimg.com/media/DLwvQmnW0AAOYlS.jpg:large" alt="" />
    </div>
    <div className='slide' >
      <img style={contentStyle} src="https://captaincreps.com/wp-content/uploads/2021/10/Air-MAx-720-1.jpg" alt="" />
    </div>
  </Carousel>
);
export default App;

