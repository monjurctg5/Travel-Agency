import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';

import './plcaeOrder.css'
const PlaceORder = () => {
    const history = useHistory()
    var today = new Date();

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date
    const { id } = useParams()
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const [service, setSetvice] = useState({})

    useEffect(() => {
        fetch(`https://shielded-badlands-01145.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setSetvice(data)
            })
    }, [])

    const onSubmit = (data) => {
        const newClientData = {
            clientName: user.displayName,
            email: user.email,
            date: dateTime,
            ServiceName: service.ServiceName,
            cost: service.cost,
            adress: data.adress,
            approved: false
        }

        fetch(`https://shielded-badlands-01145.herokuapp.com/orders`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newClientData)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Thsnk You!", "You Booking  a Beautyfull Place!", "success");
                    history.push("/")

                    reset()
                }
            })
    }
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 order-box">
            <div className="col">
                <dib className="row  row-cols-sm-1 row-cols-md-2 justify-content-center align-items-center ">
                    <div className="col mt-5">
                        <div class="card" style={{ width: "30rem" }}>
                            <img src={service.img} height="300px" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{service.ServiceName}</h5>
                                <p class="card-text">{service.description}</p>
                                <h5>{service.cost}$</h5>
                            </div>
                        </div>
                    </div>
                </dib>
            </div>
            <div className="col ">
                <div className="Order-container">
                    <h3 className="pt-5 fw-bold  ">Filup This Form</h3>
                    <div className="Event-container">
                        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                            <input required {...register("clientName")}
                                value={user.displayName} disabled
                                placeholder=" Service Name" />
                            <input required {...register("email")}
                                disabled
                                value={user.email}
                                placeholder="sort title" />
                            <input  {...register("date")} disabled value={dateTime} /> <br />
                            <textarea className="text-dark" required {...register("adress")} placeholder="Adress" />
                            <input value={service.cost +"$"} disabled  {...register("cost")} placeholder="  cost " /> <br />

                            <input type="submit" className="text-dark" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PlaceORder;