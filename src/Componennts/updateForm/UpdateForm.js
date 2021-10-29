import React from 'react';
import { useForm } from 'react-hook-form';
import './update.css'

const UpdateForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = () => {

    }
    return (
        <div className = "bg-image">
            <div className="updateService-container">
                <h3 className="mt-5 fw-bold  text-success">Update  Service</h3>
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
        </div>
    );
};

export default UpdateForm;