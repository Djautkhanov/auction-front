import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getItems } from '../../features/itemSlice';
import { getAuc, payAuc } from '../../features/auctionSlice';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import styles from './OneAuc.module.css';

const OneAuc = () => {
    const dispatch = useDispatch()
    const [price, setPrice] = useState('')

    const {id} = useParams()
    // console.log(id);

    useEffect(() => {
        dispatch(getItems())
        dispatch(getAuc())
    }, [dispatch]);

    const auc = useSelector(state => state.auctionSlice.auctions.filter(item => item.item_id === id))[0]
    const item = useSelector(state => state.itemSlice.items.filter(item => item._id === id))[0]

    console.log(auc)
    console.log(item)


    if(!auc || !item) {
        return(<>
        <Header/>
        <div className="MainLoad">
        <Loader/>
        </div>
        <Footer/>
        </>)
    }

    const handlePay = () => {
        dispatch(payAuc({id: auc._id, price: Number(price)}))
        console.log(1)
    }
    const currentByer = auc.rate[auc.rate.length - 1]
    console.log(currentByer)
  return (
    <>
<Header/>
    <div>
        <img style={{width: '300px'}} src={`http://localhost:4000/uploads/${item.img}`} alt={item.name} />
        <h1>{item.name}</h1>
        {currentByer && <h2>Текущая ставка: user {currentByer._id}: {currentByer.amount} Руб.</h2>}
        <h3>users:</h3>
        {auc.rate.map(item => {
            return <div>{item.user_id} {item.amount}</div>
        })}
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <button onClick={handlePay}>PAY</button>
    </div>
    <Footer/>
    </>
  )
}
export default OneAuc
