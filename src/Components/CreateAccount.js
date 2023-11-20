import React, { useEffect, useState } from "react";
import { BsCheck2Circle, BsInfo, BsInfoCircle } from "react-icons/bs";
import {AiOutlineClose, AiTwotoneMinusSquare} from 'react-icons/ai'
import { addAccount } from "../actions";
import { useDispatch } from "react-redux";
function CreateAccount(props) {
  const initial = {name:'',desc:''}
  const regex = {name:{
    message:'Name must be greater than 3',
    regexop:/^[a-zA-Z0-9]{3,}$/,
    error:false
  },desc:{
    message:'must be greater than 3',
    regexop:/^[a-zA-Z0-9]{3,}$/,
    error:false
  }}

  const [createAccountRegex, setcreateAccountRegex] = useState(regex)
  const [createAccount, setcreateAccount] = useState(initial)
  const [error, setError] = useState(false)
  const dispatch = useDispatch();

  const handleChange =(e)=>{

      setcreateAccount(prev=> {
        setcreateAccountRegex(prev=>{
          return {...prev,[e.target.name]:{...prev[e.target.name],error:!createAccountRegex[e.target.name].regexop.test(e.target.value) }}
        })
        return {...prev,[e.target.name]:e.target.value}
      })
  }


const handleSubmit=(e)=>{
 
  if(!createAccountRegex.name.error && createAccount.name){
      dispatch(addAccount({id:Date.now().toString(),balance:0,...createAccount}))
  props.setIsOpen(false);
  setcreateAccount(initial)
  }
  else{
  

    !createAccount.name && setcreateAccountRegex(prev=>{
      return {...prev,name:{...prev.name,error:true }}
    })

    setError(true)
  }

}
  


const handleClose = ()=>{
    props.setIsOpen(!props.isOpen)
}
  return ( props.isOpen &&
    <div
      className="fixed w-full h-full flex items-center justify-center  top-0 left-0 bg-black "
      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}

    >
      <div className="w-[400px] bg-white border relative rounded-lg p-4 flex flex-col gap-2 ">
              <div onClick={handleClose} className="absolute right-2 top-2 p-2 bg-red-500 text-white"><AiOutlineClose/></div>

        <div className="text-gray-900 text-[16px] font-semibold">Create Account</div>
        <div>
          <label className="text-[13px] ">Name*</label>
          <div className="border h-10 flex items-center p-2">
            <input
              className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
              placeholder="choose name eg saving,company"
              type="text"
              name="name"
              value={createAccount.name}
              onChange={handleChange}
            />
            <div>
              {
               ( !createAccountRegex.name.error && error) &&  <BsCheck2Circle className="text-green-500" />

              }
            </div>
          </div>
          {
           ( createAccountRegex.name.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createAccountRegex.name.message}</p>
          }
        </div>

        <div>
          <label className="text-[13px]">Descripion</label>
          <div className="border h-30 flex items-center p-2">
            <textarea
              className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
              placeholder="Add description to remember the purpose of the account"
              type="text"
              name="desc"
              value={createAccount.desc}
              onChange={handleChange}
            ></textarea>

            <div>
            </div>
          </div>
        </div>

        <button  onClick={handleSubmit} className="text-[13px] text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
          Create account
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
