import React from "react";
import styles from "./Footer.module.css";
import logoInstagram from "../../assets/logoInstagram.png";
import logoFacebook from "../../assets/logoFacebook.png";
import logoTwitter from "../../assets/logoTwitter.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <span> BE MY PAINT </span>
      </div>
      <div className={styles.footer_block}>
        <div className={styles.footer_info}>
          <p>СОГЛАШЕНИЕ</p>
          <p>ТАРИФЫ</p>
          <p>КОНТАКТНАЯ ИНФОРМАЦИЯ</p>
        </div>
        <div className={styles.footer_info_1}>
          <p>О ПРОЕКТЕ</p>
          <p>КАК ЭТО РАБОТАЕТ</p>
          <p>ЧАСТЫЕ ВОПРОСЫ</p>
        </div>
        <div className={styles.footer_info_2}>
          <p>АУКЦИОН</p>
          <p>ХУДОЖНИКИ</p>
          <p>БЛОГ</p>
        </div>
        <div className={styles.footer_info_3}>
            <p>РЕКЛАМА НА САЙТЕ</p>
            <p>ПОДПИСКА НА РАССЫЛКУ</p>
            <div className={styles.footerpng}>
            <img src={logoInstagram} alt='instagram' />
              <img src={logoFacebook} alt='facebook' />
              <img src={logoTwitter} alt='Twitter' />
            </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
