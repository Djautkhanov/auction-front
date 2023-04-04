import React, { useState } from "react";

const CreateAuction = () => {
    const [item, setItem] = useState({
      itemName: '',
      description: '',
      image: null,
      startingPrice: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setItem((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleImageChange = (e) => {
      setItem((prevState) => ({
        ...prevState,
        image: e.target.files[0],
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // отправка данных на сервер
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Название работы</label>
        <input type="text"  name="itemName" value={item.itemName} onChange={handleChange} />
  
        <label htmlFor="description">Описание</label>
        <textarea name="description" value={item.description} onChange={handleChange}></textarea>
  
        <label htmlFor="image">Фотография</label>
        <input type="file" accept=".jpg, .jpeg, .png, .gif" name="image" onChange={handleImageChange} />
  
        <label htmlFor="startingPrice">Начальная цена</label>
        <input type="text"  name="startingPrice" value={item.startingPrice} onChange={handleChange} />
  
        <button type="submit">Создать аукцион</button>
      </form>
    );
  };
  
  export default CreateAuction;
  