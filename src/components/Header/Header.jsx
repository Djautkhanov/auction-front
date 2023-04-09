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
                            <li><Link to='/auction'>Аукционы</Link></li>
                            <li><Link to='*'>Художники</Link></li>
                            <li><Link to='*'>О проекте</Link></li>
                            <li><Link to='*'>Блог</Link></li>
                            <li><Link to='/add/slot'>Создать аукцион</Link></li>
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