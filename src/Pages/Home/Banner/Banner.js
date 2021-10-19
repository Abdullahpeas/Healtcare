import React from 'react';
import './Banner.css';
import banner from '../../../images//banner/111.jpg';
import banner2 from '../../../images/banner/2222.jpg';
import banner3 from '../../../images/banner/s33.jpg';
import { Carousel } from 'react-bootstrap';
const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-warning fw-bold fs-1">No Pain, No Gain</h3>
                        <p className="text-primary fs-4">Be Strong Try Hard.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-warning fw-bold fs-1">No Pain, No Gain</h3>
                        <p className="text-primary fs-4">Be Strong Try Hard.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-warning fw-bold fs-1">No Pain, No Gain</h3>
                        <p className="text-primary fs-4">Be Strong Try Hard.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;