import React from 'react'

const Pricing = ({ prices, place }) => {
    return (
        <div className='pricing-1'>
            <h1>Trips</h1>
            <h2 className="card-title">Cost: $ {prices}</h2>
            <ul>
                {place.map((item) => {
                    return (<li>{item}</li>)
                })}
            </ul>
        </div>
    )
}

export default Pricing
