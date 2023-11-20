import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'

export default function Dashboard() {

 const  [sidebar ,setSidebar] = useState(false)
 const {isLogin} = useSelector(state=>state.auth)
 const navigate = useNavigate()

 useEffect(()=>{
      !isLogin && navigate('/login')
 },[isLogin,navigate])
  return (
   <div className="flex flex-row gap-2 w-full">
    <div>
      <Sidebar  sidebar={sidebar} setSidebar={setSidebar}/>
    </div>
    <div className="w-full">
      <div>
        <Header sidebar={sidebar} setSidebar={setSidebar}/>
      </div>
      <Outlet/>
      </div>
      </div>
  )
}
