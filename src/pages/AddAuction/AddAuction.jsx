import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../features/itemSlice";
import { useNavigate, useParams } from "react-router";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";
import style from "./AddAuction.module.css";
import DatePicker from "react-datepicker";
import { addAuction } from "../../features/auctionSlice";
import AuctionAddTime from "../../components/TimeAuction/TimeAuction";    

const AddAuction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const item = useSelector((state) => state.itemSlice.items).find(
    (item) => item._id === id.id
  );
  console.log(item);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("start_time", startDate);
    formData.append("end_time", endDate);
    formData.append("item_id", id.id);
    dispatch(addAuction(formData));
    setStatus("Лот успешно выставлен на аукцион");
    setTimeout(() => {
      navigate(`/one/auction/${item._id}`);
    }, 3000);
  };

  if (!item) {
    return (
      <>
        <Header />
        <div className="MainLoad">
          <Loader />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={style.userImg}>
        <div className={style.UserName}>
          <h1>Выстовите время и дату</h1>
        </div>
      </div>
      <div className={style.AddMain}>
        <div className={style.itemMain}>
          <img
            src={`http://localhost:4000/uploads/${item.img}`}
            alt=""
            className={style.itemimg}
          />
          <div className={style.itemName}>{item.name}</div>
          <div className={style.itemText}>{item.description}</div>
        </div>
        <div className={style.timerMain}>
          {/* <AuctionAddTime/> */}
          <form onSubmit={handleSubmit}>
            <div className={style.startTimeBlock}>
              <label htmlFor="start_time" className={style.label12}>
                Дата и время начала аукциона:
              </label>
              <br />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                showIcon
                minDate={
                  new Date(
                    Date.now() + new Date().getTimezoneOffset() * 60 * 1000
                  )
                }
                timeCaption="Время"
                dateFormat="dd.MM.yyyy HH:mm"
                id="start_time"
                required
              />
            </div>
            <div className={style.endTimeBlock}>
              <label htmlFor="end_time" className={style.label12}>
                Дата и время окончания аукциона:
              </label>
              <br />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                showTimeSelect
                showIcon
                timeFormat="HH:mm"
                timeIntervals={60}
                minDate={
                  new Date(
                    Date.now() + new Date().getTimezoneOffset() * 60 * 1000
                  )
                }
                required
                timeCaption="Время"
                dateFormat="dd.MM.yyyy HH:mm"
                id="end_time"
              />
            </div>
            <button type="submit" className={style.dateBtn}>
              Выставить на аукцион{" "}
            </button>
          </form>
          <div className={style.startPrice}>
            Блиц цена: <span>{item.blitzPrice}₽</span>{" "}
          </div>
          <div className={style.startPrice}>
            Начальная цена: <span>{item.starting_price}₽</span>{" "}
          </div>
          {status && <div className={style.status}>{status}</div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddAuction;
