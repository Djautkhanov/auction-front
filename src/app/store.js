import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/authSlice'
import itemSlice from '../features/itemSlice'
import users from '../features/usersSlice'

export const store = configureStore({
    reducer: {
        authSlice,
        itemSlice,
        users
    
    }
})

export default store
