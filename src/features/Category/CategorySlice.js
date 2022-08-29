import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 1,
    currentPage: 1
}

export const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.categoryId = action.payload

        },
        setFilters(state, action) {
            state.categoryId = Number(action.payload.categoryId)
            state.currentPage = Number(action.payload.currentPage)
        }
    }
})

export const SelectCategory = (state) => state.category.categoryId;
// Action creators are generated for each case reducer function
export const { setCategory, setFilters } = CategorySlice.actions

export default CategorySlice.reducer