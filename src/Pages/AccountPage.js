import React, { useRef, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import EditProfie from "../Components/EditProfile";
import EditBank from "../Components/EditBank";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../actions";



function AccountPage() {
  const { bio,bank } = useSelector((state) => state.auth.user);
  const [file, setfile] = useState(bio.profile)
  const fileElement = useRef()
  const dispatch = useDispatch()
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
  const [isEditBankOpen, setIsEditBankOpen] = useState(false)

  const handleFiles =(files) =>{
      const reader = new FileReader()
      reader.onload =(e)=>{
        setfile(e.target.result)
        dispatch(addImage({profile:e.target.result}))
      }
      reader.readAsDataURL(fileElement.current.files[0])
  }
  return (
    <div className=" mx-1 md:mx-4">
      <EditProfie isEditProfileOpen={isEditProfileOpen} setIsEditProfileOpen={setIsEditProfileOpen} bio={bio}/>
      <EditBank isEditBankOpen={isEditBankOpen} setIsEditBankOpen={setIsEditBankOpen}/>
      <div className="flex flex-col">
        <div className="flex justify-between items-center my-2">
        <h4>Personal Information</h4>
        <div onClick={()=>setIsEditProfileOpen(!isEditProfileOpen)} className="flex justify-between items-center text-white rounded-md text-[13px] bg-blue-500 uppercase font-bold  gap-2 border p-2"> <FaUserEdit size={18}/> Edit</div>
        </div>
        <div className="flex gap-2 border p-2 md:p-4 flex-col lg:flex-row">

          <div className="relative flex items-center justify-center  min-w-[300px]">
          <img src={file}  className="self-center w-48 h-48  rounded-full" alt=""  style={{objectFit:'cover'}} />
            
          <div className=" bg-gray-100  absolute w-21 p-2 border text-xs">Change Photo</div>

            <input onChange={handleFiles}  ref={fileElement} type="file" className="absolute opacity-0 w-20 "  placeholder="ok"/>
          
          </div>

          <div  className="flex flex-wrap gap-2 md:justify-center lg:justify-start">
            <div className=" w-full sm:w-[300px]">
              <label className="text-[13px]">First Name</label>
              <div className="border h-10 flex items-center p-2">
                
      
                <div className="border-none outline-none placeholder:text-[13px]  text-xs  w-full">
                  {bio.firstname}
                </div>
              </div>
            </div>


            <div className="w-full sm:w-[300px]">
              <label className="text-[13px]">Last Name</label>
              <div className="border h-10 flex items-center p-2">
                
      
                <div className="border-none outline-none placeholder:text-[13px]  text-xs  w-full">
                  {bio.lastname} 
                </div>
              </div>
            </div>

       
            <div className="w-full sm:w-[300px]">
              <label className="text-[13px]">Middle Name</label>
              <div className="border h-10 flex items-center p-2">
                
      
                <div className="border-none outline-none placeholder:text-[13px]  text-xs  w-full">
                  {bio.middlename} 
                </div>
              </div>
            </div>

            <div className="w-full sm:w-[300px]">
              <label className="text-[13px]">Date Of Birth</label>
              <div className="border h-10 flex items-center p-2">
                
      
                <div className="border-none outline-none placeholder:text-[13px]  text-xs  w-full">
                 {bio.dateofbirth}
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[300px]">
              <label className="text-[13px]">Mobile</label>
              <div className="border h-10 flex items-center p-2">
                
      
                <div className="border-none outline-none placeholder:text-[13px]  text-xs  w-full">
                 {bio.mobile}
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[300px]">
              <label className="text-[13px]">Country</label>
              <div className="border h-10 flex items-center p-2">
                
      
                <div className="border-none outline-none placeholder:text-[13px]  text-xs  w-full">
                  {bio.country} 
                </div>
              </div>
            </div>

              <div className="w-full sm:w-[300px]">
              <label className="text-[13px]">Email</label>
              <div className="border h-10 flex items-center p-2">
                
      
                <div className="border-none outline-none placeholder:text-[13px]  text-xs  w-full">
                 {bio.email}
                </div>
              </div>
            </div>
           

          </div>
        </div>
      </div>

      <div className="mt-4">
      <div className="flex justify-between items-center my-2">
        <h4>Bank Details</h4>
        <div onClick={()=>setIsEditBankOpen(!isEditBankOpen)} className="flex justify-between items-center text-white rounded-md text-[13px] bg-blue-500 uppercase font-bold  gap-2 border p-2"> <FaUserEdit size={18}/> Edit</div>
        </div>
      <div  className="flex flex-wrap gap-2  md:justify-center lg:justify-start p-4 border">
            <div className="w-full sm:w-[300px]">
              <label className="text-[13px]">Bank Account Name</label>
              <div className="border h-10 flex items-center p-2">
                
      
                <div className="border-none outline-none placeholder:text-[13px]  text-xs  w-full">
                  {bank.name}
                </div>
              </div>
            </div>


            <div className="w-full sm:w-[300px]">
              <label className="text-[13px]">Bank Name</label>
              <div className="border h-10 flex items-center p-2">
                
      
                <div className="border-none outline-none placeholder:text-[13px]  text-xs  w-full">
                {bank.bankname}
                </div>
              </div>
            </div>

            <div className="w-full sm:w-[300px]">
              <label className="text-[13px]">Account Number</label>
              <div className="border h-10 flex items-center p-2">
                
      
                <div className="border-none outline-none placeholder:text-[13px]  text-xs  w-full">
                  {bank.number}
                </div>
              </div>
            </div>

            <div className="w-full sm:w-[300px]">
              <label className="text-[13px]">BVN Number</label>
              <div className="border h-10 flex items-center p-2">
                
      
                <div className="border-none outline-none placeholder:text-[13px]  text-xs  w-full">
                {bank.bvn}
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default AccountPage;
