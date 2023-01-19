import React from "react";

import { useState, useEffect } from "react";

const DropDown = ({id}) => {


    const handleDelete = async () => {
        const options = {method: 'DELETE'};

        fetch(`http://localhost:3002/delete-image/${id}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    
    return (
    <div className="absolute w-full rounded-b border-t-0 z-10">
      <div>
        <div className="shadow-xl w-64">
          <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
            <div className="flex-auto text-sm w-32">
              <div className="font-bold" onClick={()=> handleDelete()}>Delete</div>
            </div>
          </div>
          <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
            <div className="flex-auto text-sm w-32">
              <div className="font-bold">Copy link</div>
            </div>
          </div>
          <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
            <div className="flex-auto text-sm w-32">
              <div className="font-bold">Download</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
