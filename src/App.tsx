import React from 'react';
import './App.css';
import Button, { Position } from './Button/Button';
import Popup from './Popup/Popup';
import Img from './Image/Image';

export interface ImgData {
  url: string
  alt: string
  title: string
}

const imgData: Array<ImgData> = [
{
  url:"https://images.unsplash.com/photo-1630333939365-41744884de07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",
  alt: "Architecture",
  title: "Architecture"
},
{
  url: "https://images.unsplash.com/photo-1619724509229-18c42de2bf77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",
  alt: "Nature",
  title: "Nature"
},
{
  url: "https://images.unsplash.com/photo-1629747387925-6905ff5a558a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",
  alt: "People",
  title: "People"
}

]

const App = () => {

  let isPopupVisible: boolean = false

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('handleClick');
    e.preventDefault()
    isPopupVisible = true
  }

  const handlePopupSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('handlePopupSubmit')
    e.preventDefault()
    isPopupVisible = false
  }

  const handlePopupClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('handlePopupClose');
    e.preventDefault()
    isPopupVisible = false
  }




  return (
    <div className="App">
      <ImgDiv imageData={imgData} />
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


const ImgDiv: React.FC<{ imageData: Array<ImgData> }> = ({ imageData }) => {
  const renderImgList = () => {
    return imgData.map((value, index) => {
      return(
        <Img key={index} linkImg={value.url} description={value.title}/>
      )
    })
  }

  return (
    <div className="image_cnt">{renderImgList()}</div>
  )
}

export default App;



