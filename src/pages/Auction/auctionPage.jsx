import React from "react";
import styles from "./AuctionPage.module.css";


const AuctionPage = () => {
  return (
    <div className={styles.wrapper}>  

    <div className={styles.imgBlock}>
      <div className={styles.imgDiv}>
      <h1 className={styles.title}>АУКЦИОНЫ</h1>
      </div>
      <div className={styles.btnDiv}>
        <input className={styles.btnInput} type="text" placeholder="Введите ключевые слова"></input>       
        <button>НАЙТИ</button>    
      </div>   
    </div>
    </div>
  );
};

export default AuctionPage;       
