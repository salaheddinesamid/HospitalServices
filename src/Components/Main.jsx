import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {faUserDoctor} from "@fortawesome/free-solid-svg-icons"
import {faCalendarCheck} from "@fortawesome/free-solid-svg-icons"
import {faBedPulse, faTrash} from "@fortawesome/free-solid-svg-icons"
import Appointments from "../Appointments.json"
import iconFooter from "../logo.png";
import {useNavigate} from "react-router-dom";
import  Axios  from "axios"
export function Main(){
    const axios = Axios
    let[appointmentsData,setAppointmentsData] = useState([])
    useEffect(()=>{
        let req = axios.get("http://localhost:8080/appointments/").then(res=>setAppointmentsData(res.data))
    })
    const navigate = useNavigate();
    let appointments = Appointments.appointments;
    let services = [{
        "name":"Dashboard",
        "icon" :faHeart,
        "router":"/"
    },
    {
        "name" :"Add Doctor",
        "icon":faUserDoctor
    },
    {
        "name":"Add Appointment",
        "icon" :faCalendarCheck,
        "router":"/appointments/add"
    },{
        "name" :"Add Patient",
        "icon" :faBedPulse
    }
]
    return(
        <div className="row mt-4" >
            <div className="col-xl-3">
                {
                    services.map((service)=>(
                        <div className="row mt-4">
                            <div className="col-xl-10 d-inline-flex">
                                <div className="col-xl-1">
                                  <FontAwesomeIcon icon={service.icon}/>
                                </div>
                                <div className="col" style={{
                                    cursor:"pointer"
                                }} onClick={()=>{
                                    navigate(service.router)
                                }}>
                                   <p>{service.name}</p>
                                </div>
                            
                            </div>
                        </div>
                    ))
                }
                <div className="row">
                    <img src={iconFooter} style={{
                        opacity:"0.8",
                        width:"200px",
                        position:"absolute",
                        top:500
                    }}/>
                </div>
            </div>
            <div className="col-xl-9">
                <div className="row align-items-center">
                    <div className="col-xl-9">
                        <h4>Appointment History</h4>
                    </div>
                    <div className="col-xl-3 justify-content-end">
                        <button className="btn btn-primary" onClick={()=>{
                            navigate("appointments/add")
                        }} style={{
                            padding:"5px 10px",
                            fontWeight:"bold"
                        }}>
                            Add Appointment
                        </button>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="container">
                        <div className="col-xl-12 mt-4">
                            <div className="row" style={{
                                color:"gray"
                            }}>
                                <div className="col-xl-3">
                                    <p><b>DATE</b></p>
                                </div>
                                <div className="col-xl-3">
                                    <p><b>DOCTOR</b></p>
                                </div>
                                <div className="col-xl-3">
                                     <p><b>SYMPTOMS</b></p>
                                </div>
                                <div className="col-xl-3">
                                       <p><b>DIAGNOSIS</b></p>
                                </div>
                            </div>
                            <div style={{
                                height:"50px",
                                position:"relative",
                                
                            }}>
                                
                            {appointmentsData && appointmentsData.map((appointment)=>(
                                <div className="row mt-3 mb-3" style={{
                                    backgroundColor:"white",
                                    borderRadius:"10px",
                                    height:"80px",
                                    borderLeft:"5px solid green"
                                }}>
                                    <div className="col-xl-12">
                                        <div className="row align-items-center">
                                            <div className="col-xl-3">
                                                <p>{appointment.date}</p>
                                            </div>
                                            <div className="col-xl-3">
                                                <p>{appointment.doctor}</p>
                                            </div>
                                            <div className="col-xl-3">
                                                <p>{appointment.symptom}</p>
                                            </div>
                                            <div className="col-xl-3">
                                                <p>{appointment.diagnosis}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 d-flex justify-content-end">
                                                <button className="btn btn-danger" style={{
                                                    padding:"5px 20px",
                                                    fontWeight:"bold"
                                                }} onClick={()=>{
                                                    fetch(`http://localhost:8080/appointments/delete/${appointment.id}`,{
                                                       method:"DELETE",
                                                       headers:{"Content-Type":"application/json"},
                                                
                            })
                                                }}><FontAwesomeIcon icon={faTrash}/>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}