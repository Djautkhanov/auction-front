import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/authSlice'
import itemSlice from '../features/itemSlice'


export const store = configureStore({
    reducer: {
        authSlice,
        itemSlice
    
    }
})

export default store
