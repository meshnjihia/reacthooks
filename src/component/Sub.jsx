import React, { useState } from 'react'

const Sub = () => {

  const [count, setCount] = useState(1);
  return (
    <div className="number_counter">
      <span className="number-box">useState</span>
      <span className="number-box">Sub</span>
      <span className="number-box">{count}</span>
      <button
        className="button"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Sub