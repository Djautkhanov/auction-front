import React from 'react'
import styles from './Sidebar.module.css';   
import { NavLink } from 'react-router-dom';

 const Sidebar = () => {

  const [price, setPrice] = React.useState('')
  const [count, setCount] = React.useState('')
  return (
    <div className={styles.sidebar}>
    <div className={styles.lists}>
        <h1>КАТЕГОРИЯ</h1>    
            <ul className={styles.list}> 
              <NavLink to='/'><li>Живопись</li></NavLink>
              <NavLink to='/'><li>Скульптура</li></NavLink>  
              <NavLink to='/'><li>Цифровое исскуство</li></NavLink>
              <NavLink to='/'><li>Handmade</li></NavLink>
            </ul>
    </div>
    <div className={styles.divtitle}>
    <h2>ПРОДАННЫЕ РАБОТЫ</h2>
    <div className={styles.divBlock}>
    <div className={styles.input}>
    <input className={styles.checkbox} type='checkbox'/>Показать  проданные лоты   
    </div>
    <div className={styles.price}>
      <div className={styles.textprice}>
      <h3>ТЕКУЩАЯ ЦЕНА $ </h3>
    
      <div className={styles.inputdiv}>
      <input value={price}   type='text' placeholder='От 5000' /> 
      <input value={count} type='text'placeholder='До  10000'/>
      </div>
      <div className={styles.slidecontainer}>  
     <input onChange={(e)=>setPrice(e.target.value)} min='5000' max='10000' className={styles.range} type="range"/>       
</div> 
</div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Sidebar










        {/* <div className={styles.btnDiv}>
        <input type='text' placeholder='Введите ключевые слова' ></input>
        <button>Найти</button>
        </div> */}