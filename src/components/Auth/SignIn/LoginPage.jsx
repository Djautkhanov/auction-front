import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SignIn = () => {
    
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const error = useSelector(state => state.application.error)

    const dispatch = useDispatch()

    const handleSetName = (e) => {
        setLogin(e.target.value)
    }

    const handleSetPass = (e) => {
        setPassword(e.target.value)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <form>
            <input 
            type='text'
            value={login}
            placeholder='enter login...'
            onChange={handleSetName}
            />
            <br />
            <input 
            type='password'
            value={password}
            placeholder='enter password'
            onChange={handleSetPass}
            />
            <br />
            <button type='submit'>Войти</button>
        </form>
    )
}

export default SignIn