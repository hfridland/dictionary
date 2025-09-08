import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type FontFace = 'serif' | 'Sans Serif' | 'Mono'

interface FontFaceState {
  fontFace: FontFace
}

const initialState: FontFaceState = {
  fontFace: 'serif',
}

const fontsSlice = createSlice({
  name: '@@fonts',
  initialState,
  reducers: {
    setFonts: (state, action: PayloadAction<FontFace>) => {
      state.fontFace = action.payload
    },
  },
})

export const { setFonts } = fontsSlice.actions
export const fontsReducer = fontsSlice.reducer
