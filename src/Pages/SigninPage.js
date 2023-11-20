import React, { useState } from 'react'
import { BsEnvelope, BsInfoCircle, BsLock } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions'
import { redirect, useLocation, useNavigate } from 'react-router-dom'

function SigninPage() {
  const regex = {
  email:{
    message:'Email must be a valid one',
    regexop:/^[0-9A-Za-z@.]{3,}$/,
    error:false
  }, password:{
    message:'Password must contain uppercase, letter and symbol',
    regexop:/^[0-9A-Za-z]{10,}$/,
    error:false}
}
  let {app} =  useSelector(state=>state)
  const navigate = useNavigate()
  let initial = {
    email: '',
    password: '',
  }

  const [createData, setCreateData] = useState(initial)
  const [createDataRegex, setCreateDataRegex] = useState(regex)
  const [error, setError] = useState(false)
  const dispatch = useDispatch();

  const handleChange =(e)=>{    
    setCreateData(prev=> {
      setCreateDataRegex(prev=>{
        return {...prev,[e.target.name]:{...prev[e.target.name],error:!createDataRegex[e.target.name].regexop.test(e.target.value) }}
      })
        return {...prev,[e.target.name]:e.target.value}
      })
  }

const handleSubmit=(e)=>{
  e.preventDefault()

  if(
    !createDataRegex.email.error && createData.email &&
    !createDataRegex.password.error && createData.password 

    ){
      let luser ={} 
 app.users.forEach((user)=>{
    if( user.bio.email == createData.email & user.bio.password==createData.password){
      luser=user
    }
  })
  console.log(luser)
  e.preventDefault()
  dispatch(login({isLogin:true,user:luser}))
  setCreateData(initial)
  navigate('/')
    }

else{


  !createData.email && setCreateDataRegex(prev=>{
    return {...prev,email:{...prev.email,error:true }}
  })

  !createData.password && setCreateDataRegex(prev=>{
    return {...prev,password:{...prev.password,error:true }}
  })



  setError(true)
}


}
  return (
    <div
    className="flex items-center justify-center w-full h-[800px] bg-blue-500">
    <div className="w-full sm:w-[500px] bg-white p-4 gap-4 flex flex-col m-1">
        <div>
          <div className="text-center m-2">
            Logo1
          </div>
          <h4 className="text-gray-900 text-Md">Signin Form</h4>
          <label className="text-[14px] text-gray-700">Email</label>
          <div className="border h-[50px] flex items-center bg-white gap-1 p-2">
            <div>
              <BsEnvelope size={24} className="text-gray-500" />
            </div>

            <input
              className="border-none outline-none placeholder:text-[13px] text-xs p-2 placeholder:text-gray-500  w-full"
              placeholder="Enter your mail"
              type="text"
              name='email'
              value={createData.email}
              onChange={handleChange}
            />
          </div>
          {
           ( createDataRegex.email.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.email.message}</p>
          }
        </div>


        <div>
          <label className="text-[14px] text-gray-700">Password</label>
          <div className="border h-[50px] flex items-center bg-white gap-1 p-2">
            <div>
              <BsLock size={24} className="text-gray-500" />
            </div>

            <input
              className="border-none outline-none placeholder:text-[13px] text-xs text-xs placeholder:text-gray-500 p-2 w-full"
              placeholder="password"
              type="password"
              name='password'
              value={createData.password}
              onChange={handleChange}
            />
          </div>
          {
           ( createDataRegex.password.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.password.message}</p>
          }
        </div>



        <button onClick={handleSubmit} className="bg-blue-500 flex items-center justify-center  upercase text-[13px] text-white h-[50px] ">
          Login
        </button>

        <div className='flex gap-2'>
          <p className="text-[13px] text-gray-700 flex">Don't have account yet?</p> <span className='text-[13px] text-blue-900' >Signin</span>

        </div>
      </div>
    
  </div>
  )
}

export default SigninPage