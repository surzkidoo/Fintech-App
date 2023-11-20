import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSettings } from '../actions'

function SettingsPage() {
  const {settings} = useSelector(state=>state.auth.user)
  const [settingsData, setSettingsData] = useState(settings)
  const dispatch = useDispatch()
 
  useEffect(() => {  
  setSettingsData(settings)
  }, [settings])

  
  const active = 'bg-blue-500 flex w-12 h-5 p-1  rounded-lg items-center'
  const normal = 'bg-gray-300 flex w-12 h-5 p-1  rounded-lg items-center justify-end'

  const handleChange =(e)=>{    
    setSettingsData(prev=> {
      let state= {...prev,[e.target.name]:e.target.value}
      dispatch(changeSettings(state))
        return state
      })
  }

  const handleSwitchChange = (data) =>{
    setSettingsData(prev=>{
      let state= {...prev,...data}
      dispatch(changeSettings(state))
      return state

    })

  }

  return (
    <div className='mx-1 md:mx-4'>
     
     <div>
        <h4 className='mb-2' >General </h4>

        <div className='flex  gap-4 p-4 border-t'>
          <p className='text-xs text-gray-700'>Dark mode</p>
          <div onClick={()=>handleSwitchChange({darkMode:!settingsData.darkMode})} className={settingsData.darkMode ? active : normal}>
            <div className='bg-white  w-4 h-4 rounded-full'></div>
          </div>
        </div>

        <div className='flex  gap-4 p-4 border-t'>
          <p className='text-xs text-gray-700'>2 Factor Authentication</p>
          <div onClick={()=>handleSwitchChange({facAuth:!settingsData.facAuth})} className={settingsData.facAuth ? active : normal}>
            <div className='bg-white   w-4 h-4 rounded-full'></div>
          </div>
        </div>

        
      </div>
      <div className='mt-4'>
        <h4 className='mb-2' >Notifications</h4>

        <div className='flex  gap-4 p-4 border-t'>
          <p className='text-xs text-gray-700'>Use Email as means for notification</p>
          <div onClick={()=>handleSwitchChange({notificationAsEmail:!settingsData.notificationAsEmail})} className={settingsData.notificationAsEmail ? active : normal}>
            <div className='bg-white  w-4 h-4 rounded-full'></div>
          </div>
        </div>

        <div className='flex gap-4 p-4  items-center border-t'>
          <p className='text-xs text-gray-700'>Clear Notifications Every</p>
          <select name='clearNotification' onChange={handleChange} value={settingsData.clearNotification} className='text-xs border p-2 '>
            <option value='Daily' >Daily</option>
            <option value='Weekly'>Weekly</option>
            <option value='Monthly'>Monthly</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage