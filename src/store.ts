import axios from 'axios'
import { configureStore } from '@reduxjs/toolkit'

import * as api from './config'
import { themeReducer } from './features/theme/theme-slice'
import { fontsReducer } from './features/fonts/fonts-slice'
import { searchReducer } from './features/search/search-slide'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    fonts: fontsReducer,
    search: searchReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
