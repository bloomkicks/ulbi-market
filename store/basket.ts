import Product from "../models/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Product[] = []

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add(state: Product[], action: PayloadAction<Product>) {
      const product = action.payload

      state.push(product)

      return state
    },
  }
})

export default basketSlice