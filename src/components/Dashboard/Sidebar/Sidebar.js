import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from './../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        // fetch('', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify({ email: loggedInUser.email })
        // })
        //     .then(res => res.json())
        //     .then(data => setIsDoctor(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
               <div>
                    <li>
                        <Link to="/allBookings" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Booking</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addPackage" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Package</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;