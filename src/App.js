import './App.css';
import React, { useContext } from 'react';
// import Home from './components/Home';
import SearchBar from './components/SearchBar';
import TrendingSubjects from './components/TrendingSubjects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TrendingPage from './components/TrendingPage';
// import PopularSubjects from './components/PopularSubjects';
import { PopularSearch } from './components/TrendingSubjects';

function App() {
  // const { subject } = useContext(PopularSearch)
  return (
    <Router>
       {/* <Routes> */}
       {/* <Route path="/" element={<Home/>}/> */}
       {/* <Route element={<PopularSubjects/>}/> */}
     {/* <Home/> */}
    {/* </Routes> */}
    <Routes>
    <Route path='/' element={<Home/>}>
    {/* <div className="App">
    <TrendingSubjects/>
    <SearchBar/>
    </div>  */}
    </Route>
    <Route path="/:subject" element={<TrendingPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
