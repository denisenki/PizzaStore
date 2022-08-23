import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    TotalPrice: 0,
    TotalCount: 0,
    items: []
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find((obj)=> obj.id === action.payload.id)
            if(findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count:1
                })
            }

            state.items.push(action.payload)
            state.TotalPrice = state.items.reduce((sum, obj) => { 
                // return (obj.price + obj.count) + sum },0)
                return (obj.price * obj.count) + sum },0)
            console.log(state.TotalPrice);
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