import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <button className='text-white hover:underline'>About</button>
            <button className='text-white hover:underline'>Contact</button>
            <button className='text-white hover:underline'>Home</button>
        </div>
    )
}

export default Navbar
