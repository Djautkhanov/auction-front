import React from "react";
import styles from "./AuctionPage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const AuctionPage = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.imgBlock}>
          <div className={styles.imgDiv}>
            <h1 className={styles.title}>АУКЦИОНЫ</h1>
          </div>
          <div className={styles.aucMain}>
            <div className={styles.side_bar}>
              <Sidebar />
            </div>
            <div className={styles.auctMap}>
              <div className={styles.btnDiv}>
                <div className={styles.lot}>Нашли 10 лотов</div>
                <div className={styles.search}>
                <input
                  className={styles.btnInput}
                  type="text"
                  placeholder="Введите ключевые слова"
                ></input>
                <button>НАЙТИ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuctionPage;
