import React from 'react';
import './Footer.css';
import image from '../../../images/logo/CF-Logo-16x9-wide-1024x439-removebg-preview.png';
const Footer = () => {
    return (
        <>

            <div className="row mt-5 footer overflow-hidden">
                <div className="col-md-4 col-lg-4 col-12  mt-3">
                    <img width="190px" src={image} alt="" />
                </div>
                <div className="col-md-4 cols-12 col-lg-4 mt-3">
                    <h4>Opening Hours</h4>
                    <table className="table">

                        <tbody className="table-dark">
                            <tr>
                                <th scope="row">1</th>
                                <td>Monday</td>
                                <td>07:00-9:00</td>
                                <td>9:30-11:00</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Tuesday</td>
                                <td>6:00-8:00</td>
                                <td>9:00-11:00</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Wednesday</td>
                                <td>8:00-9:00</td>
                                <td>9:20-11:30</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Thursday</td>
                                <td>7:00-8:30</td>
                                <td>9:00-12:00</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Friday</td>
                                <td>10:00-1:00</td>
                                <td>3:00-5:00</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Saturday</td>
                                <td>5:00-7:00</td>
                                <td>8:00-11:00</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Sunday</td>
                                <td>4:00-6:30</td>
                                <td>8:00-12:00</td>
                            </tr>

                        </tbody>
                    </table>

                </div>

                <div className="col-md-4 col-lg-4 cols-12 mt-3">
                    <div>
                        <h4>Contact</h4>
                        <i className="fas fa-phone icon-style-phone"></i>
                        <h5>08000 99911122
                        </h5>
                        <p>Hotline available 24 hours </p>
                    </div>

                    <div>
                        <i className="far fa-envelope icon-style-email icon-style-phone"></i>
                        <h5>EMAIL US</h5>
                        <p>mdabdullah533000@gmail.com</p>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Footer;