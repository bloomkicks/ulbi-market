import { ProductId } from "../models/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductId[] = []

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add(state: ProductId[], action: PayloadAction<ProductId>) {
      const id = action.payload

      state.push(id)

      return state
    },

    remove(state: ProductId[], action: PayloadAction<ProductId>) {
      const id = action.payload

      state = state.filter(prodId => prodId !== id)

      return state
    }
  }
})

export const basketActions = basketSlice.actions
export const basketReducer = basketSlice.reducer
export default basketSlice