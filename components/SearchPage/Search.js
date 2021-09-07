import React, { useState } from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import Image from 'next/image'
import sample from '../../public/images/sample.jpg'
import StarIcon from '../Icon/StarIcon'
import Info from '../Icon/Info'
import TvSearchCard from '../CardComponent/TvSearchCard'
import TvShowNoContent from '../CardComponent/TvShowNoContent'
import Modalinfo from '../ModalInfo/Modalinfo'

const KEYS_TO_FILTERS = ['name', 'genres', 'type', 'id', 'language']

function Search({ data, isOpen, CloseModal, OpenModal }) {
    const [searchterm, setSearchterm] = useState('')
    // const [isOpen, setisOpen] = useState(false)
    

    // const CloseModal = () => {
    //   setisOpen(false)
    // }
  
    // const OpenModal = (e) => {
    //   e.preventDefault
    //   setisOpen(true)
    // }
  

    const onSearchChange = (e) => {
      e.preventDefault
      setSearchterm(e)
    }

    const filteredmovies = data.filter(createFilter(searchterm, KEYS_TO_FILTERS))


    return (
        <div className="w-screen h-full">
        <div className="flex flex-row justify-center items-center p-3">
        <SearchInput type="text" name="search" onChange={onSearchChange} className=" p-3 search-input w-full max-w-lg text-center h-14 text-xl focus:ring-2 rounded-md bg-black text-white" placeholder="Search tvshow" />
        </div>
        <div className="flex flex-row mt-5 p-5 overflow-y-hidden overflow-x-auto scrollbar-hide">
        {searchterm !== '' ? filteredmovies.map(data => {
          return (
              <TvSearchCard 
              key={data.id}
              id={data.id}
              image={data.image.original} 
              name={data.name}  
              premier={data.premier}
              genres={data.genres} 
              average={data.rating.average} 
              HandleInfo={OpenModal}
              />
          
            )
        }) : <TvShowNoContent /> } 

        {!filteredmovies.length < 1 ? '' : <TvShowNoContent />}
     </div>
     <Modalinfo isOpen={isOpen} CloseModal={CloseModal}/>
    </div>
    )
}

export default Search


