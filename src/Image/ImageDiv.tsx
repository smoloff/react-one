import React from 'react';

import Img from './Image'

interface Props {
    imageData: Map<string, string>
}

const ImgDiv: React.FC<{ imageData: Map<string, string> }> = ({ imageData }) => {
    const renderImgList = () => {
        return Array.of(imageData.entries)
    }

    return (
        <div className="image_cnt">
            <Img linkImg={"https://images.unsplash.com/photo-1619724509229-18c42de2bf77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80"}
                description={"Nature"}
            />
        </div>
    )
}

export default ImgDiv