import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
import axios from"axios";
function App() {
  const [name,setName]=useState("");
  const [number,setNumber]=useState("");
  const [email,setEmail]=useState("");
  const [response,setResponse]=useState("");
 useEffect(()=>{
  const timer=setTimeout(()=>{
    setResponse("");
  },3000)

  return()=>clearTimeout(timer);
 },[response]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      name:name,
      number:number,
      email:email
    };
   
    axios
    .post("http://localhost:5000/post",data)
    .then((response)=>{
      console.log(response.data);
      setResponse(response.data)
    })
    .catch((error)=>{
      console.log(error);
    });
  };
  return (
    <div className="App">
      <from>
       <p className='response'>{response}</p>
        <label htmlfor="name">Name</label>
        <input type="text"
         value={name}
        onChange={(e)=>{setName(e.target.value);
        }}></input> 
      
         <label htmlfor="number">Number:</label>
        <input type="number"
         value={number}
        onChange={(e)=>{setNumber(e.target.value);
        }}></input> 
      
         <label htmlfor="email">Email</label>
        <input type="email"
         value={email}
        onChange={(e)=>{setEmail(e.target.value);
        }}></input>
         <br/>
        <button type="submit" onClick={handleSubmit}>sumbit</button>
      </from>
      
    </div>
  );
}

export default App;
