import React from 'react'
import style from './Blog.module.scss'
import Blogcard from '../blogcard/Blogcard'

const Blog = () => {
  return (
    <div className={style.main} id='blog'>

        <p className={style.f}>
          Blog
        </p>
        <p className={style.s}>
          Blog Posts
        </p>

        <div className={style.cards}>

          <Blogcard image="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" name="Ham Brook"/>
          <Blogcard image="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" name="James Phelps"/>
          <Blogcard image="https://preview.colorlib.com/theme/selling/images/model_5_bg.jpg" name="James Phelps"/>

        </div>

    </div>
  )
}

export default Blog