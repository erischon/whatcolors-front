import React, { Component } from "react"
import "./ColorPanel.css"


const ColorPanel = ({ colorPanel }) => {
     
    const listItem = colorPanel.map(color => {
        const divStyle = {
            backgroundColor: color.hex
        }
        const pourcentage = Math.round(color.value * 100) 
        return (
            <li className="colorpanel__item">
                <span className="colorpanel__box" style={ divStyle  } />
                Color : { color.hex } ({ pourcentage }%)
            </li>) 
    })

    return (
        <div className="colorpanel__container">
            <ul className="colorpanel__list">
                { listItem }
            </ul>
        </div>
    )
}


export default ColorPanel