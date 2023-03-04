import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/trendingsubject.css'

function TrendingSubjects() {
    const subjects = ["Romance", "Technology", "History", "Harry Potter", "Cryptocurrency"]
    const navigate = useNavigate()

    const handleClick = (subject) => {
        navigate(`/${subject}`)
        console.log(subject);
    }
  return (
    <div className='main-trending-container'>
        <input type="text" placeholder="Search for Subjects" />
        <h1>Trending Subjects</h1>
        <ul>
            {subjects.map((subject, index) => {
                return <li onClick={() => handleClick(subject)} key={index} value={subject}>{subject}</li>
            })}
        </ul>

    </div>
  )
}

export default TrendingSubjects