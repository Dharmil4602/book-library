import React, {createContext, useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/trendingsubject.css'

export const PopularSearch = createContext()

function TrendingSubjects() {

    const [subject, setSubject] = useState(null)
    const store = {
        subject,
        setSubject
    }
    const subjects = ["Romance", "Technology", "History", "Harry Potter", "Cryptocurrency"]
    
    const navigate = useNavigate()

    const handleClick = (subject) => {
        setSubject(subject)
        navigate(`/${subject}`)
        console.log(subject);
    }
  return (
    <PopularSearch.Provider value={store}>
    <div className='main-trending-container'>
        <div className="trending-search">
        <input type="text" placeholder="Search for Subjects" />
        <button>Search</button>
        </div>
        <h1>Trending Subjects</h1>
        <ul>
            {subjects.map((subject, index) => {
                return <li style={{cursor: "pointer"}} onClick={() => handleClick(subject)} key={index} value={subject}>{subject}</li>
            })}
        </ul>

    </div>
    </PopularSearch.Provider>
  )
}

export default TrendingSubjects

