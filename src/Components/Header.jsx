import React ,{useState,useEffect}from 'react'
import {Link } from 'react-router-dom'
import '../Styles/Header.css'



function Header() {
  const [showMenu,setShowMenu]= useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 200){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  
  return (
    <header className={`header_container ${isScrolled && 'background'} ${showMenu && 'background'}` } >
      <div className='header_row'>
        <div className='header_left'>
              <div className={`app_logo ${isScrolled && 'background'}` }> BreakTV Logo</div>
                <Link to='/' className='link'> Home</Link>
                <Link to='/tvshows' className='link'> TvShows</Link>
                <Link to='/movies' className='link'> Movies</Link>
          </div>
            <div className='header_right'>
              <div className='search_box'>
                <i className='fa-solid fa-magnifying-glass' style={{color: "white"}}></i>
                <input type="text" className='search' placeholder='Search ' />
              </div>
            </div>
      </div>
      <div className={`header_coloumn ${showMenu && 'background'}` }>
            <div className={`header_top ${showMenu && 'background'}` }>
                    {!showMenu ? 
                        <i className="fa-solid fa-bars fa-2x" style={{color: "aquamarine",backgroundColor:"transparent"}} id="btn_menu" onClick={(()=>{setShowMenu(!showMenu) })}></i>
                        :
                          <i className="fa-solid fa-xmark fa-2x" style={{color: "white"}} id="btn_menu" onClick={(()=>{setShowMenu(!showMenu) })}></i>
                    }
                      <div className='app_logo_col'> BreakTV Logo </div>
                     
              </div>
             
             {showMenu &&      
                    <div className={`extended_header ${isScrolled && 'background'} ${showMenu && 'background'}`}>
                      <Link to='/' className='link_col'> Home</Link>
                      <Link to='/tvshows' className='link_col'> TvShows</Link>
                      <Link to='/movies' className='link_col'> Movies</Link>
                      </div>
                    }        
      </div>
    </header>
  )
}

export default Header