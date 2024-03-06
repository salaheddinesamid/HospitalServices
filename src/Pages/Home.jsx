import React from "react";
import { Header } from "../Components/Header";
import { Main } from "../Components/Main";
export function Home(){
    return(
            <div className="container mt-4" style={{
      backgroundColor:"#F0F8FF",
      padding:"10px 40px",
      height:"700px",
      borderRadius:"20px"
    }}>
      <div className='row'>
        <Header/>
        <hr/>
      </div>
      <div className='row'>
        <Main/>
        
      </div>
    </div>
       
    )
}