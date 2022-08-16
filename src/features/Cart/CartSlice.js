import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    TotalPrice: 0,
    TotalCount:0,
    items: []
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload)
        },
        removeItem(state, action) {
            state.ithems = state.ithems.filter((obj) => obj.id !== action.payload)
        },
        clearItem(state, action) {
            state.ithems = []
        }
    }
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItem } = CartSlice.actions

export default CartSlice.reducer