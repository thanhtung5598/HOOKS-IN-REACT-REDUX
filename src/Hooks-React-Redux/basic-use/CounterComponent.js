import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'

const CounterComponent = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    
    return (
        <div className="basic-use">
            <span>{counter}</span>
            <button onClick={() => dispatch({ type: 'increment-counter' })}>
                Increment counter
            </button>
        </div>
    )
}


export default CounterComponent