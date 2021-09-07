import React from 'react'
import Footer from '../HelperPage/Footer'
import Header from '../HelperPage/Header'

function Main({ SearchPageChange, HomePageChange, active, children }) {
    return (
        <div className="h-screen w-screen flex flex-col justify-between bg-gray-900 overflow-x-hidden overflow-y-auto"> 
         <Header />
         {children}
         <Footer SearchPageChange={SearchPageChange} HomePageChange={HomePageChange} active={active} />
        </div>
    )
}

export default Main
