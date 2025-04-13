import React from 'react'
import style from './Services.module.scss'
import Servicecard from '../servicecard/Servicecard'

const Services = () => {
  return (
    <div className={style.main}>

        <p className={style.f}>
          Our Services
        </p>
        <p className={style.s}>
          We Offer Services
        </p>

        <div className={style.cards}>

          <Servicecard icon_f="f" f="Business Consulting" s="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." t="Learn More" link="#"/>
          <Servicecard icon_f="s" f="Business Consulting" s="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." t="Learn More" link="#"/>
          <Servicecard icon_f="t" f="Business Consulting" s="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." t="Learn More" link="#"/>
          <Servicecard icon_f="fo" f="Business Consulting" s="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." t="Learn More" link="#"/>
          <Servicecard icon_f="fi" f="Business Consulting" s="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." t="Learn More" link="#"/>
          <Servicecard icon_f="si" f="Business Consulting" s="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." t="Learn More" link="#"/>

        </div>

    </div>
  )
}

export default Services