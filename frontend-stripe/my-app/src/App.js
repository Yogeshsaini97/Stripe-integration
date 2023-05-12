import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Payment from './Payment'
import Testing from './Testing'

const App = () => {

  useEffect(()=>
  {
  console.log("a")
  return () => {
    // localStorage.setItem('lastUrl', history.location.pathname);
    console.log("b")
  };
  },[])



  return (
    <BrowserRouter>
    <Routes>
         
      {/* <Route exact path="/test" element={<Testing />}/> */}
      <Route exact path="/" element={<Payment />}/>
      </Routes>
      </BrowserRouter> 
   
  )
}

export default App