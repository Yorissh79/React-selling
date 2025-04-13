import React from "react";
import style from "./Footer.module.scss";
import { HiHeart } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.center}>
        <div className={style.centers}>
          <div className={style.left}>
            <p className={style.a}>About Us</p>

            <p className={style.af}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
              veritatis aliquam.
            </p>
          </div>

          <div className={style.cen}>
            <p className={style.q}>Quick Links</p>

            <ul>
              <li>
                <a href="#about_us">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className={style.cens}>
            <p className={style.fol}>Follow Us</p>

            <div className={style.icons}>
              <div className={style.blackRound}>
                <FaFacebookF style={{ fontSize: "1rem" }} />
              </div>

              <div className={style.blackRound}>
                <LuTwitter style={{ fontSize: "1rem" }} />
              </div>

              <div className={style.blackRound}>
                <FaInstagram style={{ fontSize: "1rem" }} />
              </div>

              <div className={style.blackRound}>
                <FaLinkedinIn style={{ fontSize: "1rem" }} />
              </div>
            </div>
          </div>
        </div>

        <div className={style.right}>
          <p className={style.fut}>Featured Product</p>

          <div className={style.imgbox}>
            <img
              src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
              alt=""
            />
          </div>

          <p className={style.s}>Leather Brown Shoe</p>
          <p className={style.t}>$60.00</p>
          <button className={style.btn}>add to cart</button>
        </div>
      </div>

      <div className={style.bottom}>
        <p className={style.bf}>
          Copyright ©2025 All rights reserved | This template is made with{" "}
          <HiHeart style={{ width: "20px", height: "20px" }} /> by{" "}
          <a href="#">Colorlib</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
