import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');

  const navigate = useNavigate();
   
  return (
    <div>
    <header>
    <div className='hero'>
    <div className='hero-banner'>
      <h4>Book Store</h4>
      <p>I have always imagined paradise will be a kind of library</p>
      <input type='text' placeholder='' onChange={(e)=>{setName(e.target.value)}}className='input-bar' />
      <button className='hero-btn' onClick={()=>navigate("/" + name)}>Search</button>
      </div>
    </div>
    </header>
    </div>
  )
}

export default Home
