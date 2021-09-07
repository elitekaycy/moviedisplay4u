import React from 'react'
import Image from 'next/image'
import HomeIcon from '../Icon/HomeIcon'
import SearchIcon from '../Icon/SearchIcon'

function Footer({ SearchPageChange, HomePageChange, active }) {
    return (
        <div className="w-screen p-4 flex flex-row justify-center items-center">
            <div className="text-white text-2xl font-semibold p-1 mr-4" onClick={HomePageChange}>
              <HomeIcon style={`fill-current text-white w-6 h-6 transform scale-100 hover:bg-pink-900 focus:ring-4 focus:ring-pink-900 focus:ring-opacity-50  hover:p-1 hover:scale-150 rounded-md ${active === 'Home' ? 'bg-pink-700 scale-150 p-1 rounded-md': 'opacity-75' }`} />
            </div>
            <div className="text-white text-2xl font-semibold p-1" onClick={SearchPageChange}>
                <SearchIcon style={`fill-current stroke-current stroke-2 text-white w-6 h-6 transform scale-100 hover:bg-pink-900 active:bg-pink-900 hover:p-1 hover:scale-150 rounded-md ${active === 'search' ? 'bg-pink-700 scale-150 p-1 rounded-md': 'opacity-75' }`}/>
            </div>
        </div>
    )
}

export default Footer
