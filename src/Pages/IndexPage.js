import React, { useState } from "react";
import {
  BsCalendar2,
  BsChatDotsFill,
  BsCheck2Circle,
  BsDroplet,
  BsPlus,
  BsPlusCircle,
} from "react-icons/bs";
import {
  FaCalendarAlt,
  FaChartLine,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import CreateAccount from "../Components/CreateAccount";
import CreateGoal from "../Components/CreateGoal";
import AddQuickPayment from "../Components/AddQuickPayment";
import QuickPayment from "../Components/QuickPayment";
//import {Chart as ChartJs} from 'chart.js'

export default function IndexPage() {
  const { auth,loading}  = useSelector(state=>state)
  const [isOpen, setIsOpen] = useState(false)
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false)
  const [isAddQuickPaymentOpen, setIsAddQuickPaymentOpen] = useState(false)
  const [isAddPaymentOpen, setIsAddPaymentOpen] = useState(false)
  const [selectedQuickpayment, setselectedQuickpayment] = useState(undefined)



  return (
    <div className="px-1 md:px-4 my-2">
      <CreateAccount isOpen={isOpen} setIsOpen={setIsOpen} />
      <CreateGoal isAddGoalOpen={isAddGoalOpen} setIsAddGoalOpen={setIsAddGoalOpen}/>
      <AddQuickPayment isAddQuickPaymentOpen={isAddQuickPaymentOpen} setIsAddQuickPaymentOpen={setIsAddQuickPaymentOpen}/>
      <QuickPayment isAddPaymentOpen={isAddPaymentOpen} setIsAddPaymentOpen={setIsAddPaymentOpen} selectedQuickpayment={selectedQuickpayment} />


      <div className="flex justify-between items-center">
        <div className="font-semibold text-xs text-gray-700">
          Balance Overview
        </div>
        <div className="flex gap-1">
          <BsCalendar2  size={18}/>
          <div className="text-gray-700 text-[13px]">Today,{ new Date().toDateString()}</div>
        </div>
      </div>

      <div className="flex gap-4 my-2 flex-col lg:flex-row">
        <div className="w-full md:min-w-[650px] flex flex-col md:flex-row gap-4 border p-2 rounded-md">
          <div className="flex gap-4 flex-wrap">
            <div className="w-full md:w-[300px] h-[120px]  bg-blue-500 gap-1 rounded-2xl flex justify-center items-center flex-col">
              <div onClick={()=>setIsOpen(!isOpen)} className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <BsPlusCircle size={24} className="text-blue-500 font-bold" />
              </div>
              <div className="text-[13px] text-white">Add new account</div>
            </div>
            {
              auth.user.accounts.map(acc=>{
                return <div key={acc.id}  className="w-full  md:w-[300px] h-[120px]  justify-between rounded-2xl flex items-center border p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="text-gray-500 text-[13px]">{acc.name}</div>
  
                  <div className="text-gray-700 font-bold text-md">
                    ${acc.balance}.00
                  </div>
  
                  <div className="flex items-center gap-1 text-[13px] text-blue-700">
                    Open <FaExpandArrowsAlt size={18} className="text-blue-700" />
                  </div>
                </div>
  
                <div className="">
                  <FaChartLine />
                </div>
              </div>
              })
            }
           
          </div>
          {/* <div className="flex gap-4">
          <div className="w-[300px] h-[120px]  justify-between rounded-2xl flex items-center border p-2">
              <div className="flex flex-col justify-between h-full">
                <div className="text-gray-500 text-[13px]">Saving accounts</div>

                <div className="text-gray-700 font-bold text-md">
                  $221,874.45
                </div>

                <div className="flex items-center gap-1 text-[13px] text-blue-700">
                  Open <FaExpandArrowsAlt size={18} className="text-blue-700" />
                </div>
              </div>

              <div className="">
                <FaChartLine />
              </div>
          </div>

            <div className="w-[300px] h-[120px]  justify-between rounded-2xl flex items-center border p-2">
              <div className="flex flex-col justify-between h-full">
                <div className="text-gray-500 text-[13px]">Saving accounts</div>

                <div className="text-gray-700 font-bold text-md">
                  $221,874.45
                </div>

                <div className="flex items-center gap-1 text-[13px] text-blue-700">
                  Open <FaExpandArrowsAlt size={18} className="text-blue-700" />
                </div>
              </div>

              <div className="">
                <FaChartLine />
              </div>
            </div>
          </div> */}
         
        </div>

        <div className="p-2 flex flex-col w-full  border rounded-md">
          <div className="flex justify-between mb-2">
            <div className="text-gray-700 text-xs font-semibold">Revenue</div>

            <div>
              <BsChatDotsFill className="text-gray-500" size={18} />
            </div>
          </div>
          <div className="text-gray-400 text-[13px]">
            Total revenue since start of dailPay
          </div>

          <div className="text-gray-700 font-semibold text-md">
            $8,838,383.83
          </div>
          <div>Chart here</div>
          <div className="flex items-center gap-1  text-blue-700 text-[13px]">
            Open <FaExpandArrowsAlt size={16} className="text-blue-700 "/>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-4 w-full flex-col lg:flex-row h-[300px]">
        <div className="w-full md:min-w-[640px] border p-2 rounded-md">
          <div className="flex justify-between ">
            <div className="text-xs text-gray-700 font-semibold">My Activity</div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center">
                <FaCalendarAlt className="text-gray-700 " size={18} />
                <p className="text-[13px] text-gray-700">4th sep 2023</p>
              </div>

              <div className="border rounded-md p-1 flex items-center">
                <select className="text-[13px] outline-none border-none text-gray-700">
                  <option className="text-xm text-gray-700">Monthly</option>
                </select>
              </div>
            </div>
          </div>
          <div>Chart here</div>
        </div>
        <div className="flex flex-col w-full border p-2 rounded-md">
          <div className="flex justify-between">
            <p className="text-xs text-gray-700 font-semibold">Goals</p>
            <div onClick={()=>{setIsAddGoalOpen(!isAddGoalOpen)}} className="bg-blue-700 w-5 h-5 rounded-full flex justify-center items-center">
              <BsPlus className="text-white" />
            </div>
          </div>
          <div>Chart here</div>
          <div className="flex justify-between">
            <div className="text-xs text-gray-900 font-semibold">Total : $38,323</div>

            <div className="flex items-center gap-1 text-[13px] text-blue-700">
              Open <FaExpandArrowsAlt size={16} className="text-blue-700" />
            </div>
          </div>
        </div>
      </div>

      <div className=" gap-4 flex mt-4 w-full flex-col lg:flex-row">
        <div className="w-full md:min-w-[640px] flex flex-col border rounded-md p-2">
          <div className="flex justify-between">
            <div className="text-xs font-semibold text-gray-700">Transactions</div>
            <div>
              <BsDroplet size={18} />
            </div>
          </div>
          <div className="mt-2">
            <table className="w-full">
              
              <tbody>
              <tr className="text-left border p-3">
              <td className="text-[13px] text-gray-500 ">Name</td>
              <td className="text-[13px] text-gray-500">Amount</td>
              <td className="text-[13px] text-gray-500">Date</td>
              <td className="text-[13px] text-gray-500">Method</td>
              </tr>
              <tr>
                <td className="flex gap-1 items-center">
              <img src="/profile.png" alt="" className="w-10 h-10 block rounded-full"/>
              <div className="text-[13px] text-gray-900 font-bold">Musa Isah</div>
                </td>

                <td className="text-green-500 text-[13px]">
                  + 5,000
                </td>

                <td className="text-gray-700 text-[13px]">
                  12/12/2023 1:20 pm
                  </td>

                  <td className="text-gray-900 font-bold text-[13px]">
                  Visa
                </td>
              </tr>
              </tbody>
             
            </table>

          </div>
        </div>


        <div className="flex flex-col gap-2 border p-2 rounded-md w-full">
          <div className="text-xs text-gray-700 font-semibold">
            Quick Transactions
          </div>

          <div className="flex gap-1">
          
          <div onClick={()=>setIsAddQuickPaymentOpen(!isAddQuickPaymentOpen)} className="bg-blue-700 flex items-center justify-center w-10 h-10 block rounded-full"><BsPlus className="text-white " size={30}/></div>
         {
          auth.user.quickpayment.map((q)=>{
            return    <img onClick={()=>{setIsAddPaymentOpen(!isAddPaymentOpen); setselectedQuickpayment(q)}} src={q.image} alt="" className="w-10 h-10 block rounded-full object-cover"/>

          })
         }
         
          </div>
        </div>
      </div>
    </div>
  );
}
