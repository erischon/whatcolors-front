import React from 'react';
import "./DisplayImage.css"


const DisplayImage = ({ imageUrl }) => {
    return (
        <div className="displayimage__container">
            <div className="">
                <img className="displayimage__image" id="inputImage" src={ imageUrl } alt="" height="auto"/>
            </div>       
        </div>
    )
}

export default DisplayImage
