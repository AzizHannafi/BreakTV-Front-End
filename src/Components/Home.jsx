import React,{useState,useEffect} from'react'
import Banner from './Banner'
import Suggestion from './Suggestion'
import {getPopular,getTop,getActionMovies} from '../Api/TMDB/SuggestionApi'


function Home() {
  const [popularList,setPopularList]=useState(null)
  const [TopList,setTopList]=useState(null)
  const [actionMovies,setActionMovies]=useState(null)
  useEffect(()=>{
    getPopular().then((res)=>{
     setPopularList(res)
    })
    getTop().then((res)=>{
      setTopList(res)
    })
    getActionMovies().then((res)=>{
      setActionMovies(res)
    })
  }
  ,[])

  return (
    <div>
      <Banner/>
      {popularList !=null &&
        <Suggestion name={"Popular"} List={popularList}/>
        }

      {TopList !=null &&
        <Suggestion name={"Top Rated"} List={TopList}/> 
      }  
      {actionMovies !=null &&
        <Suggestion name={"Action Movies"} List={actionMovies}/> 
      }  
    </div>
  )
}

export default Home