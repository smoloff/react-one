import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { Position } from './Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button title="press me" position={Position.Left}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        
        <Button title="click on me" position={Position.Right}/>
      </header>
    </div>
  );
}

export default App;



