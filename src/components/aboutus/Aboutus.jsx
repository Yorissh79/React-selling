import React from 'react'
import style from './Aboutus.module.scss'

const Aboutus = () => {
  return (
    <div className={style.main} id='about_us'>
      
        <div className={style.imgbox}>

            <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" alt="" />

        </div>

        <div className={style.text}>

            <h3 className={style.f}>
                MERCHANT COMPANY
            </h3>

            <p className={style.s}>
                About Us
            </p>

            <p className={style.t}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>

            <button className={style.btn}>LEARN MORE</button>
        </div>

        <div className={style.exp}>

            <p className={style.f}>Trusted Merchant</p>
            <p className={style.s}>FOR 50 YEARS</p>

        </div>

    </div>
  )
}

export default Aboutus