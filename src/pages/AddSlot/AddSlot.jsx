import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddSlot.module.css";
import { addItems, getItems } from "../../features/itemSlice";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AddSlot = () => {
  const dispatch = useDispatch();
  const [startingPrice, setstartingPrice] = useState("");
  const [blitzPrice, setblitzPrice] = useState("");
  const [itemName, setitemName] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [done, setDone] = useState("");
  const [image, setimage] = useState(null);
  const [imageURL, setimageUrl] = useState(null);

  const token = `Bearer ${localStorage.getItem("token")}`;
  const err = useSelector(state => state.itemSlice.error)

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addItems({
        itemName,
        description,
        startingPrice,
        blitzPrice,
        category,
        image,
        token,
      })
    );
    setblitzPrice("");
    setstartingPrice("");
    if (err !== null) {
      setDone("Лот добавлен");
    }
    setimage(null);
    setimageUrl(null);
    setcategory("");
    setdescription("");
    setitemName("");
  };

  const handleChangeItemName = (e) => {
    setitemName(e.target.value);
  };
  const handleChangedescription = (e) => {
    setdescription(e.target.value);
  };
  const handleChangecategory = (e) => {
    setcategory(e.target.value);
  };

  const handleStartingPrice = (e) => {
    if (e.target.value < 10000000) {
      setstartingPrice(e.target.value);
    }
  };
  const handleBlitzPrice = (e) => {
    if (e.target.value < 1000000000) {
      setblitzPrice(e.target.value);
    }
  };
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const reader = new FileReader();
    setimage(files[0]);
    reader.onload = (e) => {
      setimageUrl(e.target.result);
    };

    reader.readAsDataURL(files[0]);
  };

  return (
    <div className={styles.main1}>
      <Header />
      <div className={styles.main}>
        <div className={styles.imgMain}>
          {" "}
          <h1>РАЗМЕСТИТЬ ЛОТ</h1>{" "}
        </div>
        <form onSubmit={handleSubmit} className={styles.form} required>
          <div className={styles.categoryBlock}>
            <label htmlFor="category">Категория*</label>
            <select
              name="category"
              className={styles.category}
              onChange={handleChangecategory}
              value={category}
              required
            >
              {" "}
              <option value="">(не выбрано)</option>
              <option value="Живопись">Живопись</option>
              <option value="Скульптура">Скульптура</option>
              <option value="Рисунок">Рисунок</option>
              <option value="Цифровое искусство">Цифровое искусство</option>
              <option value="Handmade">Handmade</option>
            </select>
          </div>
          <div className={styles.imageBlock2}>
            <label htmlFor="">Фотография*</label>
            <div className={styles.addImageBlok}>
              <input
                name="imageInput"
                className={styles.image}
                type="file"
                accept=".jpg, .jpeg, .png, .gif"
                onChange={handleImageChange}
                required
              />
              <div className={styles.addImage}>
                {previewUrls
                  ? previewUrls.map((url) => (
                      <img src={url} alt="" className={styles.imgInpt} />
                    ))
                  : ""}
              </div>
            </div>
          </div>
          <div className={styles.descriptionBlock}>
            <label htmlFor="description">Описание*</label>
            <textarea
              className={styles.Description}
              name="description"
              value={description}
              onChange={handleChangedescription}
              required
            ></textarea>
          </div>
          <div className={styles.itemNameBlock}>
            <label htmlFor="itemName">Название работы*</label>
            <input
              placeholder="Введите название"
              className={styles.itemName}
              type="text"
              name="itemName"
              value={itemName}
              onChange={handleChangeItemName}
              required
            />
          </div>
          <div className={styles.textBlock}>
            <label htmlFor="startingPrice">Начальная цена*</label>
            <input
              placeholder="Начальная цена"
              className={styles.text}
              type="number"
              name="startingPrice"
              value={startingPrice}
              onChange={handleStartingPrice}
              required
            />
          </div>
          <div className={styles.textBlock}>
            <label htmlFor="startingPrice">Блиц цена*</label>
            <input
              placeholder="Блиц цена"
              className={styles.text}
              type="number"
              name="blitzPrice"
              value={blitzPrice}
              onChange={handleBlitzPrice}
              required
            />
          </div>
          {done && <span className={styles.done}>{done}</span>}
          {err && <span className={styles.error}>{err}</span>}
          <button type="submit" className={styles.btn}>
            Добавить
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddSlot;
