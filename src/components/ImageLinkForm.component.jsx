import React from "react"

// CSS
const section = "container mx-auto flex flex-col items-center my-2 py-2"

const formContainer = "flex flex-col w-4/5 gap-y-2 my-4"
const formContainerMedia = "md:flex-row md:w-3/5"

const inputUrl = "rounded px-1 py-2 outline outline-1 outline-offset-1 shadow-md"
const inputUrlMedia = "md:mr-2 md:w-4/5"

const button = "bg-teal-700 text-white px-1 py-2 rounded outline outline-1 outline-teal-700 shadow-md"
const buttonMedia = "md:hover:bg-white md:hover:text-teal-700 md:w-1/5 md:hover:border-teal-700"

// Component
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <section className={ section }>
            <div className="my-2">
                { "Give us a direct link to a file on the web :" }
            </div>
            <div className={ `${formContainer} ${formContainerMedia}` }>
                <input className={ `${inputUrl} ${inputUrlMedia}` } placeholder="Image Url" type="tex" onChange={ onInputChange }/>
                <button className={ `${button} ${buttonMedia}` } onClick={ onButtonSubmit }>Find</button>
            </div>
        </section>
    )
}

export default ImageLinkForm
