import React, { useEffect, useState } from 'react'

const Testing = () => {
    const [count,setcount]=useState(0)

    useEffect(()=>
    {
    console.log("c");
    return () => {
      // localStorage.setItem('lastUrl', history.location.pathname);
      console.log("d");
    
    }
    },[])
  return (<>
  {console.log("ji")}
    <div>Testing</div>
    </>)
}

export default Testing