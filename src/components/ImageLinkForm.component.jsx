import React from "react"
// import "./ImageLinkForm.css"

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <section className="container mx-auto flex flex-col items-center my-2 py-2">
            <div className="my-2">
                { "Give us a direct link to a file on the web :" }
            </div>
            <div className="flex flex-col md:flex-row my-4 w-4/5 md:w-3/5 gap-y-2">
                <input className="outline outline-1 outline-offset-1 rounded px-1 py-2 md:mr-2 md:w-4/5" placeholder="Image Url" type="tex" onChange={ onInputChange }/>
                <button className="outline outline-1 outline-teal-700 rounded px-1 py-2 md:w-1/5 bg-teal-700 text-white md:hover:border-teal-700 md:hover:bg-white md:hover:text-teal-700" onClick={ onButtonSubmit }>Find</button>
            </div>
        </section>
    )
}

export default ImageLinkForm
