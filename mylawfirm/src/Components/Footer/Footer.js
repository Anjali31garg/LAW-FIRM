import React, {useState} from 'react';
import styles from "./Footer.module.css";
import {ReactComponent as Logo } from "../../assests/Logo.svg";

import Insta from "../../assests/Icon.png";
import Facebook from "../../assests/Icon1.png";
import Pinterest from "../../assests/Icon2.png";
import Twitter from "../../assests/Icon3.png";



const itemList = ["Home", "Attroneys", "Practice Areas", "About Us"];
const iconList = [Insta, Facebook, Twitter, Pinterest];

const Footer = () => {
    return (
      <div className={styles.wrapper}>
      <div className={styles.rowWrap}>
          <div className={styles.logo}>
              <Logo />
          </div>
          <div className={styles.listWrap}>
              <ul>
                  {itemList.map((each, index) => (
                      <li key={index}>{each}</li>
                  ))}
              </ul>
          </div>
          <div className={styles.iconWrap}>
              <ul className={styles.listContainer}>
                  {iconList.map((eachIcon, index) => (
                      <li key={index}>
                          <img src={eachIcon} alt="Icon" width={30} height={30} />
                      </li>
                  ))}
              </ul>
          </div>
      </div>
      <div className={styles.details}>
          <p>© 2020 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Developed By Anjali Garg</p>
      </div>
  </div>
    )
  }
  
  export default Footer;