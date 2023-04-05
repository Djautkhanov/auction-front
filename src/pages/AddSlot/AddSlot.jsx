import React, { useState } from "react";
import styles from "./AddSlot.module.css";

const AddSlot = () => {
  const [startingPrice, setstartingPrice] = useState("");
  const [blitzPrice, setblitzPrice] = useState("");
  const [previewUrls, setPreviewUrls] = useState();
  const [done, setDone] = useState("");
  const [item, setItem] = useState({
    itemName: "",
    description: "",
    image: null,
    category: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const errors = {};

    if (!item.category) {
      errors.category = "Выберите категорию";
      formIsValid = false;
    }

    if (!item.image) {
      errors.image = "Загрузите изображение";
      formIsValid = false;
    }

    if (!item.description) {
      errors.description = "Введите описание";
      formIsValid = false;
    }

    if (!item.itemName) {
      errors.itemName = "Введите название работы";
      formIsValid = false;
    }

    if (!startingPrice || startingPrice < 1) {
      errors.startingPrice = "Введите начальную цену";
      formIsValid = false;
    }

    if (!blitzPrice || blitzPrice < 1) {
      errors.blitzPrice = "Введите блиц-цену";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setItem({
        itemName: "",
        description: "",
        image: null,
        category: "",
      });

      setblitzPrice("");
      setPreviewUrls(null);
      setstartingPrice("");
      setDone("Лот добавлен");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setItem((prevState) => ({
      ...prevState,
      image: files,
    }));
    setPreviewUrls(imageUrls);
  };

  return (
    <div className={styles.main1}>
      <div className={styles.main}>
        <div className={styles.imgMain}>
          {" "}
          <h1>РАЗМЕСТИТЬ ЛОТ</h1>{" "}
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          {errors.category && (
            <span className={styles.error}>{errors.category}</span>
          )}
          <div className={styles.categoryBlock}>
            <label htmlFor="category">Категория*</label>
            <select
              name="category"
              className={styles.category}
              onChange={handleChange}
              value={item.category}
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
          {errors.image && <span className={styles.error}>{errors.image}</span>}
          <div className={styles.imageBlock2}>
            <label htmlFor="">Фотография*</label>
            <div className={styles.addImageBlok}>
              <input
                name="imageInput"
                multiple
                className={styles.image}
                type="file"
                accept=".jpg, .jpeg, .png, .gif"
                onChange={handleImageChange}
              />
              <div className={styles.addImage}>
                {previewUrls
                  ? previewUrls.map((url) => (
                        <img
                          src={url}
                          alt=""
                          className={styles.imgInpt}
                        />
                    ))
                  : ""}
              </div>
            </div>
          </div>
          {errors.description && (
            <span className={styles.error}>{errors.description}</span>
          )}
          <div className={styles.descriptionBlock}>
            <label htmlFor="description">Описание*</label>
            <textarea
              className={styles.Description}
              name="description"
              value={item.description}
              onChange={handleChange}
            ></textarea>
          </div>
          {errors.itemName && (
            <span className={styles.error}>{errors.itemName}</span>
          )}
          <div className={styles.itemNameBlock}>
            <label htmlFor="itemName">Название работы*</label>
            <input
              placeholder="Введите название"
              className={styles.itemName}
              type="text"
              name="itemName"
              value={item.itemName}
              onChange={handleChange}
            />
          </div>
          {errors.startingPrice && (
            <span className={styles.error}>{errors.startingPrice}</span>
          )}
          <div className={styles.textBlock}>
            <label htmlFor="startingPrice">Начальная цена*</label>
            <input
              placeholder="Начальная цена"
              className={styles.text}
              type="number"
              name="startingPrice"
              value={startingPrice}
              onChange={handleStartingPrice}
            />
          </div>
          {errors.blitzPrice && (
            <span className={styles.error}>{errors.blitzPrice}</span>
          )}
          <div className={styles.textBlock}>
            <label htmlFor="startingPrice">Блиц цена*</label>
            <input
              placeholder="Блиц цена"
              className={styles.text}
              type="number"
              name="blitzPrice"
              value={blitzPrice}
              onChange={handleBlitzPrice}
            />
          </div>
          {done && <span className={styles.done}>{done}</span>}
          <button type="submit" className={styles.btn}>
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSlot
