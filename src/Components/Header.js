import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineMenuFold, AiTwotoneMinusSquare } from 'react-icons/ai'
import { BsBell, BsSearch, BsXCircle } from 'react-icons/bs'
import { FaHamburger } from 'react-icons/fa'
import { useSelector } from 'react-redux'


function Header(props) {
  const {user} = useSelector(state=>state.auth)
  const [openSearch, setOpenSearch] = useState(false)
  
  return (
    <div className='flex  justify-between items-center h-[70px] mx-1  md:mx-4'>
      <div className='flex  items-center gap-2'>
      <AiOutlineMenu onClick={()=>props.setSidebar(true)} className='xl:hidden' size={24}/>
      <div className='text-[13px] md:text-[16px] text-gray-500'>Hello  <span className='text-[13px] md:text-[16px]  text-gray-900'>{user.bio.firstname}</span> </div>
      </div>

        <div className='flex gap-3 items-center'>
            <div style={{zIndex:0}} className={`border-2 rounded-xl flex items-center justify-center md:h-[50px] absolute md:static bg-white h-[70px] w-full left-0  top-0 px-2 py-2 gap-1 ${!openSearch && 'hidden'}  md:flex`}>
                <BsSearch size={18}  className='text-gray-400'/>
                <input  type='text' className='text-xs border-0 outline-none w-full placeholder:text-gray-400 text-[13px] placeholder:text-[13px]' placeholder='search a transaction'/>
                <BsXCircle size={18}  onClick={()=>setOpenSearch(false)} className='text-gray-400 md:hidden'/>
            </div>

            <BsSearch size={18} onClick={()=>setOpenSearch(true)}  className='text-gray-400 md:hidden'/>



            <div className='relative'>
              {
                user.notification.unread.length > 0 &&  <div className='bg-red-700 w-2 h-2 absolute top-0 right-0 rounded-full'></div>

              }
                <BsBell size={22} style={{zIndex:-1}} className='text-gray-500'/>
            </div>

            <img src={user.bio.profile} alt='' className='rounded-full h-8 w-8'  />

        </div>
    </div>
  )
}

export default Header