import React from 'react';
import "./DisplayImage.css"


const DisplayImage = ({ imageUrl }) => {
    return (
        <div className="displayimage__container">
            <div className="">
                <img id="inputImage" src={ imageUrl } alt="" width="500px" height="auto"/>
            </div>       
        </div>
    )
}

export default DisplayImage
