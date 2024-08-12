import React from 'react'
import Icon from '../images/Logo.svg'
import { useMenu } from '../Contexts/MenuContext'

const SearchBar = () => {

  const setMenu = useMenu()

  return (
    <div className={setMenu === false?"searchBar":"searchBar active"}>
        <div className='logoContainer'>
            <img src={Icon} alt="logo" />
        </div>
        <div className='searchForm'>
            <div className='searchContainer'>
                <div className='searchLogoContainer'>
                    
                </div>
                <input type="text" placeholder='Search' className='inputBox'/>
            </div>
        </div> 
    </div>
  )
}

export default SearchBar
