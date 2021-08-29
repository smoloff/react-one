import React from 'react';
import './App.css';
import Button, { Position } from './Button/Button';
import Popup from './Popup/Popup';

const App = () => {

  let isPopupVisible: boolean = false

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log('handleClick');
    e.preventDefault()
    isPopupVisible = true
  }

  const handlePopupSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log('handlePopupSubmit')   
    e.preventDefault()
    isPopupVisible = false

  }

  const handlePopupClose = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log('handlePopupClose');
    e.preventDefault()
    isPopupVisible = false


  }

  return (
    <div className="App">
      <Button title="press me" position={Position.Left} onClick={handleClick} />
      <Popup
        title='Create new order'
        description="Do you want to make new order?"
        isVisible={isPopupVisible} 
        handleSubmit={handlePopupSubmit}
        handleClose={handlePopupClose}
        />
    </div>
  );
}


export default App;



