import React from 'react'
import { AiOutlineArrowRight,  AiOutlineClose } from 'react-icons/ai';
import { BsCheck2Circle } from 'react-icons/bs';

function TransferType(props) {
    const handleClose = () => {
        props.setIsTransferTypeOpen(!props.isTransferTypeOpen);
      };
      return (
        props.isTransferTypeOpen && (
          <div
            className="w-full h-full flex items-center justify-center  top-0 left-0 bg-black fixed"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            <div className="w-[400px] bg-white border relative rounded-lg p-4 flex flex-col gap-2 ">
              <div
                onClick={handleClose}
                className="absolute right-2 top-2 p-2 bg-red-500 text-white"
              >
                <AiOutlineClose/>
              </div>
    
              <div className="text-gray-900 text-[16px] font-semibold">Transfer Type</div>
              <div onClick={()=>{props.setIsDailpayTransferOpen(true)}} className="p-3 rounded-md border flex items-center justify-between hover:bg-blue-50 hover:text-white">
            <div className="">
              <div className="text-xs  text-gray-700">Dailpay</div>
            </div>
            <div className="bg-blue-50 p-2 rounded-full flex items-center justify-center">
              <AiOutlineArrowRight className=" text-blue-500" />
            </div>
            <div className="">
              <div className="text-xs  text-gray-700">Dailpay</div>
            </div>
          </div>

          <div onClick={()=>{props.setIsBankTransferOpen(true)}} className="p-3 rounded-md border flex items-center justify-between hover:bg-blue-50 hover:text-white">
            <div className="">
              <div className="text-xs  text-gray-700">Dailpay</div>
            </div>
            <div className="bg-blue-50 p-2 rounded-full flex items-center justify-center">
              <AiOutlineArrowRight className=" text-blue-500" />
            </div>
            <div className="">
              <div className="text-xs  text-gray-700">Bank</div>
            </div>
          </div>

            </div>
          </div>
        )
      );
}

export default TransferType