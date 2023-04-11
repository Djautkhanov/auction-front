import React, { useEffect, useState } from "react";
import styles from "./AuctionPage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../features/itemSlice";

const AuctionPage = () => {
  const [serch, setSerch] = useState("");
  const dispatch = useDispatch();

  const [minPrice, setMinPrice] = React.useState("1090");
  const [maxPrice, setMaxPrice] = React.useState("100900");

  const price = useSelector((state) => state.itemSlice.items);

  const filteredItems = price
    .filter((item) => {
      if (
        item.starting_price >= Number(minPrice) &&
        item.starting_price <= Number(maxPrice)
      ) {
        return item;
      }
    })
    .filter((item) => {
      return item.name.toLowerCase().includes(serch.toLocaleLowerCase());
    });

  useEffect(() => {
    dispatch(getItems());
  }, []);

  if (!price.length) {
    return "Loading";
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.imgBlock}>
        <div className={styles.imgDiv}>
          <h1 className={styles.title}>АУКЦИОНЫ</h1>
        </div>

        <div className={styles.btnDiv}>
          <div className={styles.lot}>Найдено {filteredItems.length} лота</div>
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
      <div className={styles.items_div}>
        <div className={styles.side_bar}>
          <Sidebar
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        </div>
        <div className={styles.lots}>
          {filteredItems.map((elems) => {
            return (
              <div className={styles.items_img} key={elems._id}>
                <div className={styles.images}>
                  <img
                    src={`http://localhost:4000/uploads/${elems.img}`}
                    alt="item"
                  />
                </div>
                <div>{elems.name}</div>
                {/* <div>{elems.description}</div> */}
                <div>{elems.starting_price} ₽</div>
                <button className={styles.rate_btn}>Сделать ставку</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AuctionPage;
