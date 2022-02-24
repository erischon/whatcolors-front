import React from "react"
import "./ImageLinkForm.css"

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <section className="ilf__container container grid">
            <div className="ilf_subtitle">
                { "This Tool will Detect Colors in your pictures. Give it a try!" }
            </div>
            <div className="ilf__form">
                <input className="ilf__form--input" type="tex" onChange={ onInputChange }/>
                <button 
                    className="ilf__form--button" 
                    onClick={ onButtonSubmit }
                >
                    Detect</button>
            </div>
        </section>
    )
}

export default ImageLinkForm
