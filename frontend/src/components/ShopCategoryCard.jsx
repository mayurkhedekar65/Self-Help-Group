import React from "react";



const ShopCategoryCard=({logo,CategoryType})=>{
    return(
        <>
        <div className="bg-white rounded-lg text-center w-45 py-17 shadow-2xl">
            <div><img src={logo} alt="" /></div>
            <div>{CategoryType}</div>
        </div>
        </>
    )
}

export default ShopCategoryCard;