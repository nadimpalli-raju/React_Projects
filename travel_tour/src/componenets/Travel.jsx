import React from 'react'
import destinations from '../destination'
import Footer from './Footer';


const Travel = ({prices, setPrices, place, setPlace}) => {

    function add(cost, name) {
        setPrices(prices + cost);
        setPlace([...place, name]);
        
    }
    console.log(place, prices);
    return (
        <div className='main'>
            <h4>Our Destinations</h4>

            <div className='row'>
                {
                    destinations.map((item) => {
                        return (
                            <div className=" col-lg-4 col-md-6 col-sm-12 ">
                            <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                </div>
                                <img src={item.url} alt="" />
                                <button className='price'>{item.day}Days: $ {item.price}</button>
                                <button className='hero-btn btn-2'
                                 onClick={() => add(item.price, item.name)}
                                 >Add</button>
                            </div>
                        )
                    })}
            </div>
            <Footer />
        </div>
    )
}

export default Travel
