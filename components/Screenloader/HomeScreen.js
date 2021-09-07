import React from 'react'

function HomeScreen({ opacity }) {
    return (
        <div className={`w-screen h-screen flex flex-row justify-center items-center text-white  z-20 fixed overflow-hidden overflow-y-hidden overflow-x-hidden`}>
            <div className="flex flex-col p-2 justify-center items-center">
                 <div className="bg-pink-700 p-2 w-28 h-28 rounded-lg">
                        <div className="text-7xl font-semibold text-center animate-pulse">M</div>
                 </div>
            </div>
        </div>
    )
}

export default HomeScreen
