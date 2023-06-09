import React from "react";
// import { Link } from 'react-router-dom'
import styles from "../Main/Main.module.scss";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.main_container}>
        <div className={styles.main}>
          <div>
            <h1>
              онлайн аукцион <br />
              современного искусства
            </h1>
            <div className={styles.btn}>
              <Link to="/registration">
                <button>стать участником</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
