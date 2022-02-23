import React, { Component } from "react"
import "./ColorPanel.css"

class ColorPanel extends Component {
    constructor () {
        super()
    }
        
    listItems = () => {
        const colorPanel = this.props
        const listItems = colorPanel.map((color) => {
            <li>Couleur : { color.hex } Pourcentage: { color.value }</li>
        })
        return (
            console.log(listItems),
            <ul>{ listItems }</ul>
        )
    } 

    render () {
        return (
            <div className="colorpanel__container">
            <ul>
                {
                    this.listItems()
                }
            </ul>
            </div>
        )
    }
    }


export default ColorPanel