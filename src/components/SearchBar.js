import React from 'react'
import '../styles/search.css'

function SearchBar() {
  return (
    <>
    <div className='searchBar'>
        <input type="text" placeholder="Search For The Books Or Author..."/>
        <button>Search</button>
    </div>
    </>
  )
}

export default SearchBar