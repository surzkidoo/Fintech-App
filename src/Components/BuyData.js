import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2Circle, BsInfoCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction, debitAccount } from "../actions";

function BuyData(props) {
  const regex = {mobile:{
    message:'Mobile number must be 8 digit number',
    regexop:/^[0-9]{8,}$/,
    error:false
  },
  network:{
    message:'Mobile number must be 8 digit number',
    regexop:/^[0-9]{8,}$/,
    error:false
  },

  bundle:{
    message:'Mobile number must be 8 digit number',
    regexop:/^[0-9]{8,}$/,
    error:false
  },

}
  const [createDataRegex, setCreateDataRegex] = useState(regex)
  const [error, setError] = useState(false)
  const { network } = useSelector((state) => state.app);
  const [selectedNetwork, setSelectedNetwork] = useState(network[0]);
  const initial = { mobile: "", bundle: network[0].databundle[0].price, network: selectedNetwork };
  const [createData, setCreateData] = useState(initial);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCreateData((prev) => {
      setCreateDataRegex(prev=>{
        return {...prev,[e.target.name]:{...prev[e.target.name],error:createDataRegex[e.target.name] && !createDataRegex[e.target.name].regexop.test(e.target.value) }}
      })

      if (e.target.name == "network") {
        let newb = network.find((net) => net.value == e.target.value);
        setSelectedNetwork(newb);
      }
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(
      !createDataRegex.mobile.error && createData.mobile
    
      ){
        dispatch(
          debitAccount({
            ...props.activeAccount,
            balance: props.activeAccount.balance - Number(createData.bundle),
          })
        );
        dispatch(
          addTransaction({
            id: Date.now().toString(),
            amount: createData.bundle,
            status: "success",
            desc: `You transfer ${createData.bundle} worth of data to ${createData.mobile}`,
            to: `${createData.mobile}`,
            date: Date.now(),
            accountNumber: props.activeAccount.name,
          })
        );
    
        props.setIsDataOpen(false);
        setCreateData(initial);
      
  }
  else{
  
  
    !createData.mobile && setCreateDataRegex(prev=>{
      return {...prev,mobile:{...prev.mobile,error:true }}
    })
  

  
    setError(true)
  }
   
   
  }
  const handleClose = () => {
    props.setIsDataOpen(!props.isDataOpen);
  }
  return (
    props.isDataOpen && (
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

          <div className="text-gray-900 text-[16px] font-semibold">
            Buy Data
          </div>
          <div>
            <label className="text-[13px]">Mobile Number</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="4724723890"
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

          <div>
            <label className="text-[13px]">Network</label>
            <div className="border h-10 flex items-center p-2">
              <select
                name="network"
                onChange={handleChange}
                value={createData.network}
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
              >
                {network.map((net) => {
                  return (
                    <option
                      key={net.name}
                      value={net.value}
                      className="text-gray-500 text-xs placeholder:text-[13px]"
                    >
                      {net.name}
                    </option>
                  );
                })}
              </select>
              <div>
              </div>
            </div>
          </div>

          <div>
            <label className="text-[13px]">Data</label>
            <div className="border h-10 flex items-center p-2">
              <select
                onChange={handleChange}
                name="bundle"
                value={createData.bundle}
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
              >
                {selectedNetwork.databundle.map((net) => {
                  return (
                    <option
                      key={net.name}
                      value={net.price}
                      className="text-gray-500 text-xs placeholder:text-[13px]"
                    >
                      {net.name}
                    </option>
                  );
                })}
              </select>
              <div>
              </div>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={handleSubmit}
              className="text-[13px]  w-full text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]"
            >
              Buy Data
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default BuyData;
