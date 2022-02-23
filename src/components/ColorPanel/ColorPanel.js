import React, { Component } from "react"
import "./ColorPanel.css"


const ColorPanel = ({ colorPanel }) => {
    return (
        <div className="colorpanel__container">
            <h1>Panel</h1>
            <p>{ colorPanel[0] }</p>
            <p>Hop</p>
        </div>
    )
}


export default ColorPanel