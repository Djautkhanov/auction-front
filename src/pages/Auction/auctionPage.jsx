import React, { useEffect, useState } from "react";
import styles from "./AuctionPage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../features/itemSlice";

const AuctionPage = () => {
  const [serch, setSerch] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemSlice.items).filter((item) => {
    return item.name.toLowerCase().includes(serch.toLocaleLowerCase());          
  });

  useEffect(() => {
    dispatch(getItems());
  }, []);

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
              <div className={styles.auctCart}>
              {items.map((elems) => {
          return (
            <div className={styles.items_img}  key={elems.id}>
              <div className={styles.images}>
                <img src={`http://localhost:4000/${elems.img}`} /> 
              </div>
              <div>{elems.name}</div>
              <div>{elems.description}</div>
              <div>{elems.starting_price}</div>      
            </div>
          );
        })}      
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
