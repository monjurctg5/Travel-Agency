import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import AdService from '../AddService/AdService';
import UpdateForm from '../updateForm/UpdateForm';

const ManageService = () => {
    const [services, setServices] = useState([])
    const [updateId, setUpdateId] = useState("")
    const [singleService, setSingleService] = useState({})
    const { user, isLoading } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory()
    useEffect(() => {
        
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/services/${updateId}`)
            .then(res => res.json())
            .then(data => {
                setSingleService(data)
            })

    }, [updateId])

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    const handleDelete = id => {
        const confirm = window.confirm("Are You  want to delete?")
        if (confirm) {
            fetch(`http://localhost:5000/services/${id}`, { method: "delete" }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("delete successfully")
                        const remaingServices = services.filter(service => service._id !== id)
                        setServices(remaingServices)
                    }
                })
        }
    }
    const update = id => {
        setUpdateId(id)
    }

    const handleServiceName = e => {
        e.preventDefault()
        const ServiceName = e.target.value
        const updateService = { ServiceName: ServiceName, sortTitle: singleService.sortTitle, description: singleService.description, img: singleService.img }
        setSingleService(updateService)
    }
    const handleShorTitle = e => {
        e.preventDefault()
        const sortTitle = e.target.value
        const updateService = { ServiceName: singleService.ServiceName, sortTitle: sortTitle, number: singleService.description, img: singleService.img }
        setSingleService(updateService)

    }
    const handleDescription = e => {
        e.preventDefault()
        const description = e.target.value
        const updateService = { ServiceName: singleService.ServiceName, sortTitle: singleService.sortTitle, description: description, img: singleService.img }
        setSingleService(updateService)
    }
    const handleImg = e => {
        e.preventDefault()
        const img = e.target.value
        const updateService = { ServiceName: singleService.ServiceName, sortTitle: singleService.sortTitle, description: singleService.description, img: img }
        setSingleService(updateService)


    }
    const onSubmit = (e) => {
        fetch(`http://localhost:5000/friends/${updateId}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json', },
            body: JSON.stringify(singleService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("update successfully")
                    setSingleService({})
                    history.push("/dash")
                }
            })
        e.preventDefault()





    }
    return (
        <div className="h-50" >
            <h1>total service :{services.length}</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">SN</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">title</th>
                        <th scope="col">image</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map((service, index) => (
                            <tr>
                                <th >{index + 1}</th>
                                <td>{service.ServiceName}</td>
                                <td>{service.sortTitle}</td>
                                <td>
                                    <img src={service.img} width="100px" alt="" />
                                </td>
                                <td >
                                    <button className="mx-2 btn 
                                    btn-warning"
                                        onClick={() => update(service._id)}
                                        type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                    >update</button>
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-danger">delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* modal  */}
            <div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">UPDATE DATA</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className="bg-image">
                                    <div className="updateService-container">
                                        <h3 className="mt-5 fw-bold  text-success">Update  Service</h3>
                                        <div className="Event-container">
                                            <form onSubmit={onSubmit}>
                                                <input value={singleService.ServiceName}
                                                    onChange={handleServiceName}
                                                    placeholder=" Service Name" />
                                                <input value={singleService.sortTitle}
                                                    onChange={handleShorTitle}
                                                    placeholder="sort title" />
                                                <textarea value={singleService.description}
                                                    onChange={handleDescription}
                                                    placeholder="Descriptio" />
                                                <input value={singleService.img} onChange={handleImg} placeholder=" event image url" /> <br />
                                                <input type="submit" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                <button type="submit" onClick={onSubmit} className="btn btn-primary " data-bs-dismiss="modal">update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageService;