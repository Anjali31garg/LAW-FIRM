import React, { useState } from "react";

import Heroo from '../../assests/Hero.png';
import styles from "./Hero.module.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EmailIcon from '@mui/icons-material/Email';
const Hero = () =>{
const[email,setEmail] = useState("");

const handleEmail = (e) =>{
    const typedEmail = e.target.value;
    console.log("Typed email:", typedEmail); // Console log the typed email
    setEmail(typedEmail);

}


const emailSubmit = ()=>{
    if(!email){
        alert("Please enter your email");
        return;
    }else{
        setEmail("");
    }

}
    return (
        <>
          <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>You don't have to Fight them Alone.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.</p>
          <div className={styles.emailWrapper}>
          <EmailIcon className={styles.emailIcon} />
          <input type="text" value={email} onChange={handleEmail} placeholder="Enter your eamil address" />
          <button onClick={emailSubmit}>Let's Talk</button>
        </div>

        </div>
        <div className={styles.heroImage}>
        <img className={styles.heromain} src={Heroo} alt="heroImage"/>
        </div>
        </div>
        </>
    )
}

export default Hero;