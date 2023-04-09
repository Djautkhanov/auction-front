import React from "react";
import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
// import { Slider } from "@mui/material";

const Sidebar = () => {
  const [minPrice, setMinPrice] = React.useState("1090");
  const [maxPrice, setMaxPrice] = React.useState("100900");        
  const handleChange = (e, value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.lists}>
        <h1>КАТЕГОРИЯ</h1>
        <ul className={styles.list}>
          <NavLink to="/">           
            <li>Живопись</li>
          </NavLink>
          <NavLink to="/">
            <li>Скульптура</li> 
          </NavLink>
          <NavLink to="/">
            <li>Цифровое исскуство</li>  
          </NavLink>
          <NavLink to="/">
            <li>Handmade</li>
          </NavLink>
        </ul>
      </div>
      <div className={styles.divtitle}>
        <h2>ПРОДАННЫЕ РАБОТЫ</h2>
        <div className={styles.divBlock}>
          <div className={styles.input}>
            <input className={styles.checkbox} type="checkbox" />   
            Показать проданные лоты
          </div>
          <div className={styles.price}>
            <div className={styles.textprice}>
              <h3>ТЕКУЩАЯ ЦЕНА $ </h3>

              <div className={styles.inputdiv}>
                <input
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  type="text"
                  placeholder="От"
                />
                <input
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  type="text"
                  placeholder="До"   
                />
              </div>
              <div className={styles.slidecontainer}>
                {/* <Slider */}
                  getAriaLabel={() => "Temperature range"}
                  min={1000}
                  max={100000}
                  value={[minPrice, maxPrice]}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  style={{ color: 'gainsboro'}}
                
                // {/* /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


