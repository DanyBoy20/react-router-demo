import React from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();
  const { propiedad } = location.state;

    return (
      <div className='Contact'>
        <h1>Contact !!!</h1>
        <p>CONTACT US</p>
        <p>{propiedad}</p>
      </div>
    );
  
}
 
export default Contact;