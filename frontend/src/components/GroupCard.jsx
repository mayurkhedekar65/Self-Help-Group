import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faUser,faBox} from "@fortawesome/free-solid-svg-icons";


const GroupCard = ({ GroupName, GroupInfo,Location,TotalProducts,TotalGroupMembers,Logo}) => {
  return (
    <>
      <div className="bg-[#333333] rounded-lg text-center w-75 pb-5 shadow-2xl text-[#F5C469]">
        <div className="">
          <img
            className="rounded-t-lg"
            src={Logo}
            alt="not available"
          />
        </div>
        <div className="text-center">
          <h3 className="mt-2 font-bold text-lg">{GroupName}</h3>
          <p className="mt-2 px-3  text-[#dddddd]">{GroupInfo}</p>
          <p className="mt-2 flex justify-center items-center"><FontAwesomeIcon className="mr-1 text-[#dddddd]" icon={faLocationDot}/><p>{Location}</p></p>
          <div className="flex justify-center items-center mt-2 space-x-5">
            <div className="flex justify-center items-center"><FontAwesomeIcon className="mr-1 text-[#dddddd]" icon={faBox}/><p>{TotalProducts}</p></div>
            <div className="flex justify-center items-center"><FontAwesomeIcon className="mr-1 text-[#dddddd]" icon={faUser}/><p>{TotalGroupMembers}</p></div>
          </div>
        </div>
        <div className="mt-4">
          <button className="capitalize bg-[#dddddd] py-3 px-19 rounded-lg text-[#333333] font-bold">
            view group
          </button>
        </div>
      </div>
    </>
  );
};
export default GroupCard;
