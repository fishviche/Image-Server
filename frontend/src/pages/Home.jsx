import React from 'react'

import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../components/Header'
import Card from '../components/Card'

const Home = () => {

  const [response, setResponse] = useState([])

  const toastSuccessDelete = () => {
      toast.success('Deleted successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }
  
  const toastErrorDelete = () => {
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
  }

  useEffect(() => {
    fetch('http://localhost:3003/get-images')
    .then(response => response.json())
    .then(data => setResponse(data));
  }, [])


  return (
    <>
        <Header/>
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
        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {
            response.map((el,index) => (
            <Card 
              key={el._id} 
              file={el} 
              toastSuccessDelete={toastSuccessDelete}
              toastErrorDelete={toastErrorDelete}
            >
            </Card>))
          }
        </div>
    </>
  )
}

export default Home