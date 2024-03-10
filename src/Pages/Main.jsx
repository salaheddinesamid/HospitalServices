import React from "react";
import logo from "../logo.png";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
export function Main(){
    const navigate = useNavigate();
    return(
        <div className="container mt-4">
            <div className="row d-flex -flex justify-content-center mt-4">
                <div className="row d-flex -flex justify-content-center">
                    <div className="col-xl-2 ">
                        <img src={logo} alt="Image not supported" style={{
                            height:"60px"
                        }}/>
                    </div>
                </div>
                <div className="row d-flex -flex justify-content-center mt-4 mb-3">
                    <div className="row d-flex -flex justify-content-center">
                        <div className="col-xl-4 mt-4 mb-3">
                            <input placeholder="National ID" className="form-control"/></div>
                        
                    </div>
                    <div className="row d-flex -flex justify-content-center">
                        <div className="col-xl-4 mt-2 mb-3">
                            <input placeholder="Password" className="form-control"/></div>
                        
                    </div>
                    <div className="row d-flex -flex justify-content-center align-items-center">
                        <div className="col-xl-2 mt-2 mb-3">
                            <button className="btn btn-primary">Log in</button>
                        </div>
                        <div className="col-xl-2 ">
                            <p className="text-primary" style={{
                                cursor:"pointer"
                            }} onClick={()=>{
                                navigate("/register")
                            }}>Create Account?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}