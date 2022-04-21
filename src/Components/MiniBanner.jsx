import React from 'react'
import '../Styles/MiniBanner.css'

function MiniBanner(props) {
  return (
    <div className='mini_banner_container' >
        
       <div className='card'>
       <div className='mini_banner_rating'>
            <i className="fa-solid fa-star" style={{color:"#f3ce13",backgroundColor:"#1A1A1A"}}></i>
            <h4>{props.rating}</h4>
            <h5> {props.name}</h5>
        </div>
       <div className='image_mini_banner'>
            <img src={props.image} alt="mini banner image" />
       </div>
       </div>
    </div>
  )
}

export default MiniBanner