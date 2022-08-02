import React from 'react'
import { Link, } from 'react-router-dom'


function Sidebar() {
  return (
    <div>
    <div className="sidebar bg-primary m-2 p-2">
        <Link to="/Products" style={{color:"White", padding:"10px"}}>Products</Link><hr/>
        <Link to="/Orders" style={{color:"White", padding:"10px"}}>Orders</Link><hr/>
        <Link to="/Favorite" style={{color:"White", padding:"10px"}}>Faviorite items</Link><hr/>
        <Link to="/Wishlist" style={{color:"White", padding:"10px"}}>Wish List</Link><hr/>
        <Link to="/Settings" style={{color:"White", padding:"10px"}}>Settings</Link>
    </div>
    
    </div>
  )
}

export default Sidebar