import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registration } from '../../features/authSlice'
import styles from './Registration.module.scss'
import Header from '../../components/Header/Header'

const Registration = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const err = useSelector(state => state.authSlice.error)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleRegistration = (e) => {

        e.preventDefault()
        dispatch(registration({ firstName, lastName, login, password }))
        
        setFirstName('')
        setLastName('')
        setLogin('')
        setPassword('')
        
        if(!err) {
            navigate('/auth')
        }
    }

    return (
        <div className={styles.page_wrapper}>
            <Header />
            <div className={styles.background_wrapper}>
                <div className={styles.background_container}>
                    <div className={styles.background}>
                        <div className={styles.auth_text}>
                            <h1>Регистрация</h1>
                            <div className={styles.is_account}>
                                <span>уже есть аккаунт?</span>
                                <Link to='/auth'>
                                    Авторизация
                                </Link>
                            </div>
                        </div>
                        <div className={styles.registration_wrapper}>
                            <div className={styles.registration}>
                                <form onSubmit={handleRegistration}>
                                    <div className={styles.inputs_wrapper}>
                                        <input
                                            type='text'
                                            value={firstName}
                                            placeholder='Введите имя...'
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        <br />
                                        <br />
                                        <input
                                            type='text'
                                            value={lastName}
                                            placeholder='Введите фамилию...'
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                        <br />
                                        <br />
                                        <input
                                            type='text'
                                            value={login}
                                            placeholder='Придумайте логин...'
                                            onChange={(e) => setLogin(e.target.value)}
                                        />
                                        <br />
                                        <br />
                                        <input
                                            type='password'
                                            value={password}
                                            placeholder='Придумайте пароль...'
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <br />
                                    <div className={styles.btn}>
                                        <button onClick={handleRegistration}>Зарегистрироваться</button>
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

export default Registration
