import React from "react";
export function AddAppointment(){
    return(
        <div className="container mt-3">
            <div className="row col-xl-10 mt-3">
                <div className="row mt-4 mb-3">
                    <div className="col-xl-5">
                        <input className="form-control" placeholder="Full Name"/>
                    </div>
                    <div className="col-xl-5">
                        <input className="form-control" placeholder="Doctor"/>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-xl-5">
                      <input className="form-control" placeholder="Diagnosis"/>
                    </div>
                    <div className="col-xl-5">
                      <input className="form-control" placeholder="Location"/>
                    </div>
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="col-xl-4">
                        <button className="btn btn-success">New Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}