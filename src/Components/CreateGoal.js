import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2Circle, BsInfoCircle } from "react-icons/bs";
import { addGoal } from "../actions";
import { useDispatch } from "react-redux";


function CreateGoal(props) {
  const initial ={name:'',targetAmount:'',desc:''}
    const regex = {name:{
    message:'Name must be greater than 3',
    regexop:/^[a-zA-Z0-9]{3,}$/,
    error:false
  },targetAmount:{
    message:'Target amount must be a number and greater than 0',
    regexop:/^[1-9]{1,}$/,
    error:false
  }}
  const [createGoalRegex, setcreateGoalRegex] = useState(regex)
  const [createGoal, setCreateGoal] = useState(initial)
  const [error, setError] = useState(false)
  const dispatch = useDispatch();

  const handleChange =(e)=>{
    
      setCreateGoal(prev=> {
        setcreateGoalRegex(prev=>{
          return {...prev,[e.target.name]:{...prev[e.target.name],error:!createGoalRegex[e.target.name].regexop.test(e.target.value) }}
        })
        return {...prev,[e.target.name]:e.target.value}
      })
  }

const handleSubmit=(e)=>{
  e.preventDefault()
 
  if(!createGoalRegex.name.error && createGoal.name && createGoal.targetAmount && !createGoalRegex.targetAmount.error){
    dispatch(addGoal({id:Date.now().toString(),...createGoal}))
  props.setIsAddGoalOpen(false)
  setCreateGoal(initial)
}
else{


  !createGoal.name && setcreateGoalRegex(prev=>{
    return {...prev,name:{...prev.name,error:true }}
  })


  !createGoal.targetAmount && setcreateGoalRegex(prev=>{
    return {...prev,targetAmount:{...prev.targetAmount,error:true }}
  })

  setError(true)
}

}

  const handleClose = () => {
    props.setIsAddGoalOpen(!props.isAddGoalOpen);
  };

  return (
    props.isAddGoalOpen && (
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

          <div className="text-gray-900 text-[16px]">Add Goal</div>
          <div>
            <label className="text-[13px]">Name*</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="Goal name"
                name='name'
                type="text"
                value={createGoal.name}
                onChange={handleChange}

              />
              <div>
             { ( !createGoalRegex.name.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>
            {
           ( createGoalRegex.name.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createGoalRegex.name.message}</p>
          }
          </div>

          <div>
            <label className="text-[13px]">Target Amount*</label>
            <div className="border h-10 flex items-center p-2">
              <input
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="amount planning to reach..."
                name='targetAmount'
                type="text"
                value={createGoal.targetAmount}
                onChange={handleChange}

              />
              <div>
             { ( !createGoalRegex.targetAmount.error && error) &&  <BsCheck2Circle className="text-green-500" />}
              </div>
            </div>
            {
           ( createGoalRegex.targetAmount.error && error) && <p className="text-[13px] text-red-500 flex gap-1 items-center"><BsInfoCircle />{createGoalRegex.targetAmount.message}</p>
          }
          </div>

          <div >
            <label className="text-[13px]">Descripion</label>
            <div className="border h-30 flex items-center p-2">
              <textarea
                className="border-none outline-none placeholder:text-[13px] placeholder:text-gray-500 text-xs  w-full"
                placeholder="add reason for creating the gaol..."
                name="desc"
                type="text"
                value={createGoal.desc}
                onChange={handleChange}
              ></textarea>

              <div>
                {/* <BsCheck2Circle className="text-green-500" /> */}
              </div>
            </div>
          </div>

          <button onClick={handleSubmit} className="text-[13px] text-center uppercase bg-blue-500 text-white p-2 font-semibold h-[40px]">
            Add Goal
          </button>
        </div>
      </div>
    )
  );
}

export default CreateGoal;
