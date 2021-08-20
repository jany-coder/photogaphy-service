import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../assets/photo-01.jpg'
import img2 from '../../../assets/photo-02.jpg'
import img3 from '../../../assets/photo-03.jpg'

const Slider = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img style={{ height: "600px" }}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Your Beautiful Memory</h3>
                        <p>We will help you to create your beautiful memory</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "600px" }}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Your Beautiful Memory</h3>
                        <p>We will help you to create your beautiful memory</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "600px" }}
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Your Beautiful Memory</h3>
                        <p>We will help you to create your beautiful memory</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;