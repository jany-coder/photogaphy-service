import React, { useEffect } from 'react';
import Footer from '../Home/Footer/Footer';
import { useParams } from 'react-router-dom';
import serviceData from '../../data/data';
import ServiceCard from '../Home/ServiceCard/ServiceCard';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './../Home/Navigation/Navigation';


const ServiceDetails = () => {
    const { id } = useParams();
    const product = serviceData.find(pd => pd.id == id);

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Row className="mt-5 mb-5 d-flex justify-content-center">
                    <h1>Package Details</h1>
                    <Col>
                        <div>
                            <ServiceCard data={product}></ServiceCard>
                            <div className="mt-5">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consectetur perferendis sint facere ullam assumenda quos laborum error accusamus dolore et nam voluptate officia odit ipsam, totam fuga fugit facilis repudiandae a eveniet. Debitis veniam ab, atque eum ipsam odio harum sed ea repellat! Dolores perferendis, maxime vel quidem rerum saepe veritatis dicta sit vero nesciunt non qui ut necessitatibus tempore unde similique. Cupiditate ipsum mollitia maiores totam ullam, dolorum ipsam earum voluptatem minima soluta blanditiis harum debitis distinctio doloremque consectetur neque maxime quisquam illo quod ducimus, similique doloribus animi nesciunt qui! Quas facilis dolore ea consequatur adipisci nulla vel laborum commodi nihil minima. Ad aliquid esse, illum optio aperiam suscipit commodi odio quidem molestiae blanditiis incidunt magni quae et, harum placeat facilis eius officia voluptas quis. Maiores consequatur facere dolor ipsum architecto unde a magni consectetur quisquam! Vel quisquam aperiam illo tempore sed doloribus iste dolorum dolor soluta. Iure?
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ServiceDetails;