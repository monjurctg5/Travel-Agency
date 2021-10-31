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
            <div className="top-destination" >
                <h1>Top Destination</h1>
            </div>
            <div className="row  row-cols-sm-1 justify-content-center align-items-center row-cols-md-3 row-cols-lg-4 g-4 ">
                {
                    services.map(service => (
                        <div className="col">
                            <div class="card service-card-custom  " style={{ width: "18rem" }}>
                                <img src={service.img}
                                    class="card-img-top" height="200px" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{service.ServiceName}</h5>
                                    <p>{service.sortTitle.slice(0, 26)}</p>
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