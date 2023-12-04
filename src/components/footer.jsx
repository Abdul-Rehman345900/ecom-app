// import React from 'react';
// import '../style/footerimgs.css';

// let Footer = (props) => {

//   return (
    
//     <footer>
//       <div className="footer-content">
//         <div className="footer-logo">
//           <img src='https://i.pinimg.com/originals/6a/4f/d3/6a4fd37ecd7daf28531ec7f8752e7c34.png' alt="Nike Logo" />
//         </div>
//         <div className="footer-social-icons">
//           <a href="https://www.facebook.com">
//             <img src="" alt="" />
//           </a>
//           <a href="https://www.facebook.com">
//             <img src="" alt="" />
//           </a>
//           <a href="https://www.facebook.com">
//             <img src="" alt="" />
//           </a>
//           <a href="https://www.facebook.com">
//             <img src="" alt="" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };



import React from 'react';
import '../style/footerimgs.css';

let Footer = (props) => {

  return (
    

<footer>
<div>

    <a href='https://mail.google.com/mail/u/0/#inbox' target='blank'>
    <img src="./icons/mail-outline.svg" alt="" /></a>
    <a href='https://www.instagram.com/' target='blank'>
    <img src="./icons/logo-instagram.svg" alt="instagram icon" /></a>
    <a href="https:/www.facebook.com/" target="blank">
    <img src="./icons/logo-facebook.svg" alt="facbook icon" /></a>
    <a href="https://web.whatsapp.com/" target="blank">
    <img src="./icons/logo-whatsapp.svg" alt="WhatsApp Icon"/>
</a>
</div>

</footer>
)};

export default Footer;