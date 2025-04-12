import React from 'react'
import style from './Header.module.scss'
import { FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import { FaPhone } from "react-icons/fa6";
import { LuTwitter } from 'react-icons/lu'
import { IoMailSharp } from 'react-icons/io5'

const Header = () => {
  return (
    <div className={style.main} id='home'>

        <div className={style.icons}>

            <div className={style.blackRound}>
                <FaFacebookF style={{fill:"white", fontSize:"1rem"}}/>
            </div>

            <div className={style.blackRound}>
                <LuTwitter style={{fill:"white", fontSize:"1rem"}}/>
            </div>

            <div className={style.blackRound}>
                <FaInstagram style={{fill:"white", fontSize:"1rem"}}/>
            </div>

            <div className={style.blackRound}>
                <FaLinkedinIn style={{fill:"white", fontSize:"1rem"}}/>
            </div>

        </div>

        <div className={style.contact}>

            <div className={style.phone}>

                <FaPhone style={{color:"#F16821"}}/>
                <a href="#">(+1) 234 5678 9101</a>

            </div>

            <div className={style.email}>
                <IoMailSharp style={{color:"#F16821"}}/>
                <a href="#">shop@yourdomain.com</a>
            </div>

        </div>


    </div>
  )
}

export default Header