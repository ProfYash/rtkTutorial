import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/CounterSlice";
import { amountSlice } from "./slice/CounterSlice";
const store = configureStore({
    reducer: {
        counter:counterSlice.reducer,
        amount:amountSlice.reducer
    },
})
export default store