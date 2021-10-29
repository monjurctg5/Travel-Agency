import React, { useState } from 'react';
import AdService from '../AddService/AdService';
const DashBoard = () => {
    const [toggle, setToggle] = useState(null);
    const addService = () => {
        setToggle(<AdService></AdService>)
    }
    const allClient = () => {
        // setToggle(<AddEvent></AddEvent>)
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <h1>this is dash</h1>
                    <div className = ""> 
                    <button className="btn btn-warning mt-4 "  onClick={addService}> Add Service</button> <br />
                    <button className="btn btn-warning mt-4 " onClick={allClient}>All Client</button> <br />
                    </div>
                </div>
                <div className="col-md-8 col-sm-12">
                    <h1>this is dash board</h1>
                    {toggle}

                </div>
            </div>

        </div>
    );
};

export default DashBoard;