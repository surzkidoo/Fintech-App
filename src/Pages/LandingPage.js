import React from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsCardImage,
  BsCreditCard,
  BsCreditCard2Front,
  BsListTask,
  BsSpeedometer,
  BsSpeedometer2,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import {
  FaApplePay,
  FaCcMastercard,
  FaCcVisa,
  FaGooglePay,
  FaPaypal,
} from "react-icons/fa";
import { useSelector } from "react-redux";

export default function LandingPage() {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="bg-blue-500 px-16">
        <header className="flex justify-between  py-4 items-center">
          <div>LOGO</div>

          <div>
            <ul className="flex gap-10">
              <li className="text-[14px] text-white hover:text-gray-900">
                Product
              </li>
              <li className="text-[14px] text-white hover:text-gray-900">
                Services
              </li>
              <li className="text-[14px] text-white hover:text-gray-900">
                Contact
              </li>
              <li className="text-[14px] text-white hover:text-gray-900">
                FAQs
              </li>
            </ul>
          </div>

          <div className="flex gap-3">
           
            {isLogin ? (
              <button className="bg-blue-400 text-white p-3 rounded-md text-[13px]">
                Goto Dashboard
              </button>
            ) : (
              <>
              <button className="bg-gray-100 text-gray-900 p-3 rounded-md text-[13px]">
              Signin
            </button>
              <button className="bg-blue-400 text-white p-3 rounded-md text-[13px]">
                Create free account
              </button>
            </>

            )}
          </div>
        </header>

        <div className='h-40 w-40  bg-white rounded-full opacity-30' style={{position:'absolute',top:-30,left:-30,}}>

        </div>

        <div className="flex  h-[500px] items-center justify-between ">

          <div className="w-[500px] flex flex-col gap-4 ">
            <h2 className="text-4xl text-white">
              All-In-One Finance platform: Empowering your financial Journey
            </h2>

            <p className="text-white text-[13px]">
              Seamlessly enjoy dailpay by sending funds to your friends and
              bussiness partner through mobile, pay bill and also use fintech
              Apps
            </p>

            <div className="flex gap-2">
              <button className="bg-blue-400 text-white p-3 w-[150px] rounded-md text-[13px]">
                Get Started
              </button>
              <button className="text-gray-900   p-3 w-[150px] rounded-md text-[13px] flex gap-2 items-center">
                Learn More <BsArrowRight size={18} />
              </button>
            </div>
          </div>

          <div>
            <img src="../hero.jpg" alt="" className="h-[400px] w-[500px] rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-16 mt-12">
        <h4 className="text-md uppercase">Partners</h4>
        <div className="flex justify-evenly justify-center  p-2">
          <div className="text-gray-700 items-center flex-col justify-center flex gap-1">
            <FaGooglePay size={30} />
            <p className="text-xs text-center">Google Pay</p>
          </div>

          <div className="text-gray-700 items-center flex-col justify-center flex gap-1">
            <FaCcVisa size={30} />
            <p className="text-xs text-center">Visa</p>
          </div>

          <div className="text-gray-700 items-center flex-col justify-center flex gap-1">
            <FaPaypal size={30} />
            <p className="text-xs text-center">PayPal</p>
          </div>

          <div className="text-gray-700 items-center flex-col justify-center flex gap-1">
            <FaCcMastercard size={30} />
            <p className="text-xs text-center">MasterCard</p>
          </div>

          <div className="text-gray-700 items-center flex-col justify-center flex gap-1">
            <FaApplePay size={30} />
            <p className="text-xs text-center">ApplePay</p>
          </div>
        </div>
      </div>



      <div className="bg-gray-100 p-14 mt-14 mx-16 flex justify-around relative">
      <div className='h-60 w-60  bg-blue-500 rounded-full opacity-10' style={{position:'absolute',left:-210,}}></div>

        <div className="flex  gap-4 w-[510px]">
                <div>
                    <BsCreditCard className="text-blue-500 mt-0" size={30}/>

                </div>
          <div className="m-0">
            <h4 className="text-md font-semibold">The fastest way of money transfering to you receiver</h4>
            <p className="text-gray-500 text-[14px]">We have the fastest money transfer in the world we use mobile number as account number and you could open as much as you can </p>
          </div>

        </div>

        <div className="flex gap-4 w-[510px]">
          <div>
          <BsListTask className="text-blue-500" size={30}/>
          </div>
          <div>
            <h4 className="text-md font-semibold">You can use your money to pay bills and also manage your spendings</h4>
            <p className="text-gray-500 text-[14px]">Well you can use your money to pay bills such as electricity bill, Subscribe to cable, buy data and artime, and much more..</p>
          </div>

        </div>

      </div>

      <div className="px-16 mt-12  flex justify-between mb-40 gap-4 w-full">
        <div className="w-full">
          <h4 className="text-md uppercase">Features</h4>
          <div className="flex justify-around items-center w-full mt-4">
            <div className="w-1/3">
              <h4 className="captalize text-md font-semibold">Secured Data</h4>
              <p className="text-[13px]">
                we always make sure our system is safe from hacking and we
                backup our data every 4hours
              </p>
            </div>

            <div>
              <img src="../hero.jpg" className="w-[350px] h-[400px]" alt="" />
            </div>
          </div>

          <div className="flex justify-around items-center w-full mt-4">
            <div>
              <img src="../hero.jpg" className="w-[350px] h-[400px]" alt="" />
            </div>

            <div className="w-1/3">
              <h4 className="captalize text-md font-semibold">Fast Transaction</h4>
              <p className="text-[13px]">
                We are more optimum,pay with dailpay to avoid network issue on
                other bank
              </p>
            </div>
          </div>

          <div className="flex justify-around items-center w-full mt-4">
            <div className="w-1/3">
              <h4 className="captalize text-md font-semibold">Reliable Process</h4>
              <p className="text-[13px]">
                we always make sure our system is safe from hacking and we
                backup our data every 4hours
              </p>
            </div>

            <div>
              <img src="../hero.jpg" className="w-[350px] h-[400px]" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-16 flex flex-col items-center gap-4 mt-12">
        <h4 className="text-md uppercase">Testimonial</h4>

        <div className="flex flex-col gap-2">
          <h4 className="text-xl text-center">what they say about us</h4>
          <p className="text-[13px] text-gray-400 w-[500px] text-center">
            Reads what our returning customers says about dailpay and also share
            their experience using the App
          </p>
        </div>

        <div className="flex gap-4">
 <div className="border bg-blue-50 p-3 rounded-md text-white w-[350px] h-[400] flex flex-col gap-2">
          <div className="self-center flex flex-col">
            <img
              src="../Profile.png"
              className="rounded-full h-20 w-30 block self-center"
              alt=""
            />
            <p className="text-sm font-semibold text-gray-900 self-center">
              Abubakr Isah.
            </p>
            <p className="text-gray-900 text-[13px] self-center">Trader</p>
          </div>

          <p className="text-gray-900 text-[13px]">
            We love the product, We use it in my day to day activities, will
            recommend it for you too.
          </p>
          <div className="flex gap-1">
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStar className="text-gray-500 text-xs" />
          </div>
        </div>

         <div className="border bg-blue-50 p-3 rounded-md text-white w-[350px] h-[400] flex flex-col gap-2">
          <div className="self-center flex flex-col">
            <img
              src="../Profile.png"
              className="rounded-full h-20 w-30 block self-center"
              alt=""
            />
            <p className="text-sm font-semibold text-gray-900 self-center">
              Abubakr Isah.
            </p>
            <p className="text-gray-900 text-[13px] self-center">Trader</p>
          </div>

          <p className="text-gray-900 text-[13px]">
            We love the product, We use it in my day to day activities, will
            recommend it for you too.
          </p>
          <div className="flex gap-1">
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStar className="text-gray-500 text-xs" />
          </div>
        </div>

         <div className="border bg-blue-50 p-3 rounded-md text-white w-[350px] h-[400] flex flex-col gap-2">
          <div className="self-center flex flex-col">
            <img
              src="../Profile.png"
              className="rounded-full h-20 w-30 block self-center"
              alt=""
            />
            <p className="text-sm font-semibold text-gray-900 self-center">
              Abubakr Isah.
            </p>
            <p className="text-gray-900 text-[13px] self-center">Trader</p>
          </div>

          <p className="text-gray-900 text-[13px]">
            We love the product, We use it in my day to day activities, will
            recommend it for you too.
          </p>
          <div className="flex gap-1">
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStarFill className="text-yellow-500 text-xs" />
            <BsStar className="text-gray-500 text-xs" />
          </div>
        </div>


        </div>
       

        <div className="flex gap-1">
          <div className="w-4 rounded-sm h-[3px] bg-gray-300"></div>
          <div className="w-4 rounded-sm h-[3px] bg-gray-300"></div>

          <div className="w-4 rounded-sm h-[3px] bg-blue-500"></div>
          <div className="w-4 rounded-sm h-[3px] bg-gray-300"></div>
        </div>
      </div>

      <div className="mx-16 mt-20 h-[400px] bg-blue-500 rounded p-5 justify-around flex items-center relative">
        <div className="gap-2 flex flex-col w-[350px]  ">
          <h4 className="text-white text-xl capitalize">
            Get to see more Features
          </h4>
          <p className="text-[13px] text-white">
            lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem
            lorem lorem lorem lorem
          </p>
          <button className="bg-blue-400 text-white p-3 w-[150px] rounded-md text-[13px]">
            Learn More
          </button>
        </div>
        <img src="hero.jpg" className="h-full  right-0 -mt-20 " alt="" />
      </div>

      <div className="flex justify-center mt-12">
        <div className="w-[600px] p-4 rounded-md border">
          <p className="captalize text-lg text-900 text-center">
            Get Familiar with our product by getting updates
          </p>
          <p className="text-[13px] text-center my-2">
            Get updates about the product and newletter
          </p>

          <div className="border h-[50px] flex items-center bg-white gap-1">
            <input
              className="border-none outline-none placeholder:text-[13px] text-xs placeholder:text-gray-500 pl-2 w-full"
              placeholder="Enter your email"
              type="text"
            />

            <div className="text-[13px] uppercase bg-blue-500 text-white h-full flex items-center p-2">
              Subscribe
            </div>
          </div>
        </div>
      </div>

      <footer className="px-16 bg-gray-900 py-7 flex flex-col gap-7 mt-12">
        <div className="flex justify-between">
          <div className="text-white">LOGO</div>

          <div className="flex flex-col gap-3">
            <div className="text-white">More</div>
            <p className="text-gray-200 text-[13px]">Policies</p>
            <p className="text-gray-200 text-[13px]">Privacy</p>
            <p className="text-gray-200 text-[13px]">Redfund</p>
            <p className="text-gray-200 text-[13px]">Apps</p>
            <p className="text-gray-200 text-[13px]">Terms and condition</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-white">More</div>
            <p className="text-gray-200 text-[13px]">Policies</p>
            <p className="text-gray-200 text-[13px]">Privacy</p>
            <p className="text-gray-200 text-[13px]">Redfund</p>
            <p className="text-gray-200 text-[13px]">Apps</p>
            <p className="text-gray-200 text-[13px]">Terms and condition</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-white">More</div>
            <p className="text-gray-200 text-[13px]">Policies</p>
            <p className="text-gray-200 text-[13px]">Privacy</p>
            <p className="text-gray-200 text-[13px]">Redfund</p>
            <p className="text-gray-200 text-[13px]">Apps</p>
            <p className="text-gray-200 text-[13px]">Terms and condition</p>
          </div>

        

          <div className="flex flex-col gap-3">
            <div className="text-white">More</div>
            <p className="text-gray-200 text-[13px]">Policies</p>
            <p className="text-gray-200 text-[13px]">Privacy</p>
            <p className="text-gray-200 text-[13px]">Redfund</p>
            <p className="text-gray-200 text-[13px]">Apps</p>
            <p className="text-gray-200 text-[13px]">Terms and condition</p>
          </div>
        </div>

        <div className="mt-3 border-t pt-3 text-white pb-1 text-center text-[13px]">
          Copyright
        </div>
      </footer>
    </div>
  );
}
