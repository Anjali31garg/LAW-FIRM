import React, {useState} from 'react';
import styles from "./Newletter.module.css";

const Newletter = () =>{

    const [newsLetterForm, setNewsLetterForm] = useState({
		name: "",
		email: "",
	});

    const changeHandle = (name,event)=>{
        let val = event.target.value;
        setNewsLetterForm((prev)=>({
         ...prev,
         [name]: val,   
        }))
    }

    const handleSubmit = () =>{
        if(!name || !email){
            alert("Please fill in all the required fields");
			return;
        }
        setNewsLetterForm({name:"", email:""});

    }

    const {name,email} = newsLetterForm;
    return(
        <>
        <div className={styles.parent}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h3>Subscribe Our Newsletter</h3>
                </div>
                <div className={styles.inputwrap}>
                    <div className={styles.contain1}>
                        <input 
                        type='text'
                        placeholder='Name:'
                        value={name}
                        onChange={(e)=>{
                            changeHandle("name", e);
                        }}
                        />
                    </div>
                    <div className={styles.contain2}>
                        <input 
                        type='text'
                        placeholder='Enter your Email:'
                        value={email}
                        onChange={(e)=>{
                            changeHandle("email", e);
                        }}
                        />
                    </div>
                    
                    <div className={styles.btnContainer}>
                            <button type='submit' onClick={handleSubmit}>
                                SEND
                            </button>
                    </div>
                </div>
            </div>
</div>
        </>
    )

}

export default Newletter;
