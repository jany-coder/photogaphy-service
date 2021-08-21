import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import serviceData from '../../../data/data';
import { Container, Row, Col } from 'react-bootstrap';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
      setServices(serviceData);
    }, [])
    return (
        <>
            <div className="d-flex justify-content-center text-primary m-5 p-2">
                <h2>Our Services</h2>
            </div>
            <Container>
                <Row>
                    {
                        services.map(data =>
                            <Col key={data.id} md={4} sm={12}>
                                <ServiceCard viewMore={true}  data={data}></ServiceCard>
                            </Col>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Service;