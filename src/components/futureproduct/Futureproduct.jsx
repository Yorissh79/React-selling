import React from 'react'
import style from './Futureproduct.module.scss'
import Futurecard from '../futurecard/Futurecard'

const Futureproduct = () => {
  return (
    <div className={style.main}>

      <div className={style.header}>

            <p className={style.f}>Awesome Products</p>
            <p className={style.s}>Featured Products</p>
            <p className={style.t}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>

        </div>

        <div className={style.cards}>
          
          <Futurecard image="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" dir="row"/>
          <Futurecard image="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" dir="row-reverse"/>

        </div>

    </div>
  )
}

export default Futureproduct