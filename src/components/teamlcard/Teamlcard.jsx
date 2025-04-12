import React from 'react'
import style from './Teamlcard.module.scss'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

const Teamlcard = (props) => {
  return (
    <div className={style.main}>
        
        <div className={style.imgbox}>

            <img src={props.image} alt="" />

        </div>

        <div className={style.text}>

            <p className={style.f}>{props.name}</p>
            <p className={style.s}>{props.job}</p>
            <p className={style.t}>
                Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.
            </p>

        </div>

        <div className={style.icons}>
          
            <div className={style.blackRound}>
                <FaFacebookF style={{fill:"white", fontSize:"0.9rem"}}/>
            </div>

            <div className={style.blackRound}>
                <FaTwitter style={{fill:"white", fontSize:"0.9rem"}}/>
            </div>

            <div className={style.blackRound}>
                <FaLinkedinIn style={{fill:"white", fontSize:"0.9rem"}}/>
            </div>

            <div className={style.blackRound}>
                <FaInstagram style={{fill:"white", fontSize:"0.9rem", textAlign:"center"}}/>
            </div>
          
        </div>

    </div>
  )
}

export default Teamlcard