import { createSlice } from "@reduxjs/toolkit";

const fontsSlice = createSlice({
    name: '@@fonts',
    initialState: 'serif',
    reducers: {
        setFonts: (_, action) => action.payload
    }
})

export const {setFonts} = fontsSlice.actions
export const fontsReducer = fontsSlice.reducer
