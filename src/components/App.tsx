import React from 'react';
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from "react-redux"
import logo from './logo.svg';
import './App.css';
import { decrement, increment, incrementByAmount } from '../redux/counterSlice'

interface AppProps {
  name: String;
}

export default function App({ name }: AppProps) {
  
  // using selector hook to fetch value from reducer
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(33))}
        >
          incrementByAmount
        </button>
      </div>
    </div>
      </header>
    </div>
  );
}

