import React, { useState } from 'react'

const Add = () => {

  const [count, setCount] = useState(0);
  return (
    <div className="number_counter">
      <span className="number-box">useState</span>
      <span className="number-box">Add</span>
      <span className="number-box">{count}</span>
      <button
        className="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Add