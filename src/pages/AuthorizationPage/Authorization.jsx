import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { authorization } from '../../features/authSlice'
import styles from './Authorization.module.scss'
// import Header from '/Users/usmantasht/Desktop/auction-front/src/components/Header/Header.jsx'
import Header from '../../components/Header/Header'


const Authorization = () => {

    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleAuthorization = (e) => {
        e.preventDefault()
        dispatch(authorization({ login, password }))
        setLogin('')
        setPassword('')
    }

    return (
        <div className={styles.page_wrapper}>
            <Header />
            <div className={styles.background_wrapper}>
                <div className={styles.background_container}>
                    <div className={styles.background}>
                        <div className={styles.registration_text}>
                            <h1>Вход в аккаунт</h1>
                            <div className={styles.have_not_account}>
                                <span>нет аккаунта?</span>
                                <Link to='/registration'>
                                    Регистрация
                                </Link>
                            </div>
                        </div>
                        <div className={styles.authorization_wrapper}>
                            <div className={styles.authorization}>
                                <form onSubmit={handleAuthorization}>
                                    <div className={styles.inputs_wrapper}>
                                        <input
                                            type='text'
                                            value={login}
                                            placeholder='Введите логин...'
                                            onChange={(e) => setLogin(e.target.value)}
                                        />
                                        <br />
                                        <br />
                                        <input
                                            type='password'
                                            value={password}
                                            placeholder='Пароль...'
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <br />
                                    <div className={styles.btn}>
                                        <button onClick={handleAuthorization}>Войти</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Authorization