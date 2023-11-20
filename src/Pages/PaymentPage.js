import React, { useEffect, useState } from "react";
import {
  BsArrow90DegRight,
  BsArrowBarLeft,
  BsArrowLeft,
  BsArrowReturnRight,
  BsBoxArrowInDownRight,
  BsBoxArrowInUpLeft,
  BsBoxArrowInUpRight,
  BsBoxArrowUpRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronRight,
  BsCurrencyExchange,
  BsEye,
  BsEyeSlash,
  BsLightbulbFill,
  BsPen,
  BsPenFill,
  BsPlus,
  BsPlusLg,
  BsSearch,
  BsTvFill,
} from "react-icons/bs";
import {
  FaBoxes,
  FaExchangeAlt,
  FaExternalLinkAlt,
  FaFootballBall,
  FaMobileAlt,
  FaMoneyCheck,
  FaPen,
  FaTv,
} from "react-icons/fa";
import AccountSwitch from "../Components/AccountSwitch";
import AddMoney from "../Components/AddMoney";
import CardPayment from "../Components/CardPayment";
import TransferType from "../Components/TransferType";
import DailpayTransfer from "../Components/DailpayTransfer";
import BankTransfer from "../Components/BankTransfer";
import BuyAirtime from "../Components/BuyAirtime";
import BuyData from "../Components/BuyData";
import BuyElectricity from "../Components/BuyElectricity";
import BuyExamPin from "../Components/BuyExamPin";
import BuyBetting from "../Components/BuyBetting";
import BuyCable from "../Components/BuyCable";
import { useSelector } from "react-redux";

export default function PaymentPage() {
  const [hideBalance, setHideBalance] = useState(false);
  const [isSwitchAccountOpen, setIsSwitchAccountOpen] = useState(false);
  const [isMethodOpen, setIsMethodOpen] = useState(false);
  const [isCardDepositOpen, setIsCardDepositOpen] = useState(false);
  const [isTransferTypeOpen, setIsTransferTypeOpen] = useState(false);
  const [isDailpayTransferOpen, setIsDailpayTransferOpen] = useState(false);
  const [isBankTransferOpen, setIsBankTransferOpen] = useState(false);
  const [isAirtimeOpen, setIsAirtimeOpen] = useState(false);
  const [isDataOpen, setIsDataOpen] = useState(false);
  const [isExamPinOpen, setIsExamPinOpen] = useState(false);
  const [isElectricityOpen, setIsElectricityOpen] = useState(false);
  const [isBettingOpen, setIsBettingOpen] = useState(false);
  const [isCableOpen, setIsCableOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [active, setActive] = useState(user.accounts[0]);
  useEffect(() => {
    user.accounts.find((acc)=>{
      if(active.id==acc.id){
        setActive(acc)
      }
    })
  }, [user,active.id])
  
  return (
    <div className="mx-1 md:mx-4">
      <AccountSwitch
        isSwitchAccountOpen={isSwitchAccountOpen}
        setIsSwitchAccountOpen={setIsSwitchAccountOpen}
        activeAccount={active}
        setActiveAccount={setActive}
      />
      <AddMoney
        isMethodOpen={isMethodOpen}
        setIsMethodOpen={setIsMethodOpen}
        setIsCardDepositOpen={setIsCardDepositOpen}
      />
      <CardPayment
        isCardDepositOpen={isCardDepositOpen}
        setIsCardDepositOpen={setIsCardDepositOpen}
        activeAccount={active}

      />
      <TransferType
        isTransferTypeOpen={isTransferTypeOpen}
        setIsTransferTypeOpen={setIsTransferTypeOpen}
        setIsBankTransferOpen={setIsBankTransferOpen}
        setIsDailpayTransferOpen={setIsDailpayTransferOpen}
      />
      <DailpayTransfer
        isDailpayTransferOpen={isDailpayTransferOpen}
        setIsDailpayTransferOpen={setIsDailpayTransferOpen}
        activeAccount={active}
      />
      <BankTransfer
        isBankTransferOpen={isBankTransferOpen}
        setIsBankTransferOpen={setIsBankTransferOpen}
        activeAccount={active}
      />
      <BuyAirtime
        isAirtimeOpen={isAirtimeOpen}
        setIsAirtimeOpen={setIsAirtimeOpen}
        activeAccount={active}
      />
      <BuyData isDataOpen={isDataOpen} setIsDataOpen={setIsDataOpen} activeAccount={active} />
      <BuyElectricity
        isElectricityOpen={isElectricityOpen}
        setIsElectricityOpen={setIsElectricityOpen}
        activeAccount={active}
      />
      <BuyExamPin
        isExamPinOpen={isExamPinOpen}
        setIsExamPinOpen={setIsExamPinOpen}
        activeAccount={active}
      />
      <BuyBetting
        isBettingOpen={isBettingOpen}
        setIsBettingOpen={setIsBettingOpen}
        activeAccount ={active}
      />
      <BuyCable isCableOpen={isCableOpen} setIsCableOpen={setIsCableOpen} activeAccount={active}  />

      <h4 className="text-gray-900">Payments</h4>

      <div className="w-full md:w-[350px] h-[160px]  bg-blue-500 gap-1 rounded-md flex p-4 flex-col my-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p className="text-gray-100 text-[13px]">Total Balance</p>
            {!hideBalance ? (
              <BsEye
                onClick={() => setHideBalance(!hideBalance)}
                className="text-gray-100"
              />
            ) : (
              <BsEyeSlash
                onClick={() => setHideBalance(!hideBalance)}
                className="text-gray-100"
              />
            )}
          </div>

          <div className="flex gap-1">
            <p
              onClick={() => setIsSwitchAccountOpen(!isSwitchAccountOpen)}
              className="text-gray-100 text-[13px]"
            >
              Switch Account{" "}
              <span className="text-[8px] text-white">({active.name})</span>
            </p>
            <BsChevronRight size={18} className="text-gray-100" />
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-100">
            {" "}
            {hideBalance ? "XXX.XX" : `$${active.balance}.00`}
          </p>
        </div>

        <div className="flex justify-around">
          <div className="flex items-center justify-center flex-col gap-1">
            <div
              onClick={() => setIsMethodOpen(!isMethodOpen)}
              className="w-8 h-8 rounded-full bg-white flex justify-center items-center"
            >
              <BsPlus size={18} className="text-blue-500 font-bold" />
            </div>
            <div className="text-[13px] text-white">Add Money</div>
          </div>

          <div className="flex items-center justify-center flex-col gap-1">
            <div
              onClick={() => {
                setIsTransferTypeOpen(!isTransferTypeOpen);
              }}
              className="w-8 h-8 rounded-full bg-white flex justify-center items-center"
            >
              <FaMoneyCheck size={18} className="text-blue-500 font-bold" />
            </div>
            <div className="text-[13px] text-white">Transfer</div>
          </div>

          <div className="flex items-center justify-center flex-col gap-1">
            <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
              <BsBoxArrowUpRight
                size={18}
                className="text-blue-500 font-bold"
              />
            </div>
            <div className="text-[13px] text-white">Withdraw</div>
          </div>
        </div>
      </div>

      <div className="my-2">
        <div className="text-lg ">Bills</div>

        <div className="flex gap-4 flex-wrap">
          <div
            onClick={() => {
              setIsAirtimeOpen(true);
            }}
            className="white border p-2 w-[100px] md:w-[180px] gap-2 rounded-lg  items-center justify-center flex flex-col"
          >
            <div className="p-2 md:p-4 rounded-full bg-blue-50 text-blue-500">
              <FaMobileAlt size={18} />
            </div>
            <p className="text-[14px] text-gray-900"> Airtime</p>
          </div>

          <div
            onClick={() => {
              setIsDataOpen(true);
            }}
            className="white border p-2 w-[100px] md:w-[180px] gap-2 rounded-lg  items-center justify-center flex flex-col"
          >
            <div className="p-2 md:p-4 rounded-full bg-blue-50 text-blue-500">
              <FaExchangeAlt size={18} />
            </div>
            <p className="text-[14px] text-gray-900">Data</p>
          </div>
          <div
            onClick={() => {
              setIsElectricityOpen(true);
            }}
            className="white border p-2 w-[100px] md:w-[180px] gap-2 rounded-lg  items-center justify-center flex flex-col"
          >
            <div className="p-2 md:p-4 rounded-full bg-blue-50 text-blue-500">
              <BsLightbulbFill size={18} />
            </div>
            <p className="text-[14px] text-gray-900">Electricity</p>
          </div>

          <div
            onClick={() => {
              setIsBettingOpen(true);
            }}
            className="white border p-2 w-[100px] md:w-[180px] gap-2 rounded-lg  items-center justify-center flex flex-col"
          >
            <div className="p-2 md:p-4 rounded-full bg-blue-50 text-blue-500">
              <FaFootballBall size={18} />
            </div>
            <p className="text-[14px] text-gray-900">Betting</p>
          </div>

          <div
            onClick={() => {
              setIsCableOpen(true);
            }}
            className="white border p-2 w-[100px] md:w-[180px] gap-2 rounded-lg  items-center justify-center flex flex-col"
          >
            <div className="p-2 md:p-4 rounded-full bg-blue-50 text-blue-500">
              <FaTv size={18} />
            </div>
            <p className="text-[14px] text-gray-900">Cable TV</p>
          </div>

          <div
            onClick={() => {
              setIsExamPinOpen(true);
            }}
            className="white border p-2 w-[100px] md:w-[180px] gap-2 rounded-lg  items-center justify-center flex flex-col"
          >
            <div className="p-2 md:p-4 rounded-full bg-blue-50 text-blue-500">
              <FaPen size={18} />
            </div>
            <p className="text-[14px] text-gray-900">Exam PIN</p>
          </div>

          <div className="white border p-2 w-[100px] md:w-[180px] gap-2 rounded-lg  items-center justify-center flex flex-col">
            <div className="p-2 md:p-4 rounded-full bg-blue-50 text-blue-500">
              <BsArrowReturnRight size={18} />
            </div>
            <p className="text-[14px] text-gray-900">Others</p>
          </div>
        </div>
      </div>
    </div>
  );
}
