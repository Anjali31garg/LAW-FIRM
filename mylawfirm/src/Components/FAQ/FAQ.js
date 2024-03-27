import React from "react";
import styles from "./FAQ.module.css";
import Accordion from "./Accordion/Accordion";


const faqData = [
    {
      id: 1,
      question: "How much is my case worth?",
      answer: "7000$",
    },
    {
      id: 2,
      question: "What should I do right after car accidect? ",
      answer: "Go to police station and surrender yourself",
    },
    {
      id: 3,
      question: "How much is my case worth?",
      answer: "7000$",
    },
  ];

const FAQ = ()=>{
return(
    <div className={styles.faqwrapper}>
    <div className={styles.faqhead}>
      <h3>FAQ</h3>
    </div>
    <div className={styles.content}>
      <div className={styles.descrip}>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className={styles.question}>
        <h5>Do I need a personal injury report?</h5>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </p>
        <div className="accordion-container">
          <Accordion data={faqData} />
        </div>
      </div>
    </div>
  </div>
)
}
export default FAQ;