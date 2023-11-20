import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsCheck2Circle, BsInfoCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, debitAccount } from '../actions';

export default function QuickPayment(props) {

  const regex = {amount:{
  message:'amount must be greater 0',
  regexop:/^[1-9]{1,}$/,
  error:false
},
accountSelected:{
  message:'Mobile number must be 8 digit number',
  regexop:/^[0-9]{8,}$/,
  error:false
},

}


  const {accounts} = useSelector(state=>state.auth.user)
  const initial ={accountSelected:'',amount:''}
  const [createPaymentRegex, setcreatePaymentRegex] = useState(regex)
  const [error, setError] = useState(false)
  const [createPayment, setCreatePayment] = useState(initial)
  const dispatch = useDispatch();

  const handleChange =(e)=>{
   
      setCreatePayment(prev=> {
        setcreatePaymentRegex(prev=>{
          return {...prev,[e.target.name]:{...prev[e.target.name],error:!createPaymentRegex[e.target.name].regexop.test(e.target.value) }}
        })
        return {...prev,[e.target.name]:e.target.value}
      })
  }

const handleSubmit=(e)=>{
  e.preventDefault()


  if(!createPaymentRegex.amount.error && createPayment.amount){
    let selectedAccount = accounts.find(acc => {
      return acc.name == createPayment.accountSelected && acc
     });
     dispatch(debitAccount({...selectedAccount,balance:selectedAccount.balance-createPayment.amount}))
     dispatch(addTransaction({
       id:Date.now().toString(),
       amount: createPayment.amount,
       status: "success",
       desc: "Transfer Fund through Quickpayment",
       to: "You transfer funds your friend quickpayment",
       date: Date.now(),
       accountNumber: props.selectQuickpayment,
     }))
   
     props.setIsAddPaymentOpen(false)
     setCreatePayment(initial)
}
else{


  !createPayment.amount && setcreatePaymentRegex(prev=>{
    return {...prev,amount:{...prev.amount,error:true }}
  })

  setError(true)
}


 
}
    const handleClose = () => {
        props.setIsAddPaymentOpen(!props.isAddPaymentOpen);
      };
      return (
        props.isAddPaymentOpen && (
          <div
            className="fixed w-full h-full flex items-center justify-center  top-0 left-0 bg-black "
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            <div className="w-[400px] bg-white border relative rounded-lg p-4 flex flex-col gap-2 ">
              <div
                onClick={handleClose}
                className="absolute right-2 top-2 p-2 bg-red-500 text-white"
              >
                <AiOutlineClose/>
              </div>
    
              <div className="text-gray-900 text-[16px]">QuickPayment</div>
              <div>
                <label className="text-[13px]">Amount</label>
                <div className="border h-10 flex items-center p-2">
                  <input
                    className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                    placeholder="amount you wish to send"
                    type="text"
                    name='amount'
                    value={createPayment.amount}
                    onChange={handleChange}
                  />
                  <div>
                  {
               ( !createPaymentRegex.amount.error && error) &&  <BsCheck2Circle className="text-green-500" />

              }     </div>
                </div>
                {
           ( createPaymentRegex.amount.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createPaymentRegex.amount.message}</p>
          }
              </div>


              <div>
                <label className="text-[13px]">Choose Account</label>
                <div className="border h-10 flex items-center p-2">
                 

                  <select  onChange={handleChange}  name='accountSelected' className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full">
                    
                    {
                      accounts.map(acc=>{
                        return  <option value={acc.name} {...acc.name==createPayment.accountSelected && 'selected'} className='text-gray-500 tgext-xs'>{acc.name}</option>

                      })
                    }

                  </select>
                  <div>
                  </div>
                </div>
              </div>
    
    
              <button onClick={handleSubmit} className="text-[13px] text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
                Send money
              </button>
            </div>
          </div>
        )
      );
}
