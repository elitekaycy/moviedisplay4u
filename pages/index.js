import React from "react";
import TvShowCollection from "../components/ContentPage/TvShowCollection";
import Main from "../components/MainPage/Main";
import HomeScreen from "../components/Screenloader/HomeScreen";
import Search from '../components/SearchPage/Search'
import axios from 'axios'
import Modalinfo from "../components/ModalInfo/Modalinfo";


export default function Home({ data }) {
const [active, setactive] = React.useState('Home')
const [isOpen, setisOpen] = React.useState(false)
    

const CloseModal = () => {
  setisOpen(false)
}

const OpenModal = (e) => {
  e.preventDefault
  setisOpen(true)
}


//changing to search page
const SearchPageChange = (e) => {
  e.preventDefault()
  setactive('search')
}


//Changing to home page
const HomePageChange = (e) => {
  e.preventDefault()
  setactive('Home')
}
  
  return (
  <React.Fragment>
    {data === null || data === undefined ? <HomeScreen /> : 
    <Main SearchPageChange={SearchPageChange} HomePageChange={HomePageChange} active={active}>
    {active === 'Home' ? <TvShowCollection data={data} isOpen={isOpen} CloseModal={CloseModal} OpenModal={OpenModal} /> : <Search data={data} isOpen={isOpen} CloseModal={CloseModal} OpenModal={OpenModal}/> }
    <Modalinfo isOpen={isOpen} CloseModal={CloseModal} />
    </Main>
    }
  </React.Fragment>
  )
}

export async function getStaticProps(){

  const result = await (await axios.get('https://api.tvmaze.com/shows')).data

   return {
       props:{
           data:result
       }
   }
}