import React from 'react'
import '../App.css';
import SearchBar from './SearchBar';
import TrendingSubjects from './TrendingSubjects';

const Home = () => {
  return (
    <div className="App">
    <TrendingSubjects/>
    <SearchBar/>
    </div> 
  )
}

export default Home