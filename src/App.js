import React, { useState } from "react";
import Add from './component/Add';
import Sub from './component/Sub';
import UEhook from './component/UEhook';
import Unmount from './component/Unmount';
import './App.css';

function App() {
  const [showUnmount, setShowUnmount] = useState(true);

  
  return (
    <div className="App">
      <Add />
      <Sub />
      <UEhook />
      {showUnmount && <Unmount />}
      <div>
      <button className="Button" onClick={() => setShowUnmount(false)}>
        hide this component
      </button>
      <button className="Button" onClick={() => setShowUnmount(true)}>
        show this component
      </button>
      </div>
    </div>
  );
}

export default App;
