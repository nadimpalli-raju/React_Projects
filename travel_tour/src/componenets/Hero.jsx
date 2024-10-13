import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <header>
                <div className='hero'>
                    <div className='hero-banner'>
                        <h4>Travel & Tour</h4>
                        <p>I have always imagined paradise will be a kind of library</p>
                        <NavLink to={"/travel"}><button className='hero-btn'>Search</button></NavLink>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Hero
