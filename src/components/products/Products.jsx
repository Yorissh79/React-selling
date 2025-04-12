import React, { useEffect, useState } from 'react'
import Card from '../procard/Procard'
import style from './Products.module.scss'
import axios from 'axios'

const Products = () => {

    const [data, setData] = useState([])

    const getData = () => {

        axios.get("./database.json")
        .then(res => setData(res.data))
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className={style.main} id='products'>

        <div className={style.header}>

            <p className={style.f}>Popular Products</p>
            <p className={style.s}>Our Products</p>
            <p className={style.t}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>

        </div>

        <div className={style.cards}>

            {data && data.map(item => <Card item={item}/>)}

        </div>

    </div>
  )
}

export default Products