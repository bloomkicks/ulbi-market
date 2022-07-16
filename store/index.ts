import {basketReducer} from "./basket"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {basket: basketReducer}
})

export type RootState = ReturnType<typeof store.getState>
export default store