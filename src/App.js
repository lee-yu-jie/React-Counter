import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="counter">
      <div className="zero" onClick={() => setNumber( 0 )}>歸零</div>
      <div className="up" onClick={() => setNumber(number + 1)}>︽</div>
      <div className="number">{number}</div>
      <div className={`down ${number <= 0 && 'hidden'}`} onClick={() => setNumber(number - 1)}>︾</div>
    </div>
  );
}

export default App;
