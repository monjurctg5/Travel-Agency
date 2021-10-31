import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './services.css'
const Services = () => {
    const [services, setServices] = useState([])
    const { user, isLoading } = useAuth()
    useEffect(() => {
        fetch('https://shielded-badlands-01145.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div>
            <h1>Total services : {services.length}</h1>
            <div className="row col-12 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 ">
                {
                    services.map(service => (
                        <div className="col">
                            <div class="card" style={{ width: "18rem" }}>
                                <img src={service.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{service.ServiceName}</h5>
                                    <Link to={`/placeOrder/${service._id}`} class="btn btn-danger"
                                    >Booking Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default Services;