import React from "react";
import {
  BsAlignCenter,
  BsGear,
  BsGearFill,
  BsOption,
  BsTrash,
} from "react-icons/bs";
import { useSelector } from "react-redux";

function ActivityPage() {
  const { activity } = useSelector((state) => state.auth.user);

  return (
    <div className="mx-1 md:mx-4">
      <h4 className="text-gray-900">Activity</h4>
      <p className="text-[13px]">
        This section contains all account activities and actions
      </p>
      <div>
        <div className="border p-1 rounded-lg flex flex-col  mt-4">
          <div className="self-end m-2"></div>
          <table className="w-full">
            <tr className="text-center  ">
              <th className="text-[13px] text-gray-500 p-2">ID</th>
              <th className="text-[13px] text-gray-500">Status</th>
              <th className="text-[13px] text-gray-500">Desc</th>
              <th className="text-[13px] text-gray-500">Created</th>
              {/* <th className="text-[13px] text-gray-500">Action</th> */}
            </tr>

            {activity.map((act) => {
              return (
                <tr key={act.Id} className="text-center ">
                  <td className="text-gray-700 text-[13px] p-3">
                    <div className="text-[13px] text-gray-900 font-bold">
                      {act.Id}
                    </div>
                  </td>

                  <td className=" "><p className="text-green-500 text-[13px] bg-green-50  rounded-md"> {act.status} </p></td>

                  <td className="text-gray-700 text-[13px]">
                    {
                      act.desc
                    }
                  </td>

                  <td className="text-gray-900 font-bold text-[13px]">
                   {act.date.toDateString()}
                  </td>

                  {/* <td className="text-gray-900 font-bold text-[13px] ">
                    <div className="flex justify-center relative border">
                      <BsAlignCenter className="text-right" />
                      <div className="absolute bg-white  right-0 rounded-sm">
                        <div className=" flex py-2 px-5  hover:bg-gray-100 gap-2 text-gray-700 font-normal">
                          <BsGear size={18} /> Settings
                        </div>

                        <div className=" flex py-2 px-5  hover:bg-gray-100 gap-2 text-gray-700 font-normal">
                          <BsTrash size={18} /> Delete
                        </div>
                      </div>
                    </div>
                  </td> */}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
