import React from 'react'
import style from './Bigph.module.scss'

const Bigph = () => {
  return (
    <div className={style.main}>

        <div className={style.container}>

            <p className={style.para}>Shop With Us</p>
            <p className={style.par}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.
            </p>

            <div className={style.btns}>
                <button className={style.shop}>SHOP NOW</button>
                <button className={style.club}>CLUB MEMBERSHIP</button>
            </div>

        </div>

    </div>
  )
}

export default Bigph