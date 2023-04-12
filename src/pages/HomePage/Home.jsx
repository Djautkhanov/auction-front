import React from 'react'
import Categories from '../../components/categories/Categories'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

export const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <Categories />
            <Footer/>
        </>
    )
}

export default Home    