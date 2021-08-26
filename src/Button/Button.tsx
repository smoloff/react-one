import React from "react";
import './Button.css'

export enum Position {
    Left,
    Right
}

// props
const Button: React.FC<{ title: string, position: Position }> = ({ title, position }) => {
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
            <button className="btn__wrapper">{title}</button>

        </div>)
}

export default Button