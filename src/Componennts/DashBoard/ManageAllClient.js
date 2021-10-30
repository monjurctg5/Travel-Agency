import React, { useState } from 'react';

const ManageAllClient = () => {
    const [orders,setOrders] = useState([])
    fetch('http://localhost:5000/orders')
    .then(res=>res.json())
    .then(data=>setOrders(data))

    const approvalId =id =>{
        fetch(`http://localhost:5000/orders/${id}`,{method:"PUT"})
        .then(res=>res.json())
        .then(data=>{alert(data)
            
        })

        alert(id)
    }
    return (
        <div className="table-responsive-sm">
                <table className="table table-sm table-striped table-bordered table-hover ">
                <thead>
                    <tr>
                        <th scope="col">SN</th>
                        <th scope="col">client Name</th>
                        <th scope="col">email</th>
                        <th scope="col">Reg.Date</th>
                        <th scope="col">Address</th>
                        <th scope="col">Booking Place</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => (
                            <tr>
                                <th >{index + 1}</th>
                               <td>{order.clientName}</td>
                               <td>{order.email}</td>
                               <td>{order.date}</td>
                               <td>{order.adress}</td>
                               <td>{order.ServiceName}</td>
                               <td>{
                                   order.approved==false?<span className="text-danger">pending...</span>:
                                   <span className="text-success">Approved</span>
                                   }</td>
                                <td >
                                   <button onClick={()=>approvalId(order._id)}>Aproved</button>
                                    {/* <button onClick={() => handleDelete(service._id)} className="btn btn-danger">delete</button> */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllClient;