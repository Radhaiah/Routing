import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
    
  return (
    <><div className="header bg-info d-flex justify-content-end">
       <Link to="/User" style={{color:"White", padding:"10px"}}>Create a User</Link>
        <Link to="/Login" style={{color:"White", padding:"10px"}}>Login</Link>
    </div>
    </>
  )
}

export default Header