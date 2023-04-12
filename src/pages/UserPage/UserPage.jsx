import React, { useEffect } from "react";
import styles from "./UserPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserBytoken, getUsers } from "../../features/authSlice";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getItems } from "../../features/itemSlice";

const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");  

  useEffect(() => {
    dispatch(getUserBytoken(token));
    dispatch(getUsers());
    dispatch(getItems())
    if (!token) {
      navigate("/auth"); 
    }
  }, [dispatch]);

  const id = localStorage.getItem("userId"); 

  const user =  useSelector((state) =>
    state.authSlice.user.find((user) => user._id === id)
  );
  console.log(user);
  const items = useSelector((state) => state.itemSlice.items.filter((item) => item.user_id === user._id))  
  console.log(items);

  if(!user){
    return (
      <>
      <Header/>
      <div className="MainLoad">
      <Loader/>
      </div>
      <Footer/>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className={styles.userMainImg}>
        <div className={styles.userImg}>
          <div className={styles.UserName}>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
          </div>
        </div>
        <div className={styles.userMain}>
          <div className={styles.userinfo}>
            <img src={`http://localhost:4000/uploads/${user.photo}`} alt="Avatar" className={styles.userImage} />
            <div className={styles.User}>
              <span>{user.firstName}</span> <span>{user.lastName}</span>
            </div>
            <div className={styles.numberItemsALL}>Всего лотов:</div>
            <div className={styles.numberItemsAuct}>Лотов на аукционе:</div>
            <div className={styles.numberItemsSold}>Проданные лоты:</div>
            <div className={styles.numberItemsNotAuct}>Доступные лоты: </div>
            <Link to="/add/slot">
              <button className={styles.userBtnAdd}>Разместить лот</button>
            </Link>
          </div>
          <div className={styles.userItems}>
            {items ? items.map((item) => {
              return (
                <div className={styles.ItemCard}>
                <img src={`http://localhost:4000/uploads/${item.img}`} alt=""  className={styles.ItemImage}/>
                <div className={styles.itemName}>
                {item.name}
                </div>
                <Link to={`/item/add/${item._id}`}>
                  <button disabled={item.status === 'На аукционе' || 'Продано' ? false: true } className={styles.itemBtn}>
                    {item.status} </button>
                </Link>
                </div>
              )
            }) : ""}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
