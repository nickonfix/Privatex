import React from 'react'
import "./card.css"
const card = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img className="w-72 rounded-xl border-4 border-white shadow-lg object-cover" src="https://i.pinimg.com/736x/87/e3/6e/87e36e462be2699104fd0cd761081095.jpg" alt="" />
            <div>
                <p className='mt-0.5 text-centre text-white'>Holy fucking shit .</p>
                <h2 className='font-bold text-2xl text-white'>Nikhil Singh</h2>
            </div>
        </div>
    )
}

export default card