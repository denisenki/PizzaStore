import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from '../features/Category/CategorySlice'
import CartSlice from '../features/Cart/CartSlice'
import PizzaSlice from '../features/PizzaSlice/PizzaSlice';

export const store = configureStore({
  reducer: {
    category: CategorySlice,
    cart: CartSlice,
    pizza: PizzaSlice
  }
})
