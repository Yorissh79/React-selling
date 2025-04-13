import React from 'react'
import style from './Testi.module.scss' 
import Testicard from '../testicard/Testicard'

const Testi = () => {
  return (
    <div className={style.main} id='Testimonials'>

        <p className={style.f}>
          People Says
        </p>

        <p className={style.s}>
          Testimonials
        </p>

        <div className={style.slider}>

          <Testicard image="https://preview.colorlib.com/theme/selling/images/person_4.jpg" name="Roger Spears"/>
          <Testicard image="https://preview.colorlib.com/theme/selling/images/person_3.jpg" name="John Smith"/>
          <Testicard image="https://preview.colorlib.com/theme/selling/images/person_2.jpg" name="Robert Aguilar"/>
          <Testicard image="https://preview.colorlib.com/theme/selling/images/person_1.jpg" name="Kyle McDonald"/>

        </div>

    </div>
  )
}

export default Testi