import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
}

export const fetchUsers = createAsyncThunk(
    'users/fetch', 
    async (_, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/users', {
                headers: {
                    Authorization: `Bearer ${thunkAPI.getState().authSlice.token}`
                }
            })
            const users = await res.json()

            if (users.error) {
                return thunkAPI.rejectWithValue(users.error)
            }
            return users
        } catch(e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export default usersSlice.reducer

