import React from "react";
import styles from "./Footer.module.css";
import instagram from "../../assets/instagram.png";
import pinterest from "../../assets/pinterest.png";
import tiktok from "../../assets/tiktok.png";
import vkontakte from "../../assets/vkontakte.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter-sign.png"

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
        <div className={styles.footer_info}>
          <p>О ПРОЕКТЕ</p>
          <p>КАК ЭТО РАБОТАЕТ</p>
          <p>ЧАСТЫЕ ВОПРОСЫ</p>
        </div>
        <div className={styles.footer_info}>
          <p>АУКЦИОН</p>
          <p>ХУДОЖНИКИ</p>
          <p>БЛОГ</p>
        </div>
        <div className={styles.footer_info}>
          <p>РЕКЛАМА НА САЙТЕ</p>
          <p>ПОДПИСКА НА РАССЫЛКУ</p>
          <div className={styles.footerpng}>
            <img src={instagram} alt="instagram" />
            <img src={pinterest} alt="facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={tiktok} alt="Twitter" />
            <img src={youtube} alt="Twitter" />
            <img src={vkontakte} alt="Twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
