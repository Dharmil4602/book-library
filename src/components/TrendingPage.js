import React from 'react'
import { Outlet } from 'react-router-dom'
import TrendingSubjects from './TrendingSubjects'

function TrendingPage() {
  return (
    <div>
        <TrendingSubjects/>
        {/* <Outlet/> */}
    </div>
  )
}

export default TrendingPage