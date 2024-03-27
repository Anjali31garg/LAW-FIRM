import React from "react";
import styles from "./Client.module.css";

import client1 from "../../assests/client1.svg";
import client2 from "../../assests/client2.svg";
import client3 from "../../assests/client3.svg";

import { ReactComponent as LeftArrow } from "../../assests/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assests/rightArrow.svg";


const clientData = [
    {
      id: 1,
      image: client1,
      name: "Jane Cooper",
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
    },
    {
      id: 2,
      image: client2,
      name: "Devon Lane",
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
    },
    {
      id: 3,
      image: client3,
      name: "Robert Fox",
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
    },
  ];


  const Client = () => {
    return (
      <div className={styles.clientMain}>
        <div className={styles.clientTitle}>
          <h1>What says our happy Clients</h1>
          <div className={styles.btn}>
            <button className={styles.lefty}>
              <LeftArrow />
            </button>
            <button className={styles.righty}>
              <RightArrow />
            </button>
          </div>
        </div>
        <div className={styles.clientWrap}>
          {clientData.map((client) => {
            const {id, image, name, designation, description } = client;
            return (
              <div key={id} className={styles.dataWrap}>
                <div className={styles.myimg}>
                  <img src={image} alt="client" />
                </div>
                <div className={styles.clienthead}>
                  <h4>{name}</h4>
                  <p>{designation}</p>
                </div>
                <div className={styles.descrip}>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Client;