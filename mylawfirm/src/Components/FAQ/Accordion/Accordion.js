
import React,{useState} from "react";
import styles from "./Accordion.module.css";


const Accordion = ({data}) =>{
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const toggle = (index) => {
      setExpandedQuestion((prev) => (prev === index ? null : index));
    };
    return (
        <>
          {data?.length
            ? data.map((each) => {
                const { id, question, answer } = each;
                return (
                  <>
                    <div key={id} className={styles.accordion}>
                      <div className={styles.heading}>
                        <h3>{question}</h3>
                        <div className={styles.icon}>
                          <p onClick={() => toggle(id)} className="btn-icon">
                            {expandedQuestion === id ? "➖" : "➕"}
                          </p>
                        </div>
                      </div>
                      {expandedQuestion === id ? (
                        <div className={styles.answer}>
                          <p>{answer}</p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                   
                  </>
                );
              })
            : null}
        </>
      );


}
export default Accordion;