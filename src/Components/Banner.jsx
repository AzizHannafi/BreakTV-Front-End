import React,{useState,useEffect} from 'react'
import '../Styles/Banner.css'
import {getRandomBanner} from '../Api/TMDB/BannerApi'
import requests from '../Api/TMDB/request'


function Banner() {
    
    const [randomBanner,setRandomBanner]= useState([])
    
    useEffect(()=>{
        getRandomBanner().then((res)=>{
            setRandomBanner(
                res[Math.floor(Math.random() * res.length -1)]
            )
        })
       
    },[])
//console.log(randomBanner);

  return (
    <section className='container' style={{backgroundImage:`url(${ requests.fetchImage+randomBanner.backdrop_path })`}}>
        <div className='left_description'>
            <h2 style={{color:"#ffff", backgroundColor: "transparent"}}>{randomBanner.title || randomBanner.name}</h2>
            <div className='rating'  style={{ backgroundColor: "transparent"}}>
                <i className="fa-brands fa-imdb fa-2x" style={{color:"#f3ce13",backgroundColor: "transparent"}}></i>
                <div style={{color:"#ffff"}}> {randomBanner.vote_average}</div>
            </div>
            <p className='banner_description' style={{color:"#ffff",backgroundColor: "transparent" , WebkitLineClamp:"7"}}>{randomBanner.overview}</p>
        </div>
        <div className='right_description' >
            <div className='buttons' >
                <div className='container_btn_watch_now' >
                   <center style={{backgroundColor:"#1DB994"}}>
                        <i className="fa-solid fa-play" style={{color:"#ffff",backgroundColor:"#1DB994"}}></i>
                        <button className='btn_watch_now'>Watch Now</button>
                   </center>
                </div>
                <div className='container_btn_add_to_favorite'>
                   <center style={{backgroundColor:"#E50914"}}>
                    <i className="fa-solid fa-heart" style={{color:"#ffff" ,backgroundColor:"#E50914"}}></i>
                        <button className='btn_add_to_favorite'>Add To Favorite</button>
                   </center>
                </div>
            </div>
            <div className='categories'>
                    <div className='categorie'>Crime</div>
                    <div className='categorie'>Fantasy</div>
                    <div className='categorie'>Drama</div>
            </div>

        </div>
    </section>
  )
}

export default Banner