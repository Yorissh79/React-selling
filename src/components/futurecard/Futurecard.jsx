import React from 'react'
import style from './Futurecard.module.scss'

const Futurecard = (props) => {
  return (
    <div className={style.main} style={{flexDirection:`${props.dir}`}}>
      
      <div className={style.imgbox}>
        <img src={props.image} alt="" />
      </div>

      <div className={style.text}>

        <p className={style.para}>
            About This Product
        </p>
        <p className={style.des}>
            Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!
        </p>
        <p className={style.des}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?
        </p>

        <div className={style.price}>

            <p className={style.pric}>Price:</p>
            <div className={style.money}>
                <del className={style.f}>
                    $269.00
                </del>
                <p className={style.s}>
                    $69.00
                </p>
            </div>

        </div>

        <div className={style.btn}>
            <button className={style.detail}>
                VIEW DETAILS
            </button>

            <button className={style.cart}>
                ADD TO CART
            </button>
        </div>

      </div>

    </div>
  )
}

export default Futurecard