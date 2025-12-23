import React from 'react'
import { Room } from '../components/Room'
import AdminNavbar from './components/AdminNavbar'
import { Outlet } from 'react-router-dom'


export const Admin = () => {
  return (
    <div >
      <AdminNavbar/>
      <Outlet/>
  
    </div>

  )
}


