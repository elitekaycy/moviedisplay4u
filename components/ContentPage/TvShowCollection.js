import React,{useEffect, useState} from "react";
import TvShowCard from '../CardComponent/TvShowCard'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Modalinfo from "../ModalInfo/Modalinfo";
import HomeScreen from "../Screenloader/HomeScreen";

//HOLD 5
//GET AVErage of 5 on a page den  set active
//onswipe get average in page

function TvShowCollection({ data, isOpen, CloseModal, OpenModal }) {

  //const [isOpen, setisOpen] = useState(false)
  const [shuffled, setshuffled] = useState([])
  
  // const CloseModal = () => {
  //   setisOpen(false)
  // }

  // const OpenModal = (e) => {
  //   e.preventDefault
  //   setisOpen(true)
  // }

 const Shuffledata = () => { setshuffled(data.sort(() => Math.random() - 0.5)) }

 useEffect(() => {
   let mounted = true

   if (mounted) Shuffledata()

   return () => mounted = false
 }, [])

 const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "30px",
      slidesToShow: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            centerMode: true,
            centerPadding: '10px',
            infinite: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: true,
            centerPadding: '20px',
            infinite: true,
           
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '30px',
            infinite: true,
          
          }
        }
      ]
    };

    return (
        <React.Fragment>
            {shuffled.length < 1 ? <HomeScreen /> : ''}
            <Slider {...settings} className="p-3">
           {shuffled && shuffled.map((el) => { return ( <div className="" key={el.id}>
             <TvShowCard 
                id={el.id}
                key={el.id}
                name={el.name}
                image={el.image.original}
                average={el.rating.average}
                genres={el.genres}
                summary={el.summary}
                premier={el.premiered}
                HandleInfo={OpenModal}
             /></div>)} )}
           </Slider>
           <Modalinfo isOpen={isOpen} CloseModal={CloseModal}/>
        </React.Fragment>
    )
}

export default TvShowCollection
