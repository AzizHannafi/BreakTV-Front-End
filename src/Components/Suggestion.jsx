import React,{useState,useEffect} from 'react'
import MiniBanner from './MiniBanner'
import '../Styles/Suggestion.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import requests from '../Api/TMDB/request';

function Suggestion({name,List}) {

  
  const settings = {
    dots: false,
    infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.075,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
     
    ]
  };
console.log(List);

  return (
    <div className='suggestion_container'>
        <h3>    {name} </h3>
        <Slider {...settings}>
              {List.results.map((element)=>{
                return(
                  <MiniBanner key={element.id} rating={element.vote_average} image={requests.fetchImage+element.backdrop_path} name={element.name || element.title} /> 
                )
              })} 
        </Slider>
        
         
      
      
       
    </div>
  )
}

export default Suggestion