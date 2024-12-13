import React from "react";

function Card({values,handleClick,index}) {
    const {name,profession,image,friends} =values
  return (
    <>
      <div className="w-60 overflow-hidden rounded-lg">
        <div className="w-full h-32 bg-sky-300 overflow-hidden rounded-lg">
            <img className="w-full shrink-0 object-cover" src={image} alt="" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <h5 className="text-xs">{profession}</h5>
          <button onClick ={()=>handleClick(index)} className={`px-3 mt-3 py-1 ${friends?"bg-green-600":"bg-blue-600"} text-white rounded-md font-semibold`}>
            {friends===true?"Friend":"Add Friend"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
