import React from 'react'
import style from './Navbar.module.scss'
import { BiMenu } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className={style.main}>

        <div className={style.logo}>
            <a href="#">Selling</a>
        </div>

        <div className={style.pages}>
            <ul>
                <li><a className={style.active} href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about_us">About us</a></li>
                <li><a href="#special">Special</a></li>
                <li><a href="#Testimonials">Testimonials</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        <div className={style.menu}>
          <BiMenu style={{width:"28px", height:"29px"}}/> 
        </div>

    </div>
  )
}

export default Navbar