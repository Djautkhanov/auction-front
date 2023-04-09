import React from 'react'
import styles from '../Header/Header.module.scss'
import logo_img from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Header = () => {

    const token = useSelector((state) => state.authSlice.token)
    return (
        
        <div className={styles.header_wrapper}>
            <div className={styles.header_container}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <Link to='/'>
                        <img alt='logo' width={250} height={80} src={logo_img} />
                        </Link>
                    </div>
                    <nav className={styles.menu}>
                        <ul>
                            <li><a href='*'>Аукционы</a></li>
                            <li><a href='*'>Художники</a></li>
                            <li><a href='*'>О проекте</a></li>
                            <li><a href='*'>Блог</a></li>
                            <li><a href='*'>Создать аукцион</a></li>
                            {token ? <li><button><Link to='/auth'>Выйти</Link></button></li>
                            : <li><button><Link to='/auth'>Войти</Link></button></li>}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header