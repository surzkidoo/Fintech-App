import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsCheck2Circle, BsInfoCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { authUpdateUserBank } from '../actions';

export default function EditBank(props) {
  const regex = {
    number:{
    message:'Account Number must 10 digit number',
    regexop:/^[0-9]{10}$/,
    error:false
  },name:{
    message:'Name must be contains more than three letters',
    regexop:/^[0-9A-Za-z]{3,}$/,
    error:false
  },bvn:{
    message:'Bvn must be 11 digit number',
    regexop:/^[0-9a-zA-Z]{10}$/,
    error:false
  }
}
  const [createDataRegex, setCreateDataRegex] = useState(regex)
  const [error, setError] = useState(false)
  const {auth,app} = useSelector(state=>state)
  const {bank} = auth.user
  let initial = {
    bankname: bank.bankname,
    bvn: bank.bvn,
    name: bank.name,
    number: bank.number,
  }

  const [createData, setCreateData] = useState(initial)
  useEffect(()=>{ 
    setCreateData({
      bankname: bank.bankname,
      bvn: bank.bvn,
      name: bank.name,
      number: bank.number,
    })
  },[bank])
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
    !createDataRegex.bvn.error && createData.bvn &&
    !createDataRegex.number.error && createData.number &&
    !createDataRegex.name.error && createData.name
    ){
      dispatch(authUpdateUserBank(createData))
      setCreateData(initial)
      props.setIsEditBankOpen(false)
    }

else{


  !createData.bvn && setCreateDataRegex(prev=>{
    return {...prev,bvn:{...prev.bvn,error:true }}
  })

  !createData.number && setCreateDataRegex(prev=>{
    return {...prev,number:{...prev.number,error:true }}
  })

  !createData.name && setCreateDataRegex(prev=>{
    return {...prev,name:{...prev.name,error:true }}
  })


  setError(true)
}


}

    const handleClose = () => {
        props.setIsEditBankOpen(!props.isEditBankOpen);
      };
      return (
        props.isEditBankOpen && (
          <div
            className="fixed w-full h-full flex items-center justify-center  top-0 left-0 bg-black"
            style={{ backgroundColor: "rgba(0,0,0,0.3)",zIndex:10 }}
          >
            <div className="w-full sm:w-[480px] m-1 bg-white border relative rounded-lg p-1 md:p-4 flex flex-col gap-2 ">
              <div
                onClick={handleClose}
                className="absolute right-2 top-2 p-2 bg-red-500 text-white"
              >
                <AiOutlineClose/>
              </div>
    
              <div className="text-gray-900 font-semibold text-[16px]">Edit Bank</div>

  <div>
                <label className="text-[13px]">Account Name</label>
                <div className="border h-10 flex items-center p-2">
                  <input
                    className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                    placeholder="amount you wish to send"
                    type="text"
                    value={createData.name}
                    onChange={handleChange}
                    name='name'
                  />
                   { ( !createDataRegex.name.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createDataRegex.name.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.name.message}</p>
          }

          
              <div>
                <label className="text-[13px]">Account Number</label>
                <div className="border h-10 flex items-center p-2">
                  <input
                    className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                    placeholder="amount you wish to send"
                    type="text"
                    value={createData.number}
                    name='number'
                    onChange={handleChange}
                  />
                  { ( !createDataRegex.number.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createDataRegex.number.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.number.message}</p>
          }

            


              <div>
                <label className="text-[13px]">Bank Name</label>
                <div className="border h-10 flex items-center p-2">
                 

                  <select onChange={handleChange} name='bankname' value={createData.bankname} className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full">
               
                    {
                  app.banks.map((ban)=>{
                    return <option key={ban.value} value={ban.name} {...createData.bankname==ban && 'selected'} className="text-gray-500 text-xs">{ban.name}</option>
                  })
                }
                  </select>
                  <div>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[13px]">BVN</label>
                <div className="border h-10 flex items-center p-2">
                 

                <input
                    className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                    placeholder="amount you wish to send"
                    type="text"
                    value={createData.bvn}
                    name='bvn'
                    onChange={handleChange}
                  />
                   { ( !createDataRegex.bvn.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>

            {
           ( createDataRegex.bvn.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.bvn.message}</p>
          }

    
              <button onClick={handleSubmit} className="text-[13px] text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
                Save
              </button>
            </div>
          </div>
        )
      );
}
