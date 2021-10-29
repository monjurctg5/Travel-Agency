
import React, { useState } from 'react';
// import useFirebase from '../../hooks/useFirebase';
import './addService.css'
import { useForm } from "react-hook-form";
const AdService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/services`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert("service added successfully")
                reset()
            }
        })
    }
    return (
        <div className="addEvent-container">
            <h3 className="mt-5 fw-bold  text-success">Add  Event</h3>
            <div className="Event-container">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input required {...register("ServiceName")} placeholder=" Service Name" />
                    <input required {...register("sortTitle")} placeholder="sort title" />
                    <textarea required {...register("description")} placeholder="Descriptio" />
                    <input  {...register("img")} placeholder=" event image url" /> <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};


export default AdService;