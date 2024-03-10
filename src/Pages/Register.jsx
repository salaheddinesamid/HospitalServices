import React, { useState } from "react";
import logo from "../logo.png";
import locations from "../ma.json";
import Axios from "axios"
const locationData = locations
export function Register(){
    const axios = Axios
    let[fullName,setFullName] = useState("")
    let[nationalId,setNationalId] = useState("")
    let[location,setLocation] = useState("")
    let[age,setAge] = useState()
    let[email,setEmail] = useState("")
    let user = {
        fullName,
        nationalId,
        location,
        age,
        email
    }
    return(
        <div className="container">
            <div className="row  mt-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-2 ">
                        <img src={logo} alt="Image not supported" style={{
                            height:"60px"
                        }}/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="col-xl-4">
                            <input className="form-control" value={fullName} onChange={(e)=>{
                                setFullName(e.target.value)
                            }} placeholder="Full name"/>
                        </div>
                        <div className="col-xl-4">
                               <input className="form-control" value={email} onChange={(e)=>{
                                setEmail(e.target.value)
                               }} placeholder="Email"/>
                        </div>
                    </div>
                    <div className="row mt-2 mb-3 d-flex justify-content-center">
                       <div className="col-xl-4">
                         <input className="form-control" value={nationalId} onChange={(e)=>{
                            setNationalId(e.target.value)
                         }} placeholder="National ID"/>
                    </div>
                       <div className="col-xl-4">
                       <select className="form-select" aria-label="Select the Symptom" onChange={(e)=>{
                           setLocation(e.target.value)
                      }}>
                    
                        {locationData.map((element)=>(
                
                              <option value={element.city}
                              >{element.city}</option>
                               
                        
                        ))}
                    </select>
                </div>
                    </div>
                    <div className="row mt-2 d-flex justify-content-center">
                        <div className="col-xl-4">
                            <input placeholder="Age" value={age} onChange={(e)=>{
                                setAge(e.target.value)
                            }} className="form-control"/>
                        </div>
                        <div className="col-xl-4">
                            <button className="btn btn-success" onClick={()=>{
                                    let req = axios.post("http://localhost:8080/user/add",user)
                                setFullName("")
                                setEmail("")
                                setAge(null)
                                setNationalId("")
                                setLocation("")
                            }}>Create account</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}