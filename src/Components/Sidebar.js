import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import {BsArrowUpLeftSquare, BsBarChart, BsBell, BsBoxArrowDownRight, BsCalendar2Check, BsDashSquare, BsGear, BsInfoSquare, BsListCheck, BsUpload} from 'react-icons/bs'
import { FaUpload, FaUser, FaUserAlt, FaUserFriends } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export default function Sidebar(props) {
  const activeLink= ' flex gap-2 pl-4 w-full flex items-center p-2.5 bg-blue-100  border-r-8 border-blue-500 text-blue-500'
  const normalLink ='flex gap-2 text-gray-700 pl-4 w-full flex items-center p-2.5  cursor-pointer hover:bg-blue-50'


  return (
    <div className={`w-[230px] absolute bg-white left-0 xl:static  shadow  ${!props.sidebar && 'hidden'}  xl:block`}>
      <div className=''>
 <div className='text-lg font-bold pl-4 mt-3'>
      <span className=' text-blue-500 '>DeeL</span>Pay
     </div>

     <div className='flex flex-col mt-3 gap-2'>


      <NavLink to='/dashboard/index' onClick={()=>props.setSidebar(false)}  className={({isActive})=>isActive? activeLink : normalLink}>
      <div>
            <BsDashSquare size={20}/>
        </div>

        <div className='text-[13px]'>
          Dashboard
        </div>

      </NavLink>

      <NavLink to='/dashboard/payment' className={({isActive})=>isActive? activeLink : normalLink}>
      <div>
          <BsUpload size={20}/>
        </div> 
        <div className='text-[13px]'>
          Payment
        </div>

      </NavLink>
     
      <NavLink to='/dashboard/activity' className={({isActive})=>isActive? activeLink : normalLink}>
      <div>
          <BsInfoSquare size={20}/>
        </div> 
        <div className='text-[13px]'>
          Activity
        </div>

      </NavLink>


      <NavLink to='/dashboard/notification' className={({isActive})=>isActive? activeLink : normalLink}>
      <div>
          <BsBell  size={20}/>
        </div> 
        <div className='text-[13px]'>
          Notification
        </div>

      </NavLink>


      <NavLink to='/dashboard/calander' className={({isActive})=>isActive? activeLink : normalLink}>
      <div>
          <BsCalendar2Check size={20}/>
        </div> 
        <div className='text-[13px]'>
          Calander
        </div>

      </NavLink>


      <NavLink to='/dashboard/transaction' className={({isActive})=>isActive? activeLink : normalLink}>
      <div>
          <BsBoxArrowDownRight size={20}/>
        </div> 
        <div className='text-[13px]'>
          Transaction
        </div>

      </NavLink>

       
       

     </div>
     
       <div className='flex flex-col mt-4 gap-2'>

       <div className='uppercase text-[13px] font-semibold text-gray-700 pl-4' >
          Preference
        </div>

        <NavLink to='/dashboard/account' className={({isActive})=>isActive? activeLink : normalLink}>
        <div>
          <AiOutlineUser size={20} />
        </div> 
        <div className='text-[13px]'>
          My account
        </div>

      </NavLink>


      <NavLink to='/dashboard/settings' className={({isActive})=>isActive? activeLink : normalLink}>
      <div>
          <BsGear size={20} />
        </div> 
        <div className='text-[13px]'>
          Settings
        </div>

      </NavLink>
     

     </div>
      
      </div>
    
<div className='bg-blue-100 rounded-md m-4 p-4 mt-10 mb-2 flex flex-col gap-1.5'>
      <img className='m-auto' alt='' height={40} width={80} src='./logo.svg'/>
      <p className='text-[13px] text-center'>Give your money awesome space in cloud</p>
      <div className='text-[10px] bg-blue-500 rounded-md p-2 flex justify-center items-center text-white'>
        Upgrade
      </div>
    </div>
    </div>
  )
}
