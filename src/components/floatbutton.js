// import React from 'react';
// import "../style/float.css" ;

// let App = () => {
//   let openWhatsApp = () => {
//     window.open('https://api.whatsapp.com/send?phone=03229858397', '_blank');
//   };

//   return (
//     <div  onClick={openWhatsApp}>
//       <img className='float'
//         src="https://cdn-icons-png.flaticon.com/512/2582/2582600.png" 
//         alt="WhatsApp"
        
//       />
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { FloatButton } from 'antd';


  let openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=03229858397', '_blank');
  };
  let App = () => <FloatButton onClick={openWhatsApp} />;
  export default App;
  
(
  <img className='float'
        src="https://cdn-icons-png.flaticon.com/512/2582/2582600.png" 
        alt="WhatsApp"
        
      />
)

