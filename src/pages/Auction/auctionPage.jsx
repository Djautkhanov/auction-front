import React, { useEffect, useState } from "react";
import styles from "./AuctionPage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
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
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.imgBlock}>
        <div className={styles.imgDiv}>
          <h1 className={styles.title}>АУКЦИОНЫ</h1>
        </div>

        <div className={styles.btnDiv}>
          <div className={styles.lot}>Нашли 10 лотов</div>             
          <input
            value={serch}
            onChange={(e) => setSerch(e.target.value)}
            className={styles.btnInput}
            type="text"
            placeholder="Введите ключевые слова"
          ></input>
          <button>НАЙТИ</button>
        </div>
      </div>
      <div className={styles.side_bar}>
        <Sidebar />
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
  );
};

export default AuctionPage;
