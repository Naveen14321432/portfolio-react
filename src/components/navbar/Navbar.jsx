//import React from 'react'
import './Navbar.css';
import { useState, useEffect } from 'react';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { useRef } from 'react';
const Navbar = () => {

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      //console.log("Scroll position:", window.scrollY);
      setIsTop(window.scrollY < 50);
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

  const [menu, setMenu] = useState("home")
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <h2>Naveen Kammili</h2>
      {isTop && (
        <img src={menu_open} onClick={openMenu} alt='' className={`nav-mob-open ${!isTop ? 'hidden' : ''}`}/>
      )}
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("experience")}>Experience</p></AnchorLink>{menu==="experience"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#certificates'><p onClick={()=>setMenu("certifications")}>Certifications</p></AnchorLink>{menu==="certifications"?<img src={underline} alt=''/>:<></>}</li>
        
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
