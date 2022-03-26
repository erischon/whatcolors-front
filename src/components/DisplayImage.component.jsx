import React from 'react';
// import "./DisplayImage.css"


const DisplayImage = ({ imageUrl }) => {
    return (
        <div className="mx-1">
            <div className="">
                <img className="md:rounded-md mb-6" id="inputImage" src={ imageUrl } alt="" height="auto"/>
            </div>       
        </div>
    )
}

export default DisplayImage
