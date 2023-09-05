import React from 'react'
import Logo from "../assets/logo.png"
import Avatar from "../assets/avatar.png"
import Globe from "../assets/globe.svg"
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div className="flex  justify-around h-12   ">
            <img src={ Logo } alt="" />
            <div className="flex  self-center justify-around">
                <Link className='m-4'>Home</Link>
                <Link className='m-4'> Venue</Link>
                <Link className='m-4'>Categories</Link>
                <Link className='m-4'>Blogs</Link>
            </div>
            <div className="flex">
                <img src={ Avatar } alt="" />
                <h1 className='self-center m-4' >Martha</h1>
                <img src={ Globe } alt="" />
            </div>
        </div>
    )
}

export default Nav