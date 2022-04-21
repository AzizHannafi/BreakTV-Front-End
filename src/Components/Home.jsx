import React,{useState,useEffect} from'react'
import Banner from './Banner'
import Suggestion from './Suggestion'
import {getPopular,getTop} from '../Api/TMDB/SuggestionApi'
import  requests from'../Api/TMDB/request'

function Home() {
  const [popularList,setPopularList]=useState(null)
  const [TopList,setTopList]=useState(null)
  useEffect(()=>{
    getPopular().then((res)=>{
     setPopularList(res)
    })
    getTop().then((res)=>{
      setTopList(res)
    })
  }
  ,[])

  return (
    <div>
      <Banner/>
      {popularList !=null &&
        <Suggestion name={"Popular"} popularList={popularList}/>
        }

      {TopList !=null &&
        <Suggestion name={"Top Rated"} popularList={TopList}/> 
      }  
     
    </div>
  )
}

export default Home