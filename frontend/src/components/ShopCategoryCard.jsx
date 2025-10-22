import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ShopCategoryCard=({Logo,CategoryType})=>{
    return(
        <>
        <div className="bg-[#333333] rounded-lg text-center w-45 py-12 shadow-2xl">
            <div><FontAwesomeIcon className="text-3xl text-[#F5C469]" icon={Logo} /></div>
            <div className="mt-4 text-[#dddddd]">{CategoryType}</div>
        </div>
        </>
    )
}

export default ShopCategoryCard;