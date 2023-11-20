import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2Circle, BsInfoCircle } from "react-icons/bs";
import { addTransaction, debitAccount } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function BuyAirtime(props) {
  const regex = {amount:{
    message:'Amount must be greater than 0',
    regexop:/^[0-9]{1,}$/,
    error:false
  },mobile:{
    message:'Mobile number must be 8 digit number',
    regexop:/^[0-9]{8,}$/,
    error:false
  },

  network:{
    message:'Mobile number must be 8 digit number',
    regexop:/^[0-9]{8,}$/,
    error:false
  },

  
}
  const [createAirtimeRegex, setCreateAirtimeRegex] = useState(regex)
  const [error, setError] = useState(false)
  const {network} =useSelector(state=>state.app)
  const initial ={mobile:'',amount:'',network:network[0].name}
  const [createAirtime, setCreateAirtime] = useState(initial)
  const dispatch = useDispatch();

  const handleChange =(e)=>{    
    setCreateAirtime(prev=> {
      setCreateAirtimeRegex(prev=>{
        return {...prev,[e.target.name]:{...prev[e.target.name],error:!createAirtimeRegex[e.target.name].regexop.test(e.target.value) }}
      })
        return {...prev,[e.target.name]:e.target.value}
      })
  }

const handleSubmit=(e)=>{
  e.preventDefault()
  if(
    !createAirtimeRegex.amount.error && createAirtime.amount &&
    !createAirtimeRegex.mobile.error && createAirtime.mobile
  
    ){
      dispatch(debitAccount({...props.activeAccount,balance:props.activeAccount.balance - Number(createAirtime.amount)}))
      dispatch(addTransaction({
        id:Date.now().toString(),
        amount: createAirtime.amount,
        status: "sucess",
        desc: `You transfer $${createAirtime.amount} worth of airtime to ${createAirtime.mobile}`,
        to: `${createAirtime.mobile}`,
        date: Date.now(),
        accountNumber: props.activeAccount.name,
      }))
    
      props.setIsAirtimeOpen(false)
      setCreateAirtime(initial)
}
else{


  !createAirtime.mobile && setCreateAirtimeRegex(prev=>{
    return {...prev,mobile:{...prev.mobile,error:true }}
  })

  !createAirtime.amount && setCreateAirtimeRegex(prev=>{
    return {...prev,amount:{...prev.amount,error:true }}
  })
 

  setError(true)
}
  

}
  const handleClose = () => {
    props.setIsAirtimeOpen(!props.isAirtimeOpen);
  };
  return (
    props.isAirtimeOpen && (
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

          <div className="text-gray-900 text-[16px] font-semibold">Buy Airtime</div>
          <div>
            <label className="text-[13px]">Mobile Number</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="4724723890"
                type="text"
                name="mobile"
                value={createAirtime.mobile}
                onChange={handleChange}
              />
             <div>
              { ( !createAirtimeRegex.mobile.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createAirtimeRegex.mobile.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createAirtimeRegex.mobile.message}</p>
          }
          </div>

          <div>
            <label className="text-[13px]">Network</label>
            <div className="border h-10 flex items-center p-2">
                 

                  <select name='network' onChange={handleChange}  value={createAirtime.network} className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full">
                   
                   {
                    network.map((net)=>{
                      return <option key={net.name} value={net.value}  className='text-gray-500 text-xs placeholder:text-[13px]'>{net.name}</option>

                    })
                   }
                  </select>
                  <div>
                  </div>
                </div>
          </div>

            <div>
            <label className="text-[13px]">Airtime</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="Airtime"
                type="text"
                value={createAirtime.amount}
                name="amount"
                onChange={handleChange}
              />
               <div>
              { ( !createAirtimeRegex.amount.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createAirtimeRegex.amount.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createAirtimeRegex.amount.message}</p>
          }
          </div>
            <div className="flex">
           
                <button onClick={handleSubmit} className="text-[13px]  w-full text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
            Buy
          </button>  
          </div>
           
        
        </div>
      </div>
    )
  );
}

export default BuyAirtime;
