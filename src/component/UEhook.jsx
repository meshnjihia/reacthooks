import React, { useEffect, useState } from 'react'

const UEhook = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(5);

  useEffect(() => {
    setCount(count +1);

  }, [secondCount]);
  

  return (
    <div className="number_counter">
      <span className="number-box">useEffect</span>
      <span className="number-box">
        <div className="Button">First Count {count}</div>
        <div className="Button">Second Count {secondCount}</div>
      </span>
      <button className="button" onClick={(() => setSecondCount
        (secondCount + 1)
      )}
      >
        add SC
      </button>
    </div>
  );
}

export default UEhook