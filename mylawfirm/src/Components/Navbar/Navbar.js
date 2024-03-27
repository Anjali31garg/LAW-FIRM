import React from "react";
import {ReactComponent as Logo} from "../../assests/Logo.svg";
import Tabs from "./Tabs/Tabs";
import styles from "./Navbar.module.css";
const Navbar = ({type = "header"}) =>{

    switch(type){
        case "header":
    return (
        
         <div className={styles.wrapper}>
          <Logo />
            <Tabs/>
          <button className={styles.btn}>Contact Now</button>
        </div>
      );
    
}
}
export default Navbar;

