import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2Circle, BsInfoCircle } from "react-icons/bs";
import { addTransaction, debitAccount } from "../actions";
import { useDispatch } from "react-redux";

function CardPayment(props) {
  const regex = {cardnumber:{
    message:'Card number must be 10 digit number',
    regexop:/^[0-9]{10}$/,
    error:false
  },amount:{
    message:'Amount must be a number and greater than 0',
    regexop:/^[1-9]{1}[0-9]{0,}$/,
    error:false
  },pin:{
    message:'Pin must be 4 digit number',
    regexop:/^[0-9]{4}$/,
    error:false
  },cvv:{
    message:'Cvv number must 3 digit number',
    regexop:/^[0-9]{3}$/,
    error:false
  },dateofexpire:{
    message:'The correct format yyyy-mm-dd',
    regexop:/[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
    error:false
  }
}
  const [createCardDepositRegex, setCreateCardDepositRegex] = useState(regex)
  const [error, setError] = useState(false)
  const initial ={cardnumber:'',amount:0,pin:'',cvv:'',dateofexpire:''}
  const [createCardDeposit, setCreateCardDeposit] = useState(initial)
  const dispatch = useDispatch();

  const handleChange =(e)=>{
    
      setCreateCardDeposit(prev=> {
        setCreateCardDepositRegex(prev=>{
          return {...prev,[e.target.name]:{...prev[e.target.name],error:!createCardDepositRegex[e.target.name].regexop.test(e.target.value) }}
        })
        return {...prev,[e.target.name]:e.target.value}
      })
  }

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!createCardDepositRegex.cardnumber.error && createCardDeposit.cardnumber &&
    !createCardDepositRegex.amount.error && createCardDeposit.amount &&
    !createCardDepositRegex.pin.error && createCardDeposit.pin &&
    !createCardDepositRegex.cvv.error && createCardDeposit.cvv &&
    !createCardDepositRegex.dateofexpire.error && createCardDeposit.dateofexpire
    ){
    dispatch(debitAccount({...props.activeAccount,balance:props.activeAccount.balance + Number(createCardDeposit.amount)}))
    dispatch(addTransaction({
      id:Date.now().toString(),
      amount: createCardDeposit.amount,
      status: "success",
      desc: `you deposited ${createCardDeposit.amount} througth Card`,
      to: `Your ${props.activeAccount.name} account`,
      date: Date.now(),
      accountNumber: props.activeAccount,
    }))
  
    props.setIsCardDepositOpen(false)
    createCardDeposit(initial)
}
else{


  !createCardDeposit.cardnumber && setCreateCardDepositRegex(prev=>{
    return {...prev,cardnumber:{...prev.cardnumber,error:true }}
  })

  !createCardDeposit.amount && setCreateCardDepositRegex(prev=>{
    return {...prev,amount:{...prev.amount,error:true }}
  })

  !createCardDeposit.pin && setCreateCardDepositRegex(prev=>{
    return {...prev,pin:{...prev.pin,error:true }}
  })

  !createCardDeposit.cvv && setCreateCardDepositRegex(prev=>{
    return {...prev,cvv:{...prev.cvv,error:true }}
  })

  !createCardDeposit.dateofexpire && setCreateCardDepositRegex(prev=>{
    return {...prev,dateofexpire:{...prev.dateofexpire,error:true }}
  })

  setError(true)
}
  
}

  const handleClose = () => {
    props.setIsCardDepositOpen(!props.isCardDepositOpen);
  };
  return (
    props.isCardDepositOpen && (
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

          <div className="text-gray-900 text-[16px] font-smeibold">Card Deposit</div>
          <div>
            <label className="text-[13px]">Amount</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="amount you want to deposit"
                type="text"
                name="amount"
                value={createCardDeposit.amount}
                onChange={handleChange}
              />
              <div>
              { ( !createCardDepositRegex.amount.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createCardDepositRegex.amount.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createCardDepositRegex.amount.message}</p>
          }
          </div>
          <div>
            <label className="text-[13px]">Card Number</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="4724723890"
                type="passsword"
                name="cardnumber"
                onChange={handleChange}
                value={createCardDeposit.cardnumber}
              />
              <div>
              { ( !createCardDepositRegex.cardnumber.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createCardDepositRegex.cardnumber.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createCardDepositRegex.cardnumber.message}</p>
          }
          </div>

          <div>
            <label className="text-[13px]">PIN</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="5555"
                type="password"
                name="pin"
                value={createCardDeposit.pin}
                onChange={handleChange}
              />
               <div>
              { ( !createCardDepositRegex.pin.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createCardDepositRegex.pin.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createCardDepositRegex.pin.message}</p>
          }
          </div>

            <div className="flex gap-2">
            <div>
            <label className="text-[13px]">Date Of Expire</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="2030-02-12"
                type="text"
                value={createCardDeposit.dateofexpire}
                onChange={handleChange}
                name="dateofexpire"/>
              
              <div>
              { ( !createCardDepositRegex.dateofexpire.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createCardDepositRegex.dateofexpire.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createCardDepositRegex.dateofexpire.message}</p>
          }
          </div>

          <div>
            <label className="text-[13px]">CVV</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="CVV number"
                type="password"
                value={createCardDeposit.cvv}
                name="cvv"
                onChange={handleChange}
              />

               <div>
              { ( !createCardDepositRegex.cvv.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createCardDepositRegex.cvv.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createCardDepositRegex.cvv.message}</p>
          }
          </div>
            </div>
            <div className="flex gap-2">
            <button onClick={()=>props.setIsCardDepositOpen(false)} className="text-[13px] w-full text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
            Back
          </button>
                <button  onClick={handleSubmit} className="text-[13px]  w-full text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
            Deposit
          </button>  
            </div>
        
        </div>
      </div>
    )
  );
}

export default CardPayment;
