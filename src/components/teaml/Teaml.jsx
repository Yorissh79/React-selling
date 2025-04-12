import React from 'react'
import style from './Teaml.module.scss'
import Teamlcard from '../teamlcard/Teamlcard'

const Teaml = () => {
  return (
    <div className={style.main}>
        <p className={style.f}>TEAM</p>
        <p className={style.s}>Leadership</p>
        
        <div className={style.cards}>

            <Teamlcard image="https://preview.colorlib.com/theme/selling/images/person_2.jpg" name="John Rooster" job="Co-Founder, President"/>
            <Teamlcard image="https://preview.colorlib.com/theme/selling/images/person_3.jpg" name="Tom Sharp" job="Co-Founder, COO"/>
            <Teamlcard image="https://preview.colorlib.com/theme/selling/images/person_4.jpg" name="Winston Hodson" job="Marketing"/>

        </div>
        
    </div>
  )
}

export default Teaml