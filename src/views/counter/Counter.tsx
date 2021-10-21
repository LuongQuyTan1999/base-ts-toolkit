import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { CounterSlice } from "store";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useAppSelector(CounterSlice.selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(CounterSlice.decrement())}
        >
          - {process.env.TITLE}
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(CounterSlice.increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        {/* <button className={styles.button} onClick={() => dispatch(CounterSlice.incrementByAmount(incrementValue))}>
          Add Amount
        </button> */}
        <button className={styles.asyncButton} onClick={() => dispatch(CounterSlice.incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button className={styles.button} onClick={() => dispatch(CounterSlice.incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </div>
  );
}
