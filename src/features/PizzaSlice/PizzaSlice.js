import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params) => {
        console.log(params);
        const { category, sorty, searching, currentPage } = params;
        const { data } = await axios.get(
            `https://626d16545267c14d5677d9c2.mockapi.io/items?page=${currentPage}&limit=4&${category}${sorty}${searching}`,
            // `https://626d16545267c14d5677d9c2.mockapi.io/items`,
        );
        return data;
    }
)

const initialState = {
    items: [],
    status: 'loading'
}

export const PizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: {
        [fetchPizza.pending]: (state, action) => {
            state.status = 'loading'
        },
        // Add reducers for additional action types here, and handle loading state as needed
        [fetchPizza.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'sucsess'
        },
        [fetchPizza.rejected]: (state, action) => {
            state.status = 'error';
            state.items = []
        }
    }
})
// Action creators are generated for each case reducer function
export const { setItems } = PizzaSlice.actions;

export default PizzaSlice.reducer;