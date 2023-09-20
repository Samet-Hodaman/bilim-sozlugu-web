import { createSlice } from "@reduxjs/toolkit"

export const auth = createSlice({
    name: 'auth',
    initialState: {
        isLogged: localStorage.getItem('auth') ? true : false,
        user: localStorage.getItem('auth') || null
    },
    reducers: {
        login: (state,action) => {
            state.isLogged = true
            localStorage.setItem('auth',action.payload)
            state.user = localStorage.getItem('auth')
        },
        logout: state => {
            state.isLogged = false
            localStorage.removeItem('auth')
            state.user = null
        }
    }
})

export const { login, logout } = auth.actions
export default auth.reducer