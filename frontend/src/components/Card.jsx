import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import DropDown from "../components/DropDown";

const Card = ({file, toastErrorDelete, toastSuccessDelete, fetchGetImages}) => {

    const [open,setOpen] = useState(false);

  return (
    <>
      <div className="h-[240px]">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm h-full">
            <div className="h-5/6">
                <img
                className="rounded-t-lg h-full w-full bg-cover bg-no-repeat "
                src={`http://localhost:3003/${file.route.split('public/')[1]}`}
                alt=""
                />
            </div>
          <div className="p-5 flex justify-between items-center  h-1/6">
              <h5 className="w-10/12 text-gray-900 font-semibold text-md tracking-tight truncate ">
                {file.name}
              </h5>
              <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={faEllipsisVertical}/>
                {open && (
                    <DropDown id={file._id} toastErrorDelete={toastErrorDelete} toastSuccessDelete={toastSuccessDelete} fetchGetImages={fetchGetImages}></DropDown>
                )}
              </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
