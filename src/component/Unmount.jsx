import React, { useEffect }  from 'react'

const Unmount = () => {
  
  useEffect(() => {
    console.log('hello mesh the component successfully mounted');

    return () => {
      console.log('component successfully unmounted');
    };
  }, []);
  
  
  return (
    <div className='number_counter'>
      <span className="number-box">Unmount this</span>
      {/* <button className='Button'>hide this component</button> */}
    </div>
  )
}

export default Unmount