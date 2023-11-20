import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsCheck2Circle, BsInfoCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addQuickPayment } from '../actions';

export default function AddQuickPayment(props) {
  const regex = {accountNumber:{
  message:'Account number must be a grater than 10',
  regexop:/^[0-9]{10,}$/,
  error:false
}}
  const {accounts} = useSelector(state=>state.auth.user)
  const [createQuickRegex, setCreateQuickRegex] = useState(regex)
  const [error, setError] = useState(false)
  const initial ={accountNumber:''}
  const [createQuick, setCreateQuick] = useState(initial)
  const dispatch = useDispatch();

  const handleChange =(e)=>{
    
      setCreateQuick(prev=> {
        setCreateQuickRegex(prev=>{
          return {...prev,[e.target.name]:{...prev[e.target.name],error:!createQuickRegex[e.target.name].regexop.test(e.target.value) }}
        })
        return {...prev,[e.target.name]:e.target.value}
      })
  }

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!createQuickRegex.accountNumber.error && createQuick.accountNumber){
    dispatch(addQuickPayment( {id: Date.now().toString(),image:'../Profile.png', accountNumber:createQuick.accountNumber}))
  props.setIsAddQuickPaymentOpen(false)
  setCreateQuick(initial)
}
else{


  !createQuick.accountNumber && setCreateQuickRegex(prev=>{
    return {...prev,accountNumber:{...prev.accountNumber,error:true }}
  })

  setError(true)
}

 
}
    const handleClose = () => {
        props.setIsAddQuickPaymentOpen(!props.isAddQuickPaymentOpen);
      };
      return (
        props.isAddQuickPaymentOpen && (
          <div
            className="w-full h-full flex items-center justify-center  top-0 left-0 bg-black fixed"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            <div className="w-[400px] bg-white border relative rounded-lg p-4 flex flex-col gap-2 ">
              <div
                onClick={handleClose}
                className="absolute right-2 top-2 p-2 bg-red-500 text-white"
              >
                <AiOutlineClose/>
              </div>
    
              <div className="text-gray-900 text-[16px]">Add to QuickPayment</div>
              <div>
                <label className="text-[13px]">Account Number*</label>
                <div className="border h-10 flex items-center p-2">
                  <input
                    className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                    placeholder="account number you wish to add"
                    type="text"
                    name='accountNumber'
                    value={createQuick.accountNumber}
                    onChange={handleChange}
                  />
                  <div>
                  { ( !createQuickRegex.accountNumber.error && error) &&  <BsCheck2Circle className="text-green-500" />}
                  </div>
                </div>
                {
           ( createQuickRegex.accountNumber.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createQuickRegex.accountNumber.message}</p>
          }
              </div>

    
    
              <button onClick={handleSubmit} className="text-[13px] text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
                Add QuickPayment
              </button>
            </div>
          </div>
        )
      );
}
