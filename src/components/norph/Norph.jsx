import React, { useState } from 'react'
import style from './Norph.module.scss'
import axios from 'axios'

const Norph = () => {

    const [data, setData] = useState("")

    const sendData = (e) => {
        e.preventDefault()
        axios.post("https://northwind.vercel.app/api/categories", {
            email : data
        })
    }

  return (
    <div className={style.main}>

        <div className={style.center}>
            <p className={style.para}>
                Get notified on each updates.
            </p>
            
            <div className={style.centerr}>
                <input type="text" placeholder='Enter your email address' onChange={e => setData(e.target.value)}/>
                <button className={style.btn} onClick={sendData}>
                    SUBSCRIBE
                </button>
            </div>

            <p className={style.lorem}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat commodi veniam doloremque ducimus tempora.
            </p>
        </div>

    </div>
  )
}

export default Norph