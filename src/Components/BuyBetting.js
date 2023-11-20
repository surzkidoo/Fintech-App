import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2Circle, BsInfoCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction, debitAccount } from "../actions";

function BuyBetting(props) {
  const regex = {accountId:{
    message:'Mobile number must be 8 digit number',
    regexop:/^[0-9]{8,}$/,
    error:false
  },
  amount:{
    message:'Amount must be greater than Zero',
    regexop:/^[0-9]{1,}$/,
    error:false
  },
  company:{
    message:'Mobile number must be 8 digit number',
    regexop:/^[0-9]{8,}$/,
    error:false
  },
}
  const [createDataRegex, setCreateDataRegex] = useState(regex)
  const [error, setError] = useState(false)
  const {betting} =useSelector(state=>state.app)
  const initial ={accountId:'',company:betting.name,amount:0}
  const [createData, setCreateData] = useState(initial)
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
    !createDataRegex.accountId.error && createData.accountId &&
    !createDataRegex.amount.error && createData.amount

    ){
      dispatch(debitAccount({...props.activeAccount,balance:props.activeAccount.balance - Number(createData.amount)}))
  dispatch(addTransaction({
    id:Date.now().toString(),
    amount: createData.amount,
    status: "success",
    desc: `You deposited ${createData.amount}  to ${createData.company} Account No. ${createData.accountId} `,
    to: `${createData.company}`,
    date: Date.now(),
    accountNumber: props.activeAccount.name,
  }))

  props.setIsBettingOpen(false)
  setCreateData(initial)
    
}
else{


  !createData.accountId && setCreateDataRegex(prev=>{
    return {...prev,accountId:{...prev.accountId,error:true }}
  })
  !createData.amount && setCreateDataRegex(prev=>{
    return {...prev,amount:{...prev.amount,error:true }}
  })


  setError(true)
}
 
}
  const handleClose = () => {
    props.setIsBettingOpen(!props.isBettingOpen);
  };
  return (
    props.isBettingOpen && (
      <div
        className="fixed w-full h-full flex items-center justify-center  top-0 left-0 bg-black "
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      >
        <div className="w-[400px] bg-white border relative rounded-lg p-4 flex flex-col gap-2 ">
          <div
            onClick={handleClose}
            className="absolute right-2 top-2 p-2 bg-red-500 text-white"
          >
            <AiOutlineClose />
          </div>

          <div className="text-gray-900 text-[16px] font-semibold">Fund Betting Account</div>

          <div>
            <label className="text-[13px]">Betting Platform</label>
            <div className="border h-10 flex items-center p-2">
                 

                  <select value={createData.company} name="company" onChange={handleChange} className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full">
                  {
                    betting.map((bet)=>{
                      return <option key={bet.name} value={bet.value}  className='text-gray-500 text-xs placeholder:text-[13px]'>{bet.name}</option>

                    })
                   }

                  </select>
                  <div>
                    <BsCheck2Circle className="text-green-500" />
                  </div>
                </div>
          </div>

          <div>
            <label className="text-[13px]">Accound ID</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="4724723890"
                type="text"
                name="accountId"
                value={createData.accountId}
                onChange={handleChange}
              />
               { ( !createDataRegex.accountId.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createDataRegex.accountId.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.accountId.message}</p>
          }


            <div>
            <label className="text-[13px]">Amount</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="amount to deposit"
                type="text"
                name="amount"
                value={createData.amount}
                onChange={handleChange}
              />
              { ( !createDataRegex.amount.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createDataRegex.amount.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.amount.message}</p>
          }
            <div className="flex">
           
                <button onClick={handleSubmit}  className="text-[13px]  w-full text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
            Deposit
          </button>  
          </div>
           
        
        </div>
      </div>
    )
  );
}

export default BuyBetting;
