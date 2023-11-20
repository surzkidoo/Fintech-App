import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsCheck2Circle, BsInfoCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addTransaction, debitAccount } from '../actions';

export default function DailpayTransfer(props) {
  const regex = {accountNumber:{
    message:'Account number must be 10 digit number',
    regexop:/^[0-9]{10}$/,
    error:false
  },desc:{
    message:'desc',
    regexop:/^[0-9a-zA-Z]{3,}$/,
    error:false
  },
  amount:{
    message:'Amount must be greater than Zero',
    regexop:/^[1-9]{1}[0-9]{1,}$/,
    error:false
  }
}
  const [createDataRegex, setCreateDataRegex] = useState(regex)
  const [error, setError] = useState(false)
  const initial ={accountNumber:'',amount:0,desc:''}
  const [createDailpayTransfer, setCreateDailpayTransfer] = useState(initial)
  const dispatch = useDispatch();

  const handleChange =(e)=>{
    
    setCreateDailpayTransfer(prev=> {
      setCreateDataRegex(prev=>{
        return {...prev,[e.target.name]:{...prev[e.target.name],error:!createDataRegex[e.target.name].regexop.test(e.target.value) }}
      })
        return {...prev,[e.target.name]:e.target.value}
      })
  }

const handleSubmit=(e)=>{
  e.preventDefault()
  if(
    !createDataRegex.amount.error && createDailpayTransfer.amount &&
    !createDataRegex.accountNumber.error && createDailpayTransfer.accountNumber
  
    ){
      dispatch(debitAccount({...props.activeAccount,balance:props.activeAccount.balance - Number(createDailpayTransfer.amount)}))
  dispatch(addTransaction({
    id:Date.now().toString(),
    amount: createDailpayTransfer.amount,
    status: "sucess",
    desc: `You transfer ${createDailpayTransfer.amount} to ${createDailpayTransfer.accountNumber}`,
    to: `${createDailpayTransfer.accountNumber}`,
    date: Date.now(),
    accountNumber: props.activeAccount.name,
  }))

    props.setIsDailpayTransferOpen(false)
    setCreateDailpayTransfer(initial)
}
else{


  !createDailpayTransfer.accountNumber && setCreateDataRegex(prev=>{
    return {...prev,accountNumber:{...prev.accountNumber,error:true }}
  })

  !createDailpayTransfer.amount && setCreateDataRegex(prev=>{
    return {...prev,amount:{...prev.amount,error:true }}
  })
 

  setError(true)
}
  
}

    const handleClose = () => {
        props.setIsDailpayTransferOpen(!props.isDailpayTransferOpen);
      };
      return (
        props.isDailpayTransferOpen && (
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
    
              <div className="text-gray-900 text-[16px]">Send Money</div>
              <div>
                <label className="text-[13px]">Receiver Dailpay acc.</label>
                <div className="border h-10 flex items-center p-2">
                  <input
                    className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                    placeholder="amount you wish to send"
                    type="text"
                    value={createDailpayTransfer.accountNumber}
                    onChange={handleChange}
                    name='accountNumber'
                  />
                  { ( !createDataRegex.accountNumber.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createDataRegex.accountNumber.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.accountNumber.message}</p>
          }
            

              <div>
                <label className="text-[13px]">Amount</label>
                <div className="border h-10 flex items-center p-2">
                  <input
                    className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                    placeholder="amount you wish to send"
                    type="text"
                    name='amount'
                    onChange={handleChange}
                    value={createDailpayTransfer.amount}
                  />
                   { ( !createDataRegex.amount.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createDataRegex.amount.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.amount.message}</p>
          }

              
          <div>
            <label className="text-[13px]">Descripion</label>
            <div className="border h-30 flex items-center p-2">
              <textarea
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="add description for the payment"
                type="text"
                onChange={handleChange}
                name='desc'
                value={createDailpayTransfer.desc}
              ></textarea>

              <div>
                <BsCheck2Circle className="text-green-500" />
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
