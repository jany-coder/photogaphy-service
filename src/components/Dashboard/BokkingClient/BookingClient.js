import React, { useContext, useEffect, useState } from 'react';
import BookItemsCard from '../BookItemsCard/BookItemsCard';
import { UserContext } from './../../../App';
import { Row, Col } from 'react-bootstrap';

const BookingClient = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch('https://sheltered-lowlands-09828.herokuapp.com/bookings?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <table className="table table-borderless mt-5">
        <thead>
            <tr>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Package</th>
            <th className="text-secondary" scope="col">Phone</th>
            <th className="text-secondary" scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {
              bookings.map((book, index) => 
                    
                <tr>
                    <td>{book.name}</td>
                    <td>{book.package}</td>
                    <td>{book.phone}</td>
                    <td>{book.email}</td>
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default BookingClient;