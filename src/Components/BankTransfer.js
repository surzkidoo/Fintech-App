import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsCheck2Circle, BsInfoCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addTransaction, debitAccount } from '../actions';

export default function BankTransfer(props) {
  const regex = {accountNumber:{
    message:'Account number must be 10 digit number',
    regexop:/^[0-9]{10}$/,
    error:false
  },bankName:{
    message:'bankName',
    regexop:/^[1-9]{1,}$/,
    error:false
  },accountName:{
    message:'Pin must be 4 digit number',
    regexop:/^[0-9a-zA-Z]{10,}$/,
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
  const [createBankTransferRegex, setCreateBankTransferRegex] = useState(regex)
  const [error, setError] = useState(false)
  const initial ={accountNumber:'',bankName:'',accountName:'',desc:'',amount:0}
  const [createBankTransfer, setCreateBankTransfer] = useState(initial)
  const dispatch = useDispatch();

  const handleChange =(e)=>{
    
    setCreateBankTransfer(prev=> {
      setCreateBankTransferRegex(prev=>{
        return {...prev,[e.target.name]:{...prev[e.target.name],error:!createBankTransferRegex[e.target.name].regexop.test(e.target.value) }}
      })
        return {...prev,[e.target.name]:e.target.value}
      })
  }

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!createBankTransferRegex.accountNumber.error && createBankTransfer.accountNumber &&
    !createBankTransferRegex.amount.error && createBankTransfer.amount &&
    !createBankTransferRegex.accountName.error && createBankTransfer.accountName
  
    ){
      dispatch(debitAccount({...props.activeAccount,balance:props.activeAccount.balance - Number(createBankTransfer.amount)}))
      dispatch(addTransaction({
        id:Date.now().toString(),
        amount: createBankTransfer.amount,
        status: "success",
        desc: `You transfer ${createBankTransfer.amount} to ${createBankTransfer.accountNumber}`,
        to: `${createBankTransfer.accountNumber}`,
        date: Date.now(),
        accountNumber: props.activeAccount.name,
      }))
    
      props.setIsBankTransferOpen(false)
      setCreateBankTransfer(initial)
}
else{


  !createBankTransfer.accountNumber && setCreateBankTransferRegex(prev=>{
    return {...prev,accountNumber:{...prev.accountNumber,error:true }}
  })

  !createBankTransfer.amount && setCreateBankTransferRegex(prev=>{
    return {...prev,amount:{...prev.amount,error:true }}
  })

  !createBankTransfer.accountName && setCreateBankTransferRegex(prev=>{
    return {...prev,accountName:{...prev.accountName,error:true }}
  })

 

  setError(true)
}
  
}
  
const handleClose = () => {
        props.setIsBankTransferOpen(!props.isBankTransferOpen);
      }

return (    props.isBankTransferOpen && (
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
                <label className="text-[13px]">Account Number.</label>
                <div className="border h-10 flex items-center p-2">
                  <input
                    className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                    placeholder="amount you wish to send"
                    type="text"
                    name='accountNumber'
                    onChange={handleChange}
                    value={createBankTransfer.accountNumber}
                  />
                   <div>
              { ( !createBankTransferRegex.accountNumber.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createBankTransferRegex.accountNumber.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createBankTransferRegex.accountNumber.message}</p>
          }
          </div>

              <div>
                <label className="text-[13px]">Account Name.</label>
                <div className="border h-10 flex items-center p-2">
                  <input
                    className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                    placeholder="receivers account name"
                    type="text"
                    name='accountName'
                    value={createBankTransfer.accountName}
                    onChange={handleChange}

                  />
                  <div>
              { ( !createBankTransferRegex.accountName.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createBankTransferRegex.accountName.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createBankTransferRegex.accountName.message}</p>
          }
          </div>

              <div>
                <label className="text-[13px]">Bank Name</label>
                <div className="border h-10 flex items-center p-2">
                 

                  <select onChange={handleChange} name='bankName' className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full">
                    <option value={createBankTransfer.bankName} className='text-gray-500 tgext-xs placeholder:text-[13px]'>Access Bank <BsCheck2Circle/> </option>
                    <option className='text-gray-500 tgext-xs placeholder:text-[13px]'>First Bank</option>

                  </select>
                  <div>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[13px]">Amount</label>
                <div className="border h-10 flex items-center p-2">
                  <input
                    className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                    placeholder="amount you wish to send"
                    type="text"
                    name='amount'
                    onChange={handleChange}
                    value={createBankTransfer.amount}
                  />
                   <div>
              { ( !createBankTransferRegex.amount.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createBankTransferRegex.amount.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createBankTransferRegex.amount.message}</p>
          }
          </div>


              
          <div>
            <label className="text-[13px]">Descripion</label>
            <div className="border h-30 flex items-center p-2">
              <textarea
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="add description for the payment"
                type="text"
                name='desc'
                value={createBankTransfer.desc}
                onChange={handleChange}
              ></textarea>

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
