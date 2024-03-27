import React from "react";
import styles from "./Practice.module.css";
import { Grid,Box } from "@mui/material";
import image1 from "../../assests/image1.png";
import image2 from "../../assests/image2.png";
import image3 from "../../assests/image3.png";
import image4 from "../../assests/image4.png";
import image5 from "../../assests/image5.png";
import image6 from "../../assests/image6.png";

const Practice = () =>{
    return (
        <div className={styles.areaWrap}>
            <div className={styles.prac}>
                <h1>Area of Practices</h1>

            </div>

            <Box className={styles.gridContainer}  sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className={styles.wrapgrid}>
                <Grid item xs={6} md={8} className={styles.gridItem}>
                   <img src={image1}/> 
                    <p className={styles.largeImg}>BUSINESS LAW</p>

                </Grid>
                <Grid item xs={6} md={4} className={styles.gridItem}>
            <img src={image2} alt="business law" />
            <p className={styles.SmallImg}>Partnership LAW</p>
          </Grid>

          <Grid item xs={6} md={4} className={styles.gridItem}>
                    <img src={image3}/>
                    <p className={styles.SmallImg}>REAL ESTATE LAW</p>

                </Grid>
                <Grid item xs={6} md={8} className={styles.gridItem}>
            <img src={image4} alt="business law" />
            <p className={styles.largeImg}>BUSINESS LAW</p>
          </Grid>

          <Grid item xs={6} md={8} className={styles.gridItem}>
                   <img src={image5}/> 
                    <p className={styles.largeImg}>LANDLORD DISPUTES</p>

                </Grid>
                <Grid item xs={6} md={4} className={styles.gridItem}>
            <img src={image6} alt="business law" />
            <p className={styles.SmallImg}>ELDER ABUSE</p>
          </Grid>
          </Grid>
            </Box>
        </div>
    )
}

export default Practice;