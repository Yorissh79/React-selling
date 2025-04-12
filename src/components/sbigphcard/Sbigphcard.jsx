import React from 'react'
import style from './Sbigphcard.module.scss'

const Sbigphcard = (props) => {
  return (
    <div className={style.main}>
        
        <p className={style.f}>
            {props.time}
        </p>

        <p className={style.s}>
            {props.text}
        </p>

    </div>
  )
}

export default Sbigphcard