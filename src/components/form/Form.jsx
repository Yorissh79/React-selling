import React, { useState } from 'react'
import style from './Form.module.scss'
import axios from 'axios'

const Form = () => {

    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [msg, setMsg] = useState()

    const sendData = (e) => {
        e.preventDefault()
        if (fname){
            axios.post("https://northwind.vercel.app/api/categories", {
                fname : fname,
                lname : lname,
                email : email,
                subject : subject,
                msg : msg
            })
        }
    }

  return (
    <div className={style.main} id='contact'>
      
        <p className={style.f}>
        Contact Form
        </p>
        <p className={style.s}>
        Get In Touch
        </p>

        <div className={style.center}>

            <p className={style.par}>
            Contact Form
            </p>

            <div className={style.cen}>
                <div className={style.cenf}>
                    <p className={style.fi}>First Name</p>
                    <input type="text" onChange={(e) => {setFname(e.target.value)}}/>
                </div>

                <div className={style.cens}>
                    <p className={style.la}>Last Name</p>
                    <input type="text" onChange={(e) => {setLname(e.target.value)}}/>
                </div>

            </div>

            <div className={style.email}>
                <p className={style.la}>Email</p>
                <input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
            </div>

            <div className={style.email}>
                <p className={style.la}>Subject</p>
                <input type="text" onChange={(e) => {setSubject(e.target.value)}}/>
            </div>

            <div className={style.msg}>
                <p className={style.la}>Message</p>
                <textarea onChange={(e) => {setMsg(e.target.value)}} placeholder='Write your notes or questions here...' name="" id=""></textarea>
            </div>

            <button className={style.btn} onClick={sendData}>send Message</button>

        </div>

    </div>
  )
}

export default Form
