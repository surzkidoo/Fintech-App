import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2Circle, BsInfoCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction, debitAccount } from "../actions";

function BuyElectricity(props) {
  const regex = {meterno:{
    message:'Mobile number must be 8 digit number',
    regexop:/^[0-9]{8,}$/,
    error:false
  },
  company:{
    message:'Mobile number must be 8 digit number',
    regexop:/^[0-9]{8,}$/,
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
  const {electricity} =useSelector(state=>state.app)
  const [selectedCompany, setSelectedCompany] = useState(electricity[0])
  const initial ={meterno:'',company:selectedCompany.name ,amount:selectedCompany.subscriptions[0].price}
  const [createData, setCreateData] = useState(initial)

  const dispatch = useDispatch();

  const handleChange =(e)=>{    
    setCreateData(prev=> {
      setCreateDataRegex(prev=>{
        return {...prev,[e.target.name]:{...prev[e.target.name],error:!createDataRegex[e.target.name].regexop.test(e.target.value) }}
      })
        if(e.target.name=='company'){
          let newb =electricity.find(elec=>elec.value==e.target.value)
          setSelectedCompany(newb)
                }
        return {...prev,[e.target.name]:e.target.value}
      })
  }

const handleSubmit=(e)=>{
  e.preventDefault()
  if(
    !createDataRegex.meterno.error && createData.meterno
  
    ){
      dispatch(debitAccount({...props.activeAccount,balance:props.activeAccount.balance - Number(createData.amount)}))
      dispatch(addTransaction({
        id:Date.now().toString(),
        amount: createData.amount,
        status: "success",
        desc: `You buy ${createData.amount} worth of power for Meter No. ${createData.meterno}`,
        to: `${selectedCompany.name}`,
        date: Date.now(),
        accountNumber: props.activeAccount.name,
      }))
    
      props.setIsElectricityOpen(false)
      setCreateData(initial)
    
}
else{


  !createData.meterno && setCreateDataRegex(prev=>{
    return {...prev,meterno:{...prev.meterno,error:true }}
  })



  setError(true)
}
 
}

  const handleClose = () => {
    props.setIsElectricityOpen(!props.isElectricityOpen);
  };
  return (
    props.isElectricityOpen && (
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

          <div className="text-gray-900 text-[16px] font-semibold">Buy Electricity</div>
          <div>
            <label className="text-[13px]">Meter Number</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="4724723890"
                type="text"
                name="meterno"
                value={createData.meterno}
                onChange={handleChange}
              />
                  { ( !createDataRegex.meterno.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createDataRegex.meterno.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.meterno.message}</p>
          }

          <div>
            <label className="text-[13px]">Distribution Company</label>
            <div className="border h-10 flex items-center p-2">
                  <select name="company" value={createData.company} onChange={handleChange} className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full">
                  {
                    electricity.map((net)=>{
                      return <option key={net.name} value={net.value}  className='text-gray-500 text-xs placeholder:text-[13px]'>{net.name}</option>

                    })
                   }
                  </select>
                  <div>
                    <BsCheck2Circle className="text-green-500" />
                  </div>
            </div>
          </div>

          
            <div>
            <label className="text-[13px]">Electricity/Unit</label>
            <div  className="border h-10 flex items-center p-2">
                  <select name='amount' onChange={handleChange} value={createData.amount} className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full">
                  {
                    selectedCompany.subscriptions.map((net)=>{
                      return <option key={net.name} value={net.price}  className='text-gray-500 text-xs placeholder:text-[13px]'>{net.name}</option>

                    })
                   }

                  </select>
                  <div>
                    <BsCheck2Circle className="text-green-500" />
                  </div>
          </div>

         
            </div>
            <div className="flex">
           
                <button onClick={handleSubmit} className="text-[13px]  w-full text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
            Buy Electricity
          </button>  
          </div>
           
        
        </div>
      </div>
    )
  );
}

export default BuyElectricity;
