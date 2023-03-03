import './App.css';
// import Home from './components/Home';
import SearchBar from './components/SearchBar';
import TrendingSubjects from './components/TrendingSubjects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PopularSubjects from './components/PopularSubjects';

function App() {
  return (
    <Router>
       {/* <Routes> */}
       {/* <Route path="/" element={<Home/>}/> */}
       {/* <Route element={<PopularSubjects/>}/> */}
     {/* <Home/> */}
    {/* </Routes> */}
    <div className="App">
    <TrendingSubjects/>
    <SearchBar/>
    </div> 
    </Router>
  );
}

export default App;
