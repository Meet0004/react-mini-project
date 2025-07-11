import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
const Header = () => {
  return (
    <>
        <div className='text-5xl underline font-bold bg-green-600 py-6 px-4  flex  justify-center gap-x-5  items-center'>
            <h1>Grocery MS using</h1>
            <img className='h-12' src={logo}/>
        </div>
        <div className='p-5 bg-gray-300 flex flex-row-reverse justify-between items-center'> 
            <Link to='/cart' className='text-2xl text-right px-5 text-red-800 float-inline-end font-extrabold'> Go to Cart </Link>
            <Link to='/' className='text-2xl text-left px-5 text-blue-800 font-extrabold'> Go to Home </Link>
        </div>
    </>
  )
}

export default Header
