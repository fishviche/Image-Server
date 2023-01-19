import React from "react";

import { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";

import Header from "../components/Header";
import ListFiles from "../components/ListFiles";

const Upload = () => {
  const fileTypes = ["JPG", "PNG", "GIF"];
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
    console.log(file);
    for (var i = 0; i < file.length; i++) {
      console.log(file[i]);
      form.append("myFile", file[i]);
    }

    const options = {
      method: "POST",
    };

    options.body = form;

    fetch("http://localhost:3002/save-image?=", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };


  return (
    <>
      <Header />
      <div className="container mx-auto mt-10">
        <FileUploader
          classes="mx-auto"
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          multiple={true}
        />
        <form onSubmit={handleSubmit}>
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
