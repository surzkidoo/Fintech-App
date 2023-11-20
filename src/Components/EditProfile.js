import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2Circle, BsInfoCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { authUpdateUserBio } from "../actions";

export default function EditProfile(props) {
  const regex = {
    firstname:{
    message:'first name must be contains more than three letter',
    regexop:/^[0-9A-Za-z]{3,}$/,
    error:false
  },lastname:{
    message:'last name must be contains more than three letter',
    regexop:/^[0-9A-Za-z]{3,}$/,
    error:false
  },middlename:{
    message:'first name must be contains more than three letter',
    regexop:/^[0-9a-zA-Z]{0,}$/,
    error:false
  },email:{
    message:'email must be valid',
    regexop:/^[0-9a-zA-Z@.]{3,}$/,
    error:false
  },
  mobile:{
    message:'mobile must be 8 digit number',
    regexop:/^[0-9]{8,}$/,
    error:false
  },
  country:{
    message:'country must be contains more than three letter',
    regexop:/^[1-9]{1,}$/,
    error:false
  },
  dateofbirth:{
    message:'Amount must be greater than Zero',
    regexop:/^[0-9-]{1,}$/,
    error:false
  }
}
  const [createDataRegex, setCreateDataRegex] = useState(regex)
  const [error, setError] = useState(false)
  const {auth,app} = useSelector(state=>state)
  const {bio} = auth.user
  let initial = {
    firstname: bio.firstname,
    lastname: bio.lastname,
    middlename: bio.middlename,
    email: bio.email,
    mobile: bio.mobile,
    dateofbirth: bio.dateofbirth,
    country: bio.country,
  }

  const [createData, setCreateData] = useState(initial)
  useEffect(()=>{ 
   
    setCreateData({ 
      firstname: bio.firstname,
      lastname: bio.lastname,
      middlename: bio.middlename,
      email: bio.email,
      mobile: bio.mobile,
      dateofbirth: bio.dateofbirth,
      country: bio.country,})
  },[bio])
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
    !createDataRegex.firstname.error && createData.firstname &&
    !createDataRegex.lastname.error && createData.lastname &&
    !createDataRegex.email.error && createData.email &&
    !createDataRegex.mobile.error && createData.mobile &&
    !createDataRegex.dateofbirth.error && createData.dateofbirth

    ){
      dispatch(authUpdateUserBio(createData))
      props.setIsEditProfileOpen(false)
      setCreateData(initial)
    }

else{


  !createData.email && setCreateDataRegex(prev=>{
    return {...prev,email:{...prev.email,error:true }}
  })

  !createData.firstname && setCreateDataRegex(prev=>{
    return {...prev,firstname:{...prev.firstname,error:true }}
  })

  !createData.lastname && setCreateDataRegex(prev=>{
    return {...prev,lastname:{...prev.lastname,error:true }}
  })

  !createData.mobile && setCreateDataRegex(prev=>{
    return {...prev,mobile:{...prev.mobile,error:true }}
  })

  !createData.dateofbirth && setCreateDataRegex(prev=>{
    return {...prev,dateofbirth:{...prev.dateofbirth,error:true }}
  })

  setError(true)
}

}
  const handleClose = () => {
    props.setIsEditProfileOpen(!props.isEditProfileOpen);
  }

  return (
    
    props.isEditProfileOpen && (
      <div
        className="fixed w-full h-full flex items-center justify-center  top-0 left-0 bg-black"
        style={{ backgroundColor: "rgba(0,0,0,0.3)", zIndex: 10 }}
      >
        <div className="w-full sm:w-[480px] m-1 bg-white border relative rounded-lg p-1 md:p-4 flex flex-col gap-2">
          <div
            onClick={handleClose}
            className="absolute right-2 top-2 p-2 bg-red-500 text-white"
          >
            <AiOutlineClose />
          </div>

          <div className="text-gray-900 font-semibold text-[16px]">
            Edit Profile
          </div>

          <div className="flex flex-col lg:flex-row gap-2  w-full">
            <div className="flex-1">
              <label className="text-[13px]">First Name</label>
              <div className="border h-10 flex items-center p-2">
                <input
                  className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                  placeholder="amount you wish to send"
                  type="text"
                  value={createData.firstname}
                  name="firstname"
                  onChange={handleChange}
                />
                 { ( !createDataRegex.firstname.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
              {
           ( createDataRegex.firstname.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.firstname.message}</p>
          }
            </div>

           

            <div className="flex-1">
              <label className="text-[13px]">Last Name</label>
              <div className="border h-10 flex items-center p-2">
                <input
                  className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                  placeholder="amount you wish to send"
                  type="text"
                  value={createData.lastname}
                  name="lastname"
                  onChange={handleChange}
                />
                  { ( !createDataRegex.lastname.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              
              </div>
              
            {
           ( createDataRegex.lastname.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.lastname.message}</p>
          }
            </div>


          </div>

          <div>
            <label className="text-[13px]">Middle Name</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="amount you wish to send"
                type="text"
                value={createData.middlename}
                name="middlename"
                onChange={handleChange}
              />
              <div>
              </div>
            </div>
          </div>

          <div>
            <label className="text-[13px]">Email</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="amount you wish to send"
                type="text"
                value={createData.email}
                name="email"
                onChange={handleChange}
              />
                { ( !createDataRegex.email.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
              
            {
           ( createDataRegex.email.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.email.message}</p>
          }
            </div>
        

          <div>
            <label className="text-[13px]">Mobile</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="amount you wish to send"
                type="text"
                value={createData.mobile}
                name="mobile"
                onChange={handleChange}
              />
                { ( !createDataRegex.mobile.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
              
            {
           ( createDataRegex.mobile.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />rr{createDataRegex.mobile.message}</p>
          }
            </div>
        

          <div>
            <label className="text-[13px]">Date OF Birth</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="amount you wish to send"
                type="date"
                value={createData.dateofbirth}
                name="dateofbirth"
                onChange={handleChange}
              />
              </div>
              {
           ( createDataRegex.dateofbirth.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createDataRegex.dateofbirth.message}</p>
          }
            </div>

            

          <div>
            <label className="text-[13px]">Country</label>
            <div className="border h-10 flex items-center p-2">
              <select name="country"  value={createData.country}  onChange={handleChange} className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full">

                {
                  app.countries.map((country)=>{
                    return <option key={country.value} value={country.value} {...createData.country==country && 'selected'} className="text-gray-500 text-xs">{country.name}</option>

                  })
                }
              </select>
              <div>
                {/* <BsCheck2Circle className="text-green-500" /> */}
              </div>
            </div>
          </div>

          <button onClick={handleSubmit} className="text-[13px] text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
            Save
          </button>
        </div>
      </div>
    )
  );
}
