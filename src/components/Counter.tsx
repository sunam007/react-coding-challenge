/**
  Challenge: Pressing `Increment` button should increase the counter count by one. Pressing `Decrement` button should decrease the counter count by one.
  
**/
import { useState } from 'react'

const Counter = () => {

    return (
        <div>
            <h2>Counter: 0</h2>
            <button>Increment</button>
            <button>Decrement</button>
        </div>
    );
};

export default Counter;