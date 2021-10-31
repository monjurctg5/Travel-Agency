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
        <div className=" ">
            <div className="row ">
                <div className="col-md-3 col-sm-12 cols-12 pt-5 left-dash">
                    {/* <h1>this is dash</h1> */}
                   
                    <div>
                    <h1  className=" text-white">
                    <i class="fas fa-plane"></i>
                    </h1>
                       <div className="mangeData">
                       <p className=" mt-4  cursor-pointer" onClick={addService}> <i class="fas fa-plus mx-1"></i>  Add Service</p> <br />
                        <p className="cursor-pointer mt-4 " onClick={allServices}><i class="fas fa-border-all mx-1"></i>    All Services</p> <br />
                        <p className=" mt-4 cursor-pointer " onClick={manageAllClientService}> <i class="fas fa-tools mx-1"></i>   Manage All Client Service</p> <br />
                       </div>
                    </div>
                </div>
                <div className="col-md-9 col-sm-12 dash  admin-img">
                    {/* <h1>this is dash board</h1> */}
                    {toggle}

                </div>
            </div>

        </div>
    );
};

export default DashBoard;