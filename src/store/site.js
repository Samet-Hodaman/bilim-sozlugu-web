import { createSlice } from "@reduxjs/toolkit"

export const site = createSlice({
    name: 'site',
    initialState: {
        navbar: false
    },
    reducers: {
        setNavbar: (state,action) => {
            state.navbar = action.payload
            localStorage.setItem('nav',state.navbar)
        }
    }
})

export const { setNavbar } = site.actions
export default site.reducer