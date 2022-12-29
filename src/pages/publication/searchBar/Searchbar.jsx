import React from 'react'
import './Searchbar.css'

export default function Searchbar() {
  return (
    <div className='container'>
        
        <form class="search">
            <div class="search__wrapper">
                <input type="text" name="" placeholder="Search for..." class="search__field" />
                <button type="submit" class="fa fa-search search__icon"></button>
            </div>
        </form>
    </div>
  )
}
