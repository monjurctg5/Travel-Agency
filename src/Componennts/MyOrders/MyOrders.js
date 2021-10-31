import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
import './myOrder.css'
const MyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])
    const email = user?.email
    useEffect(() => {
        fetch(`https://shielded-badlands-01145.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyOrders(data);
            })
    }, [email])
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`https://shielded-badlands-01145.herokuapp.com/orders/${id}`, { method: "delete" })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        swal({
                            title: "Deltee Successfully!",
                            text: `You deleted ${id} successfully!`,
                            icon: "success",
                          });
                        const remainning = myOrders.filter(order=>order._id!==id)
                        setMyOrders(remainning)
                        
                    }
                 
                })
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        
    }

    return (
        <div className="table-responsive-sm myorder-container">
            <table className="table table-sm table-striped table-bordered table-hover ">
                <thead>
                    <tr>
                        <th scope="col">SN</th>
                        <th scope="col">Booking Place</th>
                        <th scope="col">Reg.Date</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((mmyOrder, index) => (
                            <tr>
                                <th >{index + 1}</th>
                                <td>{mmyOrder.ServiceName}</td>
                                <td>{mmyOrder.date}</td>
                                <td>${mmyOrder.cost}</td>

                                <td>{
                                    mmyOrder.approved == false ? <span className="text-danger "><Spinner animation="border" variant="danger" /></span> :
                                        <span className="text-success"><i class="fas fa-check-circle"></i></span>
                                }</td>
                                {
                                    mmyOrder.approved == false ? <td>
                                        <button onClick={() => handleDelete(mmyOrder._id)} className="btn btn-danger mt-1"><i class="fas fa-trash-alt"></i></button>

                                    </td> : <span className="text-success">Approved</span>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;