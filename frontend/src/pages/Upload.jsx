import React from "react";

import { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "../components/Header";
import ListFiles from "../components/ListFiles";

const Upload = () => {
  const fileTypes = ["JPG", "PNG", "GIF", "SVG"];
  
  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [data, setData] = useState([]);

  const handleChange = (file) => {
    setFile(file);
    setFileList([...file]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (var i = 0; i < file.length; i++) {
      form.append("myFile", file[i]);
    }

    const options = {
      method: "POST",
    };

    options.body = form;

    fetch("http://localhost:3003/save-image?=", options)
      .then((response) => response.json())
      .then((response) => {
        
        toast.success('Upload successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setFile(null)
        setFileList([])

      })
      .catch((err) => {
        toast.error('An error has occurred!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });

  };


  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div className="container mx-auto mt-10">
        <FileUploader
          classes="mx-auto"
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          multiple={true}
        />
        <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
          <button
            className="mt-5 w-32 border p-2  bg-blue-500 text-white rounded-[4px] hover:bg-blue-400 scale-105 duration-300 "
            type="submit"
          >
            Add
          </button>
        </form>
        <div>
          <ListFiles file={fileList}></ListFiles>
        </div>
      </div>
    </>
  );
};

export default Upload;
