import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import './CheckOut.css';
import { UserContext } from './../../../App';


const CheckOut = (props) => {

    const {name, price} = props.product;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {

        fetch('http://localhost:5000/addBookings', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
           if(success) {
               alert('Successfully Booked');
           }
        })
    };

    console.log(watch("example"));

    return (

        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
            {errors.name && <span>Name is required</span>}
            <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" />
            {errors.email && <span>Email is required</span>}
            <input  defaultValue={name} {...register("package", { required: true })} placeholder="Your Package" />
            {errors.package && <span>Package is required</span>}
            <input  defaultValue={price} {...register("price", { required: true })} placeholder="Your Package" />
            {errors.price && <span>Price is required</span>}
            <input {...register("address", { required: true })} placeholder="Your Address" />
            {errors.address && <span>Address is required</span>}
            <input {...register("phone", { required: true })} placeholder="Your Phone Number" />
            {errors.phone && <span>Phone Number is required</span>}
            
            <input type="submit" />
        </form>
    );
};

export default CheckOut;