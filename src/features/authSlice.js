const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    signingUp: false,
    signingIn: false,
    error: null,
    token: localStorage.getItem("token"),
    user: []
}

export const registration = createAsyncThunk(
    'registration/signup',
    async ({ firstName, lastName, login, password }, thunkAPI) => {

        try {
            const res = await fetch('http://localhost:4000/registration', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    login,
                    password
                })
            })

            const json = await res.json()
            if (json.error) {
                return thunkAPI.rejectWithValue(json.error)
            }

            return json

        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }

    })
export const getUserBytoken = createAsyncThunk('getUser/token', async (data, thunkAPI) => {
    try {
        const user = await fetch('http://localhost:4000/user/token', {
            method: 'GET',
            headers: {
                Authorization: data,
            },
        })
        const response = await user.json()
        if (response.error) {
            return thunkAPI.rejectWithValue(response.error)
        }
        localStorage.setItem("userId", response)
        return response
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const getUsers = createAsyncThunk('getAll/users', async (_, thuckAPI) => {
    try {
        const users = await fetch('http://localhost:4000/users')
        return await users.json()
    } catch (error) {
        thuckAPI.rejectWithValue(error)
    }
})

export const authorization = createAsyncThunk(
    'auth/signin',
    async ({ login, password }, thunkAPI) => {

        try {
            const res = await fetch('http://localhost:4000/auth', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login,
                    password
                })
            })
            const token = await res.json()

            if (token.error) {
                return thunkAPI.rejectWithValue(token.error)
            }
            localStorage.setItem('token', token)

            return token

        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    })



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state) => {
                state.signingUp = true
                state.error = null
            })
            .addCase(registration.rejected, (state, action) => {
                state.signingUp = false
                state.error = action.payload
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.signingUp = false
                state.error = null
            })

            .addCase(authorization.pending, (state) => {
                state.signingIn = true
                state.error = null
            })
            .addCase(authorization.rejected, (state, action) => {
                state.signingIn = false
                state.error = action.payload
            })
            .addCase(authorization.fulfilled, (state, action) => {
                state.signingIn = false
                state.error = null
                state.token = action.payload
            })
            .addCase(getUsers.pending, (state) => {
                state.signingIn = true
                state.error = null
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.signingIn = false
                state.error = action.payload
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.signingIn = false
                state.error = null
                state.user = action.payload
            })

    }
})

export default authSlice.reducer
