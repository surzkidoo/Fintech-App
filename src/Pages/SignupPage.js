import React, { useState } from "react";
import {  BsEnvelope, BsInfoCircle, BsLock, BsTelephone } from "react-icons/bs";
import { addUser, login } from "../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const regex = {
    mobile:{
    message:'Mobile number must be 10 digit number',
    regexop:/^[0-9]{10,}$/,
    error:false
  }, email:{
    message:'Email must be a valid one',
    regexop:/^[0-9A-Za-z@.]{3,}$/,
    error:false
  }, password:{
    message:'Password must contain uppercase, letter and symbol',
    regexop:/^[1-9A-Za-z]{10}$/,
    error:false
  },confirm:{
    message:'Password doesn\'t match password',
    regexop:/^[0-9A-Za-z]]{10,}$/,
    error:false
  }
}
  const navigate = useNavigate()
  let initial = {
    email: '',
    mobile: '',
    password: '',
    confirm:''
  }

  const [createDataRegex, setCreateDataRegex] = useState(regex)
  const [error, setError] = useState(false)
  const [createData, setCreateData] = useState(initial)
 
  const dispatch = useDispatch();
  const handleChange =(e)=>{    
    
    setCreateData(prev=> {
      setCreateDataRegex(prev=>{
        return {...prev,[e.target.name]:{...prev[e.target.name],error:! e.target.name=='confirm'? prev.password==e.target.value : createDataRegex[e.target.name].regexop.test(e.target.value) }}
      })
        return {...prev,[e.target.name]:e.target.value}
      })
  }

const handleSubmit=(e)=>{
  e.preventDefault()

  if(
    !createDataRegex.email.error && createData.email &&
    !createDataRegex.mobile.error && createData.mobile &&
    !createDataRegex.password.error && createData.password &&
    !createDataRegex.confirm.error && createData.confirm

    ){
      let newUser = {
        bio: {
          firstname: "",
          lastname: "",
          middlename: "",
          email: "",
          mobile: "",
          dateofbirth: "",
          country: "",
          profile: "../Profile.png",
          password: "",
        },
        bank: {
          name: "",
          bankname: "",
          number: "",
          bvn: "",
        },
    
        goal: [
         
        ],
    
        quickpayment: [
        ],
    
        accounts: [
        ],
    
        notification: {
          unread: [
         
          ],
          read: [
           
          ],
        },
        transaction: [
        ],
    
        settings: {
          darkMode: true,
          facAuth: false,
          notificationAsEmail: true,
          clearNotification: "Daily",
        },
    
        activity: [
          
        ],
      }
      let user = {...newUser,bio:{...newUser.bio,email:createData.email,mobile:createData.mobile,password:createData.password}}
      
      
      
      dispatch(addUser(user))
      dispatch(login({isLogin:true,user}))
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

  createData.confirm!=createData.password && setCreateDataRegex(prev=>{
    return {...prev,confirm:{...prev.confirm,error:true }}
  })

  !createData.confirm && setCreateDataRegex(prev=>{
    return {...prev,confirm:{...prev.confirm,error:true }}
  })

  !createData.mobile && setCreateDataRegex(prev=>{
    return {...prev,mobile:{...prev.mobile,error:true }}
  })

  setError(true)
}

 
}
  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-blue-500 ">
      <div className=" w-full sm:w-[500px]  bg-white p-4 gap-4 flex flex-col m-1">
          <div>
            <div className="text-center m-2">
              Logo 
            </div>
            <h4 className="text-gray-900 text-md">SignUp Form</h4>
            <label className="text-[14px] text-gray-700">Email</label>
            <div className="border h-[50px] flex items-center bg-white gap-1 p-2">
              <div>
                <BsEnvelope size={24} className="text-gray-500" />
              </div>

              <input
                className="border-none outline-none placeholder:text-[13px] text-xs p-2 placeholder:text-gray-500  w-full"
                placeholder="Enter your mail"
                type="text"
                name="email"
                value={createData.email}
                onChange={handleChange}
              />
            </div>
            
            {
           ( createDataRegex.email.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.email.message}</p>
          }

          </div>



          <div>
            <label className="text-[14px] text-gray-700">Mobile</label>
            <div className="border h-[50px] flex items-center bg-white gap-1 p-2">
              <div>
                <BsTelephone size={24} className="text-gray-500" />
              </div>

              <input
                className="border-none outline-none placeholder:text-[13px] p-2 text-xs text-xs placeholder:text-gray-500  w-full"
                placeholder="Enter your mobile"
                type="text"
                name="mobile"
                value={createData.mobile}
                onChange={handleChange}
              />
            </div>
            {
           ( createDataRegex.mobile.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.mobile.message}</p>
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
                name="password"
                value={createData.password}
                onChange={handleChange}
              />
            </div>
            
            {
           ( createDataRegex.password.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.password.message}</p>
          }

          </div>

          
          <div>
            <label className="text-[14px] text-gray-700">Again Password</label>
            <div className="border h-[50px] flex items-center bg-white gap-1 p-2">
              <div>
                <BsLock size={24} className="text-gray-500" />
              </div>

              <input
                className="border-none outline-none placeholder:text-[13px] p-2 text-xs text-xs placeholder:text-gray-500  w-full"
                    placeholder="password again"
                type="password"
                name="confirm"
                onChange={handleChange}
                value={createData.confirm}
              />
            </div>
            
            {
           ( createDataRegex.confirm.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.confirm.message}</p>
          }

          </div>


          <button onClick={handleSubmit} className="bg-blue-500 flex items-center justify-center  upercase text-[13px] text-white h-[50px] ">
            Signup
          </button>

          <div className="flex gap-2">
            <p className="text-[13px] text-gray-700">Already have an Account?</p> <span className='text-[13px] text-blue-900' >Login</span>

          </div>
        </div>
      
    </div>
  );
}
