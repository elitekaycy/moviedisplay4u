import React, { useContext } from 'react'
import Image from 'next/image'
import StarIcon from '../Icon/StarIcon'
import Info from '../Icon/Info'
import sample from '../../public/images/sample.jpg'
import { MovieIDContextState } from '../../Context/MovieIDContext'

function TvShowCard({ id, image, premier, genres, average, name, summary, HandleInfo }) {

   const [moveid, setmovieid] = useContext(MovieIDContextState)
    
    const StarConstant = (key) => {
        const keyset = Math.round(key/2)
        const constant = Array.from(Array(keyset).keys())
        return (
        constant.map(elem => { return ( <span key={elem}><StarIcon style="w-3 h-3 mr-1" /></span>)})
        )
    } 


    const PassMovieIDProp = (e) => {
      e.preventDefault
      setmovieid(id)
    }

    const MoreMovieInfoFunct = (e) => {
      e.preventDefault
      PassMovieIDProp(e)
      HandleInfo(e)
    }

    return (
        <div className="flex flex-col bg-black p-4 text-white max-h-screen h-auto w-full max-w-sm  rounded-md transform scale-90 lg:scale-95 mx-auto">
        <img src={image} alt="tvshowimage" className="rounded-md max-h-60"/>
        <div className="mt-5 text-xl font-sans font-semibold truncate">{name}</div>
        <div className="font-sans mt-2 text-sm truncate">{`${premier} | ${genres.map(genre => `${genre}`)}`}</div>

        <div className="mt-2 flex flex-row items-center">
          <span className="font-semibold text-lg mr-2">{average}</span>
          {StarConstant(average)}
        </div>

        <div className="mt-2">
            <p className="font-sans text-base overflow-ellipsis overflow-hidden max-h-28 sm:max-h-44 h-full leading-relaxed ...">
              {summary}
            </p>
        </div>

        <div className="mt-5 flex flex-row items-center">
           <span onClick={MoreMovieInfoFunct}><Info style="w-5 h-5 fill-current text-white mr-3 hover:opacity-75 cursor-pointer" /></span>
        </div>
    </div>
    )
}

export default TvShowCard
