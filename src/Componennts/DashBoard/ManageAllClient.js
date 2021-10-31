import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageAllClient = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://shielded-badlands-01145.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [orders])
    const approvalId = id => {
     
        swal({
            title: "Are you sure ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((approved) => {
            if (approved) {
                fetch(`https://shielded-badlands-01145.herokuapp.com/orders/${id}`, { method: "PUT" })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert("success fully  approoved")
                    }
                })
              swal("Poof! Order  Approved successfully", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
      
    }
    const handleDelete = id => {

        const permition = window.confirm("want to delete?")
             if(permition){
                fetch(`https://shielded-badlands-01145.herokuapp.com/orders/${id}`, { method: "delete" })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        alert("delete Successfully")
                        const remainning = orders.filter(order=>order._id!==id)
                        setOrders(remainning)
                        
                    }
                 
                })
             
             }
        

    }
    return (
        <div className="table-responsive-sm manageAllClient">
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
                                    order.approved == false ? <span className="text-danger "><Spinner animation="border" variant="danger" /></span> :
                                        <span className="text-success"><i class="fas fa-check-circle"></i></span>
                                }</td>
                                <td >
                                    <button onClick={() => approvalId(order._id)} className="btn btn-success " ><i class="fas fa-check-circle"></i></button> <br />
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-danger mt-1"><i class="fas fa-trash-alt"></i></button>
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