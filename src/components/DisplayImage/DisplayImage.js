import React from 'react';
// import "./DisplayImage.css"


const DisplayImage = ({ imageUrl }) => {
    return (
        <div className="">
            <div className="">
                <img className="w-5/5" id="inputImage" src={ imageUrl } alt="" height="auto"/>
            </div>       
        </div>
    )
}

export default DisplayImage
