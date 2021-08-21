import React from 'react';
import { useParams } from 'react-router-dom';
import serviceData from '../../../data/data';
import CheckOut from '../CheckOut/CheckOut';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import BookingClient from './../BokkingClient/BookingClient';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "auto"
}

const Dashboard = () => {
    const { id } = useParams();
    const product = serviceData.find(pd => pd.id == id);
    return (
        <section>
            <div style={containerStyle} className="container-fluid row px-0 mx-0">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="mt-5">
                        <h4 className="text-info">Book Your Order</h4>
                        <CheckOut product={product}></CheckOut>
                    </div>
                </div>
                <div className="col-md-6">
                    <BookingClient></BookingClient>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;