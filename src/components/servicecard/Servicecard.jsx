import React, { useState } from 'react'
import style from './Servicecard.module.scss'
import { MdPieChart } from "react-icons/md";
import { IoBackspace } from "react-icons/io5";
import { IoMdTimer } from "react-icons/io";
import { MdBeenhere } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";
import { IconContext } from 'react-icons';

const Servicecard = (props) => {

  const check = (item) => {

    if (item == "f") {

      return (
        <IconContext.Provider value={{color:"#f16821", className:`${style.icon}`}}>
          <MdPieChart/>
        </IconContext.Provider>
      ) 
    } 
    else if (item == "s") {
      return (
        <IconContext.Provider value={{color:"#f16821", className:`${style.icon}`}}>
          <IoBackspace/>
        </IconContext.Provider>
      ) 
    }
    else if (item == "t") {
      return (
        <IconContext.Provider value={{color:"#f16821", className:`${style.icon}`}}>
          <IoMdTimer/>
        </IconContext.Provider>
      ) 
    }
    else if (item == "fo") {
      return (
        <IconContext.Provider value={{color:"#f16821", className:`${style.icon}`}}>
          <MdBeenhere/>
        </IconContext.Provider>
      ) 
    }
    else if (item == "fi") {
      return (
        <IconContext.Provider value={{color:"#f16821", className:`${style.icon}`}}>
          <MdBusinessCenter/>
        </IconContext.Provider>
      ) 
    }
    else if (item == "si") {
      return (
        <IconContext.Provider value={{color:"#f16821", className:`${style.icon}`}}>
          <IoMdCloudDone/>
        </IconContext.Provider>
      ) 
    }

  }


  return (
    <div className={style.main}>

      <div className={style.left}>

        {check(props.icon_f)}

      </div>

      <div className={style.right}>

        <p className={style.f}>{props.f}</p>
        <p className={style.s}>{props.s}</p>
        <a href={props.link} className={style.t}>{props.t}</a>

      </div>

    </div>
  )
}

export default Servicecard

