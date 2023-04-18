import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { amountSlice, counterSlice } from '../store/slice/CounterSlice'

const Component2 = () => {
    const dispatch = useDispatch()
    const amount = useSelector((state) => {
        return state.amount
    })
    const counter = useSelector((state) => {
        return state.counter
    })
    const increaseCounter = () => {
        dispatch(counterSlice.actions.increaseCounter())
    }
    const decreaseCounter = () => {
        dispatch(counterSlice.actions.decreaseCounter())
    }
    const resetCounter = () => {
        dispatch(counterSlice.actions.resetCounter())
    }
    return (
        <div>
            <h1>COunter Component2</h1>
            Amount Here:= {amount}<br />
            Counter Here:= {counter}<br />
            <button type="button" className="btn btn-primary" onClick={() => { increaseCounter() }}>increase Counter</button><br /><br />
            <button type="button" className="btn btn-primary" onClick={() => { decreaseCounter() }}>decrease Counter</button><br /><br />
            <button type="button" className="btn btn-primary" onClick={() => { resetCounter() }}>reset Counter</button><br /><br />
        </div>
    )
}

export default Component2
