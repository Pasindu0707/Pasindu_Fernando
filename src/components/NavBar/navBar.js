import React, { useState } from 'react';
import './navBar.css';
import logo from '../../assets/PASINDU FERNANDO (1).png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

function NavBar() {
  const [subMenu,setSubMenu]=useState(false)

  return (
    <nav className='navBar'>
      <img src={logo} alt='logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          HOME
        </Link>
        <Link activeClass='active' to='whatDo' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          SERVICES
        </Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          SKILLS
        </Link>
        <Link activeClass='active' to='experiences' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          EXPERIENCE
        </Link>
        <Link activeClass='active' to='email' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          CONTACT
        </Link>
      </div>

      <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setSubMenu(!subMenu)}/>
      <div className='navMenu' style={{display:subMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setSubMenu(false)}>
          HOME
        </Link>
        <Link activeClass='active' to='whatDo' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setSubMenu(false)}>
          SERVICES
        </Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setSubMenu(false)}>
          SKILLS
        </Link>
        <Link activeClass='active' to='experiences' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setSubMenu(false)}>
          EXPERIENCE
        </Link>
        <Link activeClass='active' to='email' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setSubMenu(false)}>
          CONTACT
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
