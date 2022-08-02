import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'

function Body() {
  return (
    <div className="d-flex flex-wrap">
       <Sidebar/> 
       <Main/>
    </div>
  )
}

export default Body