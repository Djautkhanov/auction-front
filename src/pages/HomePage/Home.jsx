import React from 'react'
import Categories from '../../components/categories/Categories'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'

export const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <Categories />
        </>
    )
}

export default Home