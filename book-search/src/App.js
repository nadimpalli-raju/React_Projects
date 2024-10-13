import React from 'react'
import Navbar from './componenets/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Pages from './componenets/Pages'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Pages />
      </BrowserRouter>
  )
}

export default App
