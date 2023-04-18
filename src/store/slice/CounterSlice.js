import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increaseCounter(state) {
            return ++state
        },
        decreaseCounter(state) {
            return --state
        },
        resetCounter(state) {
            return  0
        },
    }
})
const amountSlice = createSlice({
    name: "amount",
    initialState: 1000,
    reducers: {
        deposit(state, action) {
            return state + action.payload

        },
        withdraw(state, action) {
            console.log(action.payload)
            return state - action.payload

        },
        resetAmount(state) {
            return 1000
        },
    }
})
export { counterSlice, amountSlice }