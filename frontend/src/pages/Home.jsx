import React from 'react'

import { useState, useEffect } from "react";

import Header from '../components/Header'
import Card from '../components/Card'

const Home = () => {

  const [response, setResponse] = useState([])

  useEffect(() => {
    fetch('http://localhost:3002/get-images')
    .then(response => response.json())
    .then(data => setResponse(data));
  }, [])


  return (
    <>
        <Header/>
        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {
            response.map((el,index) => (<Card key={el._id} file={el}></Card>))
          }
        </div>
    </>
  )
}

export default Home