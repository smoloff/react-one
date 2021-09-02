import React from "react";
import './Image.css';

interface Props {
    linkImg: string,
    description: string
}

const Img: React.FC<Props> = ({ linkImg, description }) => {
    return (
        <div className="image_blurb">
            <img className="image_blurb-img"src={linkImg} alt="" />
            <p>{description}</p>
        </div>
    )
}

export default Img