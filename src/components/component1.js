import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { amountSlice } from '../store/slice/CounterSlice'
const Component1 = () => {
    const dispatch = useDispatch()
    const amount = useSelector((state) => {
        return state.amount
    })
    const counter = useSelector((state) => {
        return state.counter
    })

    const depositHook = (amount) => { dispatch(amountSlice.actions.deposit(amount)) }
    const withdrawHook = (amount) => { dispatch(amountSlice.actions.withdraw(amount)) }
    const resetAmount = () => { dispatch(amountSlice.actions.resetAmount()) }


    return (
        <div>
            <h1>Amount Component1</h1>
            Amount Here:= {amount}<br />
            Counter Here:= {counter}<br />
            <button type="button" className="btn btn-primary" onClick={() => { depositHook(100) }}>deposit</button><br /><br />
            <button type="button" className="btn btn-primary" onClick={() => { withdrawHook(100) }}>withdraw</button><br /><br />
            <button type="button" className="btn btn-primary" onClick={() => { resetAmount() }}>resetAmount</button><br /><br />
        </div>
    )
}

export default Component1
