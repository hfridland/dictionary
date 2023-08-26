import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSearch = createAsyncThunk(
    '@@search/load-search',
    (word, {
        extra: {client, api}
    }) => {
        return client.get(api.searchByWord(word))
    }
)

const initialState = {
    status: 'idle',
    error: null,
    result: null
}

const searchSlice = createSlice({
    name: '@@search',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadSearch.pending, (state, action) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(loadSearch.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error || action.meta.error
            })
            .addCase(loadSearch.fulfilled, (state, action) => {
                state.status = 'received'
                state.result = action.payload.data
            })
    }
})

export const searchReducer = searchSlice.reducer

export const selectSearch = state => state.search