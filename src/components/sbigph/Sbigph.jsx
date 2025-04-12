import React from 'react'
import style from './Sbigph.module.scss'
import Sbigphcard from '../sbigphcard/Sbigphcard'

const Sbigph = () => {
  return (
    <div className={style.main} id='special'>

        <div className={style.container}>

          <p className={style.f}>Special Promo</p>
          <p className={style.s}>Summer Sale</p>
          <p className={style.t}>Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>

          <div className={style.cards}>

            <Sbigphcard time="00" text="weeks"/>
            <Sbigphcard time="00" text="days"/>
            <Sbigphcard time="00" text="hr"/>
            <Sbigphcard time="00" text="min"/>
            <Sbigphcard time="00" text="sec"/>

          </div>

          <button className={style.btn}>SHOP NOW</button>
          
        </div>

    </div>
  )
}

export default Sbigph