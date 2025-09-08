import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Extra } from './extra'
import { RootState } from 'store'
import { Result, ResData } from 'types'

export const loadSearch = createAsyncThunk<Result, string, { extra: Extra }>(
  '@@search/load-search',
  (word: string, { extra: { client, api } }) => {
    return client.get(api.searchByWord(word))
  }
)

interface SearchState {
  status: 'idle' | 'loading' | 'rejected' | 'received'
  error: string | null
  result: ResData | null
}

const initialState: SearchState = {
  status: 'idle',
  error: null,
  result: null,
}

const searchSlice = createSlice({
  name: '@@search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSearch.pending, (state, action) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadSearch.rejected, (state, action) => {
        state.status = 'rejected'
        // state.error = action.error || action.meta.error
        state.error = action.error.message ?? 'Unknown Error'
      })
      .addCase(loadSearch.fulfilled, (state, action: PayloadAction<Result>) => {
        state.status = 'received'
        state.result = action.payload.data[0]
      })
  },
})

export const searchReducer = searchSlice.reducer

export const selectSearch = (state: RootState) => state.search
