import React from 'react';
import { Row, Col } from 'react-bootstrap';

const BookItemsCard = (props) => {
    const {name, price, email} = props.book;
    return (
        <Row>
            <Col md={4}>
                {name}
            </Col>
            <Col md={4}>
                {price}
            </Col>
            <Col md={4}>
                {email}
            </Col>
        </Row>
    );
};

export default BookItemsCard;