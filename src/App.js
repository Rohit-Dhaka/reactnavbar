import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import { CountContext } from "./context/context";








function App() {  
  const [count ,setCount] = useState(0)

  return (
    <>  
    
    <CountContext.Provider value={count}>

    <button onClick={()=>setCount(count + 1)}> Click me</button>
    <Navbar/>

    </CountContext.Provider>
           

      
    </>
  );
}

export default App;
