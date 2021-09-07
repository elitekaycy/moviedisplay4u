import React from 'react'
import sample from '../../public/images/sample.jpg'
import Image from 'next/image'

function TvShowNoContent() {
    return (
        <div className="p-4 flex flex-col mr-8 bg-black text-white w-full max-w-sm sm:w-1/3 rounded-md ">
           <Image src={sample} alt="tvshowimage" className="rounded-md max-h-48"/>
           <div className="mt-5 text-xl font-sans font-semibold truncate">{'Unavailable'}</div>
           <div className="mt-2">
            <p className="font-sans text-base overflow-ellipsis overflow-hidden max-h-28 sm:max-h-44 h-full leading-relaxed ...">
                Lorem pariatur voluptate consequat cillum Lorem cillum ipsum reprehenderit cupidatat. 
            </p>
        </div>
        </div>
    )
}

export default TvShowNoContent
