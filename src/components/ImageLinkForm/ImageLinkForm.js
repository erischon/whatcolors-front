import React from "react"
import "./ImageLinkForm.css"

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <section className="ilf__container container grid">
            <div className="ilf_subtitle">
                { "This Tool will Find Colors in your pictures. Give it a try!" }
            </div>
            <div className="ilf__form">
                <input className="ilf__form--input" type="tex" onChange={ onInputChange }/>
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
