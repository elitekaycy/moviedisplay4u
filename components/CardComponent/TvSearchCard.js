import React,{useContext} from 'react'
import { MovieIDContextState } from '../../Context/MovieIDContext'
import Info from '../Icon/Info'
import StarIcon from '../Icon/StarIcon'

function TvSearchCard({ id, image, premier, genres, average, name, HandleInfo }) {

    const [moveid, setmovieid] = useContext(MovieIDContextState)

    const PassMovieIDProp = (e) => {
        e.preventDefault
        setmovieid(id)
      }
  
      const MoreMovieInfoFunct = (e) => {
        console.log('pressed')
        e.preventDefault
        PassMovieIDProp(e)
        HandleInfo(e)
      }

    const StarConstant = (key) => {
        const keyset = Math.round(key/2)
        const constant = Array.from(Array(keyset).keys())
        return (
        constant.map(elem => { return ( <span key={elem}><StarIcon style="w-3 h-3 mr-1" /></span>)})
        )
    } 


    return (
        <div className="p-4 flex flex-col mr-8 bg-black text-white w-full max-w-sm sm:w-1/3 rounded-md ">
        <img src={image} alt="tvshowimage" className="rounded-md max-h-48"/>
        <div className="mt-5 text-xl font-sans font-semibold truncate">{name}</div>
        <div className="font-sans mt-2 text-sm truncate">{`${premier} | ${genres.map(genre => `${genre}`)}`}</div>

        <div className="mt-2 flex flex-row items-center">
        <span className="font-semibold text-lg mr-2">{average}</span>
        {StarConstant(average)}
        </div>

        <div className="mt-5 flex flex-row items-center">
        <span onClick={MoreMovieInfoFunct} ><Info style="w-5 h-5 fill-current text-white mr-3 hover:opacity-75 cursor-pointer" /></span>
        </div>
        </div>
    )
}

export default TvSearchCard
