import React from 'react'
import style from './Blogcard.module.scss'

const Blogcard = (props) => {
  return (
    <div className={style.main}>

        <div className={style.imgbox}>

          <img src={props.image} alt="" />

        </div>

        <div className={style.text}>

          <a className={style.f}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </a>

          <div className={style.center}>
            
              <p className={style.fs}>
                {props.name}
              </p>

              <ul>
                <li>Jan 18, 2019</li>
                <li className={style.news}>News</li>
              </ul>

          </div>

          <p className={style.s}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
          </p>

          <a className={style.t}>
            Continue Reading...
          </a>

        </div>

    </div>
  )
}

export default Blogcard