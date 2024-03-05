import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
export function Header(){
    return(
        <div className="row align-items-center">
            <div className="col-xl-4">
                <img src={logo} alt="image not supported" style={{
                    height:"50px"
                }}/>
            </div>
            <div className="col-xl-6">
                <input className="form-control" placeholder="Search"/>
            </div>
            <div className="col-xl-2 d-flex align-items-center mt-2">
                <div className="row">
                    <div className="col-xl-1 ">
                       <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className="col-xl-2">
                      <p>username</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}