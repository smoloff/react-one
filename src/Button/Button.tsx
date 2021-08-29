import React from "react";
import './Button.css'

export enum Position {
    Left,
    Right
}

interface Props {
    title: string, 
    position: Position, 
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void 
}

// props
const Button: React.FC<Props> = ({ title, position, onClick }) => {
   const getStyle = () => {
       if (position === Position.Left) {
           return "btn__left"
       }

       if (position === Position.Right) {
        return "btn__right"
    }
   }
    return (
        <div className={["btn", getStyle()].join(' ')}>
            <button className="btn__wrapper" onClick={onClick}>{title}</button>

        </div>)
}

export default Button