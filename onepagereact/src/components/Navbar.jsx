import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between px-16 py-10'>
        <div className="logo">
           <h2 className='text-2xl font-bold'>Sheriyans</h2> 
        </div>
        <div className="text flex gap-10">
            <Link to="/" className='text-xl font-medium'>Home</Link>
            <Link to="/about" className='text-xl font-medium'>About</Link>
            <Link to="/contact" className='text-xl font-medium'>Contact</Link>
            <Link to="/product" className='text-xl font-medium'>Product</Link>

        </div>
        </div>
    </div>
  )
}

export default Navbar