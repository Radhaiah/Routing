import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Users from './Users'
import Products from './Products'
import Orders from './Orders'
import Favorite from './Favorite'
import Wishlist from './Wishlist'
import Settings from './Settings'
function Main() {
  return (
    <div className="sidebar bg-light">
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/User" element={<Users/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Orders" element={<Orders/>}/>
        <Route path="/Favorite" element={<Favorite/>}/>
        <Route path="/Wishlist" element={<Wishlist/>}/>
        <Route path="/Settings" element={<Settings/>}/>
    </Routes>
    </div>
  )
}

export default Main