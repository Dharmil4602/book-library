import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/trendingsubject.css'

function TrendingSubjects() {
    const subjects = ["Romance", "Technology", "History", "Harry Potter", "Cryptocurrency"]
    const navigate = useNavigate()
    const handleClick = (subject) => {
        navigate(`/search/${subject}`)
    }
  return (
    <div className='main-trending-container'>
        <h1>Trending Subjects</h1>
        <ul>
            {subjects.map((subject, index) => {
                return <li onClick={handleClick} key={index} value={subject}>{subject}</li>
            })}
        </ul>

    </div>
  )
}

export default TrendingSubjects