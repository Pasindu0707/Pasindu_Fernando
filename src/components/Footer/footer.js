import React from 'react'
import logo from '../../assets/PASINDU FERNANDO (1).png'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
    <hr className='line'></hr>
      <img src={logo} alt='logo' className='logo' />
      <p className='rights'>All rights reserved &#169; 2023 | Made with ❤ by Pasindu.</p>
    </footer>
  )
}

export default Footer
