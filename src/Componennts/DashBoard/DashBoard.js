import React, { useState } from 'react';
import AdService from '../AddService/AdService';
import Admin from './Admin';
import ManageAllClient from './ManageAllClient';
import ManageService from './ManageService';
import './dash.css'
const DashBoard = () => {
    const [toggle, setToggle] = useState(<Admin></Admin>);
    const addService = () => {
        setToggle(<AdService></AdService>)
    }
    const allServices = () => {
        setToggle(<ManageService></ManageService>)
    }
    const manageAllClientService = () => {
        setToggle(<ManageAllClient></ManageAllClient>)
    }
    return (
        <div className="">
            <div className="row ">
                <div className="col-md-3 col-sm-12 cols-12 left-dash">
                    {/* <h1>this is dash</h1> */}
                    <div className="">
                        <button className="btn btn-warning mt-4 " onClick={addService}> Add Service</button> <br />
                        <button className="btn btn-warning mt-4 " onClick={allServices}>All Services</button> <br />
                        <button className="btn btn-warning mt-4 " onClick={manageAllClientService}>Manage All Client Service</button> <br />
                    </div>
                </div>
                <div className="col-md-9 col-sm-12  admin-img">
                    {/* <h1>this is dash board</h1> */}
                    {toggle}

                </div>
            </div>

        </div>
    );
};

export default DashBoard;