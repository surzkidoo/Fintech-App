import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { BsCheck, BsCheck2Circle, BsChevronDoubleLeft, BsChevronDoubleRight, BsSearch } from 'react-icons/bs'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function TransactionPage() {
  const activeclass = 'text-[12px] bg-green-700 text-white flex justify-center items-center h-5 w-5 rounded-full'
  const normalclass = 'text-[12px] hover:bg-green-700 hover:text-white text-gray-900 flex justify-center items-center h-5 w-5 rounded-full'
  const {transaction} = useSelector(state=>state.auth.user)
  const [transacionData, setTransacionData] = useState([])
  const [search ,setSearch] =  useState('')
  const [currentpage, setcurrentpage] = useState(1)
  const [totalpage, settotalpage] = useState(transaction.length/2)



  useEffect(()=>{
    setTransacionData(transaction.slice(currentpage*2-2,currentpage*2))
  },[transaction,currentpage])

  const handleChangePage = (page)=>{
      setcurrentpage(page)
  }

    
  const pagination =  () =>{
    let data = []
    for(let i=1;i<=totalpage;i++){
      data.push(<div onClick={()=>handleChangePage(i)} className={i==currentpage?activeclass:normalclass}>{i}</div>)
    }
    return data
  }
  

 const handleSearch = (e) =>{
    if(e.target.value!=''){
      setSearch(e.target.value)
      let result = transaction.filter((tran)=>{
        return ( tran.to.includes(e.target.value) || tran.desc.includes(e.target.value) || tran.id.includes(e.target.value))
      })
      setTransacionData(result)
      return
    }
    setTransacionData(transaction)
  }
  return (
    <div className='mx-1 md:mx-4'>
       <h4 className="text-gray-900">Transaction</h4>
      <p className="text-[13px]">
        This section contains all transacion history
      </p>
            {/* <div className='absolute w-full h-full flex items-center justify-center  top-0 left-0'>
                   
                    <div className='w-[400px] bg-white border rounded-lg p-4 flex flex-col gap-4 '>
                    <div className='text-gray-900 text-[16px]'>
                        Choose transacion type
                    </div>
                        <div className='p-3 rounded-md border hover:bg-blue-100 hover:text-white'>
                            <div className='text-xs font-semibold  text-gray-700'>Internal Transaction</div>
                            <div className='text-[13px]   text-gray-500'>Internal transfer deals with sending Funds to dailPay users</div>
                        </div>

                        <div className='p-3 rounded-md border hover:bg-blue-100 hover:text-white'>
                            <div className='text-xs font-semibold   text-gray-700'>External Transaction</div>
                            <div className='text-[13px]  text-gray-500'>Internal transfer deals with sending Funds to Banks</div>
                        </div>
                    </div>


                    <div className='w-[400px] bg-white border rounded-lg p-4 flex flex-col gap-2 '>
                    <div className='text-gray-900 text-[16px]'>
                        Internal Transfer
                    </div>
                        <div>
                            <label className='text-[13px]'>Receiver Number</label>
                            <div className='border h-10 flex items-center p-2'>
                            <input className='border-none outline-none placeholder:text-[13px] text-xs  w-full' placeholder='234637364273'  type='text'  />
                            <div><BsCheck2Circle className='text-green-500'/></div>
                            </div>
                        </div>

                        <div>
                            <label className='text-[13px]'>Amount</label>
                            <div className='border h-10 flex items-center p-2'>
                            <input className='border-none outline-none placeholder:text-[13px] text-xs  w-full' placeholder='$3,000'  type='text'  />
                            <div><BsCheck2Circle className='text-green-500'/></div>
                            </div>
                        </div>

                        <div>
                            <label className='text-[13px]'>Descripion</label>
                            <div className='border h-30 flex items-center p-2'>
                            <textarea className='border-none outline-none placeholder:text-[13px] text-xs  w-full' placeholder='$3,000'  type='text'  >
                                </textarea>
                        
                            <div><BsCheck2Circle className='text-green-500'/></div>
                            </div>
                        </div>

                        <button className='text-[13px] text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]'>Send Funds</button>
                    </div>

                    <div className='w-[400px] bg-white border rounded-lg p-4 flex flex-col gap-2 '>
                    <div className='text-gray-900 text-[16px]'>
                        External Transfer
                    </div>
                        <div>
                            <label className='text-[13px]'>Account Number</label>
                            <div className='border h-10 flex items-center p-2'>
                            <input className='border-none outline-none placeholder:text-[13px] text-xs  w-full' placeholder='234637364273'  type='text'  />
                            <div><BsCheck2Circle className='text-green-500'/></div>
                            </div>
                        </div>
                        <div>
                            <label className='text-[13px]'>Bank Name</label>
                            <div className='border h-10 flex items-center p-2'>
                            <select className='border-none outline-none placeholder:text-[13px] text-xs  w-full' placeholder='234637364273' >
                                <option className='text-[13px]'>Access Bank</option>
                                <option className='text-[13px]'>First Bank</option>
                                <option className='text-[13px]'>GT Bank</option>
                            </select>
                            <div><BsCheck2Circle className='text-green-500'/></div>
                            </div>
                        </div>

                        <div>
                            <label className='text-[13px]'>Name</label>
                            <div className='border h-10 flex items-center p-2'>
                            <input className='border-none outline-none placeholder:text-[13px] text-xs  w-full' placeholder='jane doe'  type='text'  />
                            <div><BsCheck2Circle className='text-green-500'/></div>
                            </div>
                        </div>

                        <div>
                            <label className='text-[13px]'>Amount</label>
                            <div className='border h-10 flex items-center p-2'>
                            <input className='border-none outline-none placeholder:text-[13px] text-xs  w-full' placeholder='$3,000'  type='text'  />
                            <div><BsCheck2Circle className='text-green-500'/></div>
                            </div>
                        </div>

                        <div>
                            <label className='text-[13px]'>Descripion</label>
                            <div className='border h-30 flex items-center p-2'>
                            <textarea className='border-none outline-none placeholder:text-[13px] text-sm  w-full' placeholder='$3,000'  type='text'  >
                                </textarea>
                        
                            <div><BsCheck2Circle className='text-green-500'/></div>
                            </div>
                        </div>

                        <button className='text-[13px] text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]'>Send Funds</button>
                    </div>

                    <div className='w-[400px] bg-white border rounded-lg p-4 flex flex-col gap-4 '>
                    <div className='flex gap-3 items-center'>
                    <BsCheck2Circle className='text-green-600' size={40}  />
                    <div className='text-green-600 text-[16px]'>
                        The Transacion was Successfully
                    </div>
                    </div>
                   
                        <div className='p-3 rounded-md border hover:bg-blue-100 hover:text-white'>
                            <div className='text-[13px]   text-gray-500'>20,000 was succesfully sent +23463746387 on 23/12/2023. f you have any inquery please contact support</div>
                        </div>

                        
                    </div>
                   
            </div> */}

{/*             
            <div className="w-[300px] h-[120px]  bg-blue-500 gap-1 rounded-2xl flex justify-center items-center flex-col mb-2">
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <FaExternalLinkAlt size={18} className="text-blue-500 font-bold" />
              </div>
              <div className="text-[13px] text-white">Make Transacion</div>
            </div> */}

        <div className='border p-1 rounded-lg flex flex-col '>
        <div className='self-end m-2'>
        <div className='border-2 w-[200px] rounded-xl flex items-center justify-center px-2 py-2 gap-1 '>
                <BsSearch size={18}  className='text-gray-400'/>
                <input  type='text' value={search} onKeyUp={handleSearch} className='text-xs border-0 outline-none w-full placeholder:text-gray-400 text-[13px] placeholder:text-[13px]' placeholder='search a transaction'/>
        </div>

        </div>
        <div className='overflow-x-scroll lg:overflow-hidden'>
        <table className="w-full " >
              <tr className="text-center  rounded-md border   border-collapse">
              <th className="text-[13px] text-gray-500 p-2">Id</th>
              <th className="text-[13px] text-gray-500">Status</th>
              <th className="text-[13px] text-gray-500">Amount</th>
              <th className="text-[13px] text-gray-500">Description</th>
              <th className="text-[13px] text-gray-500">To</th>
              <th className="text-[13px] text-gray-500">Date</th>
              </tr>

              {
                transacionData.map(tran=>{
                  return <tr className='text-center '>
                  <td className="text-gray-700 text-[13px] p-2">
                <div className="text-[13px] text-gray-900 font-bold">{tran.id}</div>
                  </td>
  
                  <td className="text-green-500 text-[13px]">
                    {tran.status}
                  </td>
  
                  <td className="text-gray-700 text-[13px]">
                    {tran.amount}
                    </td>
  
                    <td className="text-gray-900 text-[13px]">
                      {tran.desc}
                  </td>
  
                  <td className="text-gray-900  text-[13px]">
                     {tran.to}
                  </td>
  
                  <td className="text-gray-900  text-[13px]">
                      {new Date(tran.date).toDateString()}
                  </td>
                </tr>
                })
              }
              

            </table>
        </div>
         
            <div className='flex justify-between m-2 items-center'>
              <div className='flex gap-1'>
                <BsChevronDoubleLeft onClick={()=>{currentpage>1 && setcurrentpage(currentpage-1)}} className='text-gray-900 hover:text-green-700 mr-2'/>

             {pagination()}

             <BsChevronDoubleRight onClick={()=>{totalpage>currentpage && setcurrentpage(currentpage+1)}}  className='text-gray-900 hover:text-green-700 ml-2'/>
              </div>

              <div>
                <div className='text-gray-900 text-[15px]'>{currentpage} of {totalpage}</div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default TransactionPage