import React from 'react'
import Categories from '../../components/categories/Categories'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../features/itemSlice'
import styles from './Home.module.css'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export const Home = () => {

    const items = useSelector((state)=> state.itemSlice.items)
    const dispatch = useDispatch()
    const id = useParams()

    React.useEffect(()=>{
        dispatch(getItems())  
    },[])  
    return (
        <>
            <Header />
            <Main />
            <Categories />
            <div className={styles.items_lot}>
            <div className={styles.auctCart}>   
                {items.map((item) => {
                  return (
                    <div className={styles.items_img} key={item.id}>
                      <div className={styles.images}>
                        <img
                          src={`http://localhost:4000/uploads/${item.img}`}  
                        />
                      </div>
                      <div>{item.name}</div>
                      <div>{item.starting_price}</div>  
                 <Link to={`/one/auction/${item._id}`}> 
                 <button className={styles.rates_btn}>Сделать ставку</button>  
                 </Link>
                    </div>
                  );
                })}
              </div>
                </div> 
            <Footer/>
        </>
    )
}

export default Home    