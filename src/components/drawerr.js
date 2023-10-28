import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
const App = (props) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');

  let {close, cart} = props

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    
    <>
      <Drawer
        title="Basic Drawer"
        placement={'right'}
        closable={false}
        onClose={close}
        open={cart}
        key={'right'}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default App;