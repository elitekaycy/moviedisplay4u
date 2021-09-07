import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <div className="w-screen h-auto bg-gray-900 p-2 flex flex-row justify-start items-center ">
            <Link href="/">
              <div className="border border-none mt-4 ml-4 bg-pink-700 p-2 w-10 h-10 sm:w-12 sm:h-12 rounded-md hover:bg-gray-900 cursor-pointer">
                 <div className="mx-auto font-semibold text-center text-xl sm:text-3xl text-white">M</div>
                 </div>
         </Link>
        </div>
    )
}

export default Header
