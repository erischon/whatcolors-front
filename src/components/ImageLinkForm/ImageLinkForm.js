import React from "react"
import "./ImageLinkForm.css"

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <section className="ilf__container container grid">
            <div className="ilf_subtitle">
                { "" }
            </div>
            <div className="ilf__form">
                <input className="ilf__form--input" placeholder="Image Url" type="tex" onChange={ onInputChange }/>
                <button 
                    className="ilf__form--button" 
                    onClick={ onButtonSubmit }
                >
                    Find</button>
            </div>
        </section>
    )
}

export default ImageLinkForm
