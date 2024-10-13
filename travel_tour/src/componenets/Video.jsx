import React from 'react'
import ReactPlayer from 'react-player/lazy'
import video1 from "../images/sea-24216.mp4"
import { NavLink } from 'react-router-dom'
const Video = () => {
    return (
        <div className='video'>
            <h4>Tours</h4>
            <div className='player'>
                
            <ReactPlayer controls url={video1}/>
            </div>
            <div className='p'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <NavLink to={"/travel"}><button className='hero-btn btn-3'>Visit</button></NavLink>
        </div>
        <div style={{height: "100px"}} />
        </div>
    )
}

export default Video
