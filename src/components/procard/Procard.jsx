import React, { useEffect, useState } from 'react'
import style from './Procard.module.scss'
import { FaHeart, FaStar } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Procard = ({item}) => {

    const [data, setData] = useState(0)

    const checkData = () => {
        if (item.fav == "notfav") {
            setData("#E9ECEF")

        } else if (item.fav == "fav") {
            setData("#F23A2E")
        }
    }

    useEffect(() => {
        checkData()
    }, [])

  return (
    <div className={style.main}>

        <div className={style.imgbox}>
            <img src={item.image} alt="" />
        </div>

        <div className={style.text}>

            <a href='#' className={style.para}>
                {item.title}
            </a>

            <div className={style.icons}>
                <div className={style.star}>
                    <FaStar style={{color:"#F89D13"}}/>
                    <p className={style.par}>
                        {item.star}
                    </p>
                </div>

                <div className={style.heart}>
                    <IconContext.Provider value={{color:`${data}`, className:`${style.hear}`}}> 
                        <FaHeart/>
                    </IconContext.Provider>

                    <p className={style.par}>
                        {item.heart}
                    </p>
                </div>
            </div>

            <a href="#" className={style.des}>
                {item.description}
            </a>

        </div>

        <div className={style.btns}>
            <button className={style.cart}>
                CART
            </button>

            <button className={style.veiw}>
                VEIW
            </button>
        </div>

    </div>
  )
}

export default Procard