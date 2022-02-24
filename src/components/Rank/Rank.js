import React from "react"
import "./Rank.css"

const Rank = ({ name, entries }) => {
    return (
        <section className="rank__container container grid">
            <h1>What Colors?</h1>

            <div className="">
                {`${ name }, your current entries is...`}
            </div>
            <div className="rank__entries">
                { entries }
            </div>
        </section>
    )
}

export default Rank
