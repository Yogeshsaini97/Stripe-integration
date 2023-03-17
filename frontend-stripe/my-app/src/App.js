import logo from "./logo.svg";
import "./App.css";
import {useState} from "react"







function App() {

  const [stripePromise,setStripePromise]=useState(null)
  const [clientSecret,setClientSecret]=useState(null)


const handleToken=async (token,addesses)=>
{
  const response = await fetch(`http://localhost:4000/create-payment-intent`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit

    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(), // body data type must match "Content-Type" header
  });
  const data = await response.json();
  console.log(data);


 
}


  return (
    <div className="App">
    <button onClick={()=>
    {
        handleToken();
    }}>pay</button>

 
   
  
     
    </div>
  );
}

export default App;
