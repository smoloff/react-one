import React from "react";
import './Image.css'

interface Props {
    linkImg: string,
    description: string 
}
let imgMap = new Map()

imgMap.set('Architecture', 'https://images.unsplash.com/photo-1630333939365-41744884de07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80')
imgMap.set('Nature', 'https://images.unsplash.com/photo-1619724509229-18c42de2bf77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80')
imgMap.set('People', 'https://images.unsplash.com/photo-1629747387925-6905ff5a558a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80')
imgMap.set('Interiors', 'https://images.unsplash.com/photo-1630183477413-f807d7ad76af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80')


const Img: React.FC<Props> = ({ linkImg, description}) => {
    return (
        <div className = "image_cnt">
            <div className = "image_blurb">
                <img src="{linkImg}" alt=""/>
                <p>{description}</p>
            </div>
        </div>

    )
}