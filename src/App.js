//importing react and useState hook
import React, { useState } from 'react';
//importing Tooltip component
import Tooltip from './components/Tooltip';
//importing css
import './App.css';

const App = () => {
  //setting state for position
  const [position, setPosition] = useState('top');

  //function to change the position
  const changePosition = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    //building UI
    <div className="container">
      <div className="button-container">
      <h1>React Tooltip</h1>
        <div className="button-group">
          <h4>Select the tooltip position</h4>
          <button onClick={() => changePosition('top')}>Top</button>
          <button onClick={() => changePosition('bottom')}>Bottom</button>
          <button onClick={() => changePosition('left')}>Left</button>
          <button onClick={() => changePosition('right')}>Right</button>
        </div>
        <br/>
        <br/>
        <br/>
        {/* Using Tooltip component here*/}
        <Tooltip position={position}>
          <button>Hover over me!</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
