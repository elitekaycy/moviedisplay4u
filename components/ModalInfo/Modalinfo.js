import React,{ useState, useEffect, useContext} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import sample from '../../public/images/sample.jpg'
import Image from 'next/image'
import StarIcon from '../Icon/StarIcon'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios'
import { MovieIDContextState } from '../../Context/MovieIDContext'

function Modalinfo({ isOpen, CloseModal }) {

const [movieid, setmovieid] = useContext(MovieIDContextState)
const [seasons, setSeasons] = useState([])
const [movieEmbedCast, setmovieEmbedCast] = useState({})

  const getMovieEmbedCast = async() => {
    try {
      const FullMovieWithCast = await axios.get(`https://api.tvmaze.com/shows/${movieid}?embed=cast`)
      const result = FullMovieWithCast.data
      if(result) setmovieEmbedCast(result)

      console.log('all Movies',result)
    }
   catch(err){
     alert(err)
   }
  }
  


  const getSeasons = async() => {
    try {
      const AllSeasions = await axios.get(`https://api.tvmaze.com/shows/${movieid}/seasons`)
      const result = AllSeasions.data
      if (result) setSeasons(result)
      console.log('all seasons',result)
    }
   catch(err){
     alert(err)
   }
  }

  const LoadMovieFiles = () => {
    getMovieEmbedCast()
    getSeasons()
  }


  useEffect(() => {
    let mounted = true

    if(mounted) LoadMovieFiles()

    return () => mounted = false
  }, [movieid])

  return (

     <Dialog
      open={isOpen}
      onClose={CloseModal}
      className="fixed inset-0 h-auto overflow-y-auto w-screen"
    >
      <div className="flex items-center justify-center min-h-screen p-5">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="relative bg-black rounded-md w-full p-5 mx-auto flex sm:flex-row flex-col ">
          <div>
          <span className="text-large w-10 h-10 text-center font-sans cursor-pointer font-semibold bg-gray-800 p-2 hover:bg-black rounded-full absolute z-10 m-5 text-white" onClick={CloseModal}>X</span>
          {movieEmbedCast && Object.keys(movieEmbedCast).length > 0 ?  
              <img src={movieEmbedCast.image.original} alt="sample image" style={{ width: '100%', height: '100%'}} className="w-full max-w-screen h-full max-h-lg rounded-md filter brightness-75" /> : 
             <Image src={sample} alt="sample image" className="w-full h-full max-h-60 rounded-md filter brightness-75" />}
         </div>

        <Tabs className="p-5">
        <TabList className="text-white font-sans">
        <Tab>Main</Tab>
        <Tab>Seasons</Tab>
        <Tab>Cast</Tab>
        </TabList>

        <TabPanel>
        { Object.keys(movieEmbedCast).length > 0 ? 
          <div className="p-5 text-white">
          <Dialog.Title className="text-2xl font-sans">{movieEmbedCast.name}</Dialog.Title>
          <div className="font-sans mt-2 text-md text-white truncate">{movieEmbedCast.genres.map(genre => `${genre}, `)}</div>
  
          <div className="mt-2 flex flex-row items-center">
          <span className="font-semibold text-lg mr-2">{movieEmbedCast.rating.average}</span>
          <span><StarIcon style="w-3 h-3 mr-1" /></span>
          <span><StarIcon style="w-3 h-3 mr-1" /></span>
          <span><StarIcon style="w-3 h-3 mr-1" /></span>
          </div>
  
          <div className="mt-2">
          <p className="font-sans text-base  h-auto leading-relaxed ...">
          {movieEmbedCast.summary}
          </p>
          </div>
          </div>
        
        : '' }

        </TabPanel>
        <TabPanel>
           <p className="text-xl text-white p-5 font-sans mb-3">Seasons</p>
           <div className="flex flex-row items-center justify-between flex-wrap">
          { seasons.length > 0 ? seasons && seasons.map(seas => { return (

             <a key={seas.id} href={seas.url}>
            <div className="p-5 text-white ">
            <div className="flex flex-row p-4 mb-1 justify-around items-center bg-gray-800 shadow-md max-h-44 hover:opacity-95 cursor-pointer">
            {/* <img src={Object.keys(seas.image).length > 0 || seas.image.original !== null || seas.image.original !== undefined  ? seas.image.original : '' } alt="sampleimg" style={{ width: 100, height: 100}} className="rounded-md "/> */}
            <div className="ml-8">
              <p className="text-md font-bold font-sans">Season {seas.number}</p>
              <p className="text-sm font-sans">{seas.premiereDate}</p>
              <p className="font-bold font-sans mt-2">{seas.episodeOrder} episodes</p>
              </div>
            </div>
            </div>
            </a>

          )}) : ''}
          </div>
      
        </TabPanel>


        <TabPanel>
        <div className="p-5 text-white">
        <Dialog.Title className="text-2xl font-sans mb-2">Casts</Dialog.Title>
        < div className="flex flex-row justify-start items-center flex-wrap">
        {Object.keys(movieEmbedCast).length ? 
        
        movieEmbedCast._embedded.cast.map(el => { return (
          <a key={el.person.id} href={el.person.url}>
         <div className="flex flex-col p-3 rounded-md  hover:bg-gray-700">
          <div className="text-large text-center mt-1 ">{el.person.name}</div>
        </div>
        </a>
        )})
      
        
        : ''}
        </div>



       
        </div>
        </TabPanel>
        </Tabs>
        
       

        
        </div>
      </div>
    </Dialog>
  )
}


export default Modalinfo