import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2Circle, BsInfoCircle } from "react-icons/bs";
import { addTransaction, debitAccount } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function BuyExamPin(props) {
  const regex = {mobile:{
    message:'Mobile number must be 10 digit number',
    regexop:/^[0-9]{10,}$/,
    error:false
  },
  amount:{
    message:'Mobile number must be 8 digit number',
    regexop:/^[0-9]{8,}$/,
    error:false
  },
}
  const [createDataRegex, setCreateDataRegex] = useState(regex)
  const [error, setError] = useState(false)
  const {exampin} =useSelector(state=>state.app)
  const initial ={mobile:'',amount:exampin[0].value}
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
    !createDataRegex.mobile.error && createData.mobile
  
    ){
      dispatch(debitAccount({...props.activeAccount,balance:props.activeAccount.balance - Number(createData.amount)}))
  dispatch(addTransaction({
    id:Date.now().toString(),
    amount: createData.amount,
    status: "success",
    desc: `You bought  ${createData.amount} Pin`,
    to: createData.mobile,
    date: Date.now(),
    accountNumber: props.activeAccount.name,
  }))

  props.setIsExamPinOpen(false)
  setCreateData(initial)
    
}
else{


  !createData.mobile && setCreateDataRegex(prev=>{
    return {...prev,mobile:{...prev.mobile,error:true }}
  })

  setError(true)
}
 
 
}
  const handleClose = () => {
    props.setIsExamPinOpen(!props.isExamPinOpen);
  };
  return (
    props.isExamPinOpen && (
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

          <div className="text-gray-900 text-[16px] font-semibold">Buy Scratch Card</div>
        
        
          <div>
            <label className="text-[13px]">Exam</label>
            <div className="border h-10 flex items-center p-2">
                  <select name="amount" onChange={handleChange} value={createData.amount} className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full">
                  {
                    exampin.map((exam)=>{
                      return <option key={exam.name} value={exam.value}  className='text-gray-500 text-xs placeholder:text-[13px]'>{exam.name}</option>
                    })
                   }
                  </select>
                  <div>
                  </div>
            </div>
          

         
            </div>
        
        
          <div>
            <label className="text-[13px]">Mobile Number</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="+234-724-723-0890"
                type="text"
                name="mobile"
                value={createData.mobile}
                onChange={handleChange}
              />
                 { ( !createDataRegex.mobile.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createDataRegex.mobile.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.mobile.message}</p>
          }


          
            <div className="flex">
           
                <button onClick={handleSubmit} className="text-[13px]  w-full text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
            Buy Pin
          </button>  
          </div>
           
        
        </div>
      </div>
    )
  );
}

export default BuyExamPin;
