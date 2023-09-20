import { createSlice } from "@reduxjs/toolkit"

export const site = createSlice({
    name: 'site',
    initialState: {
        navbar: true
    },
    reducers: {
        setNavbar: (state,action) => {
            state.navbar = action.payload
        }
    }
})

export const { setNavbar } = site.actions
export default site.reducer