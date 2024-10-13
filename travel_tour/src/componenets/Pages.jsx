import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Travel from './Travel'
import Home from './Home'
import Pricing from './Pricing'


const Pages = ({price, setPrice, places, setPlaces}) => {
  return (
    <div>
       <Routes>
            <Route path='/' and element={<Home />} />
            <Route path='/travel' and element={<Travel prices={price} setPrices={setPrice} setPlace={setPlaces} place={places} />} />
            <Route path='/pricing' and element={<Pricing  prices={price} place={places}/>} />
        </Routes>
    </div>
  )
}

export default Pages
