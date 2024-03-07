import React, { useState } from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom"
import symptoms from "../Symptoms.json";
import doctors from "../Doctors.json"
export function AddAppointment(){
    const axios = Axios
    const sympData = symptoms.symptoms;
    const doctorsData = doctors.doctors
    let[patient,setPatient] = useState("");
    let[doctor,setDoctor] = useState("");
    let[location,setLocation] = useState("")
    let[diagnosis,setDiagnosis] = useState("")
    let [symptom,setSymptom] = useState()
    let date = new Date().getHours().toString();
    const navigate = useNavigate()
    let appointment = {patient,doctor,date,diagnosis,symptom};
    return(
        <div className="container mt-3">
            <div className="row col-xl-10 mt-3">
                <div className="row mt-4 mb-3">
                    <div className="col-xl-5">
                        <input className="form-control" placeholder="Full Name" value={patient} onChange={(e)=>{
                            setPatient(e.target.value)
                        }}/>
                    </div>
                    <div className="col-xl-5">
                    <select className="form-select" aria-label="Select the Symptom" onChange={(e)=>{
                           setDoctor(e.target.value)
                      }}>
                    
                        {doctorsData.map((element)=>(
                            
                              <option value={element.name}
                              >{element.name}</option>
                               
                        
                        ))}
                    </select>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-xl-5">
                      <input className="form-control" placeholder="Diagnosis" value={diagnosis} onChange={(e)=>{
                        setDiagnosis(e.target.value)
                      }}/>
                    </div>
                    <div className="col-xl-5">
                      <input className="form-control" placeholder="Location" value={location} onChange={(e)=>{
                        setLocation(e.target.value)
                      }}/>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-xl-5">
                    <select className="form-select" aria-label="Select the Symptom" onChange={(e)=>{
                    setSymptom(e.target.value)
                }}>
                    
                        {sympData.map((element)=>(
                            
                              <option value={element.name}
                              >{element.name}</option>
                               
                        
                        ))}
                    </select>
                    </div>
                
                    <p>{symptom}</p>
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="col-xl-4">
                        <button className="btn btn-danger" onClick={()=>{
                            navigate("/")
                        }}>Back to Dashboard</button>
                    </div>
                    <div className="col-xl-4">
                        <button className="btn btn-success" onClick={()=>{
                            fetch("http://localhost:8080/appointments/add",{
                                method:"POST",
                                headers:{"Content-Type":"application/json"},
                                body:JSON.stringify(appointment)
                            })
                        }}>Request Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}