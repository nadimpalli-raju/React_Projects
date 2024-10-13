import React, { useState } from 'react'
import Navbar from './componenets/Navbar'
import Pages from './componenets/Pages'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  
  const [price, setPrice] = useState(0);
  const [places, setPlaces] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <Pages price={price} setPrice={setPrice} places={places} setPlaces={setPlaces}  />
    </BrowserRouter>
  )
}

export default App
