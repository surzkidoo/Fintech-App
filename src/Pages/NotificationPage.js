import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearNotification } from '../actions'

function NotificationPage() {
    const {notification} = useSelector(state=>state.auth.user)
    const dispatch = useDispatch()

const handleClear = ()=>{

    dispatch(clearNotification())
}
  return (
    <div className='mx-1 md:mx-4'> 
        <div>
            <div className='flex flex-col gap-2'>

                <div className='flex justify-between'>
                <div className='flex gap-2 items-baseline'>
                <p>Unread  </p>
                <div className='bg-blue-100 text-blue-500 text-[13px] p-2 rounded-full w-5 h-5 flex justify-center items-center'>{notification.unread.length}</div>
                </div>

                <div onClick={handleClear} className='text-[13px] border-2 border-blue-500 rounded-md text-blue-500 flex items-center justify-center p-2'>
                    Mark Read
                </div>
                </div>

                {
                    notification.unread.map((noti,index)=>{
                        return  <div key={index} className='flex   justify-between p-2 border bg-blue-500'>
                        <div className='text-white text-[13px]'>
                            {noti.message}
                        </div>
                        <div className='md:text-[11px] text-[9px] bg-white  rounded-sm p-1 md:p-1.5 flex justify-center items-center text-blue-500'>
                           {noti.date}
                        </div>
                    </div>
                    })
                }
               
               
                <div className='flex gap-2 items-baseline'>
                <p>Seen  </p>
                <div className='bg-gray-200 text-gray-500 text-[13px] p-2 rounded-full  h-5 flex justify-center items-center'>{notification.read.length}</div>
                </div>
                {
                    notification.read.map((noti,index)=>{
                        return  <div key={index} className='flex justify-between p-2 border bg-gray-300'>
                        <div className='text-gray-700 text-[13px]'>
                            {noti.message}
                        </div>
                        <div className='md:text-[11px] text-[9px] bg-white rounded-sm p-1 md:p-1.5 flex justify-center items-center text-gray-500'>
                           {noti.date}
                        </div>
                    </div>
                    })
                }
               
            </div>
        </div>
    </div>
  )
}

export default NotificationPage