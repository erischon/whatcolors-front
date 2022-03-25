import React from "react"
import { Fragment } from "react/cjs/react.production.min"

const ColorPanel = ({ colorPanel }) => {
     
    const listItem = colorPanel.map(color => {
        const divStyle = {
            backgroundColor: color.hex
        }
        const pourcentage = Math.round(color.value * 100)

        return (
            <div className="grid grid-cols-8 justify-start items-center gap-x-2 py-0.5">
                <span className="inline-block w-5 h-5" style={ divStyle  } />
                <div className="text-sm md:text-base col-span-2">{ color.hex }</div>
                <div className="text-sm col-span-3">{ color.name }</div>
                <div className="text-xs col-span-2">({ pourcentage }%)</div>
            </div>
        ) 
    })

    return (
        <div className="flex flex-col mx-3 justify-center">
            { listItem }

            <div className="container mx-auto mt-10 flex justify-center">
                <button className="text-white bg-teal-700 px-6 py-2 rounded">Export</button>
            </div>
        </div>
    )
}


export default ColorPanel