import React from 'react';
import banner from '../../../images//banner/b1.png';
import banner2 from '../../../images/banner/b2.png';
import banner3 from '../../../images/banner/b3.png';
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