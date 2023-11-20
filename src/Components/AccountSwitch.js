import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function AccountSwitch(props) {
  const { accounts } = useSelector((state) => state.auth.user);
  const handleClose = () => {
    props.setIsSwitchAccountOpen(!props.isSwitchAccountOpen);
  };
  return (
    props.isSwitchAccountOpen && (
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

          <div className="text-gray-900 text-[16px] font-bold">
            Switch Account
          </div>

          {accounts.map((account) => {
            return (
              <div
                onClick={() => {props.setActiveAccount(account); props.setIsSwitchAccountOpen(false)}}
                className="p-3 rounded-md border flex items-center justify-between hover:bg-blue-50 hover:text-white"
              >
                <div className="">
                  <div className="text-xs font-semibold  text-gray-700">
                    {account.name}
                  </div>
                  <div className="text-[13px]   text-gray-500">
                    ${account.balance}.00
                  </div>
                </div>
                {props.activeAccount.id == account.id && (
                  <div className="bg-blue-100 p-2 rounded-full flex items-center justify-center">
                    <BsCheck2Circle className=" text-blue-700" />
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </div>
    )
  );
}
