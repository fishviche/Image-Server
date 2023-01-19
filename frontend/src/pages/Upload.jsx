import React from 'react'

import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import Header from '../components/Header'
import ListFiles from "../components/ListFiles"

const Upload = () => {

  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState([]);

  const handleChange = (file) => {
    setFile(file);
    setFileList([...file])
  };

  return (
    <>
      <Header/>
      <div className='container mx-auto flex-col items-center justify-center'>
        <div>
          <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={true} />
        </div>
        <div>
          {(fileList.length > 0) ? <ListFiles file={fileList}></ListFiles> : <></>}
        </div>
      </div>
    </>
  )
}

export default Upload