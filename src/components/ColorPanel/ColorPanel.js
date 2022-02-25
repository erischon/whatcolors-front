import React from "react"
import "./ColorPanel.css"


const ColorPanel = ({ colorPanel }) => {
     
    const listItem = colorPanel.map(color => {
        const divStyle = {
            backgroundColor: color.hex
        }
        const pourcentage = Math.round(color.value * 100) 
        return (
            <div className="colorpanel__item">
                <span className="colorpanel__item--box" style={ divStyle  } />
                <div className="colorpanel__item--name">{ color.name }</div>
                <div className="colorpanel__item--hex">{ color.hex }</div>
                <div className="colorpanel__item--hex">({ pourcentage }%)</div>
            </div>
        ) 
    })

    return (
        <div className="colorpanel__container">
            { listItem }
        </div>
    )
}


export default ColorPanel