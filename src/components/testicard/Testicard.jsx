import React from 'react'
import style from './Testicard.module.scss'

const Testicard = (props) => {
  return (
    <div className={style.main}>

        <div className={style.imgbox}>

            <img src={props.image} alt="" />

        </div>

        <p className={style.f}>
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”
        </p>

        <strong className={style.s}>
          {props.name}
        </strong>

    </div>
  )
}

export default Testicard