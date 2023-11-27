import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-black">
            <div className="w-full flex-grow">
                <section className="items-center flex flex-col flex-grow px-5 py-10 text-white">
                    <div className="container">
                        <div className="ContainMain">
                            <h1 className="text-5xl">Contact Us</h1>
                            <p className="uppercase">Get in touch and Let us know how we can help.</p>
                        </div>
                    </div>
                    <div className="container allContact">
                        <div className="container contact-container">
                            <div className="row">
                                {/* Address (ซ้าย) */}
                                <div className="allCon infoAll col-md-4">
                                    <div className="bgContact">
                                        <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</h4>
                                        <p style={{fontSize:'large' }}>Rocket Trips Office</p>
                                        <p style={{ opacity: '0.7', fontSize:'17px' }}>333 Moo 1, Thasud Subdistrict, Muang District <br /> Chiang Rai, 57100, Thailand</p>
                                    </div>

                                </div>

                                {/* Phone (กลาง) */}
                                <div className="allCon infoAll col-md-4">
                                    <div className="bgContact">
                                        <h4><FontAwesomeIcon icon={faLine} /> Line</h4>
                                        <p style={{fontSize:'large' }}>ID Line</p>
                                            <p style={{ opacity: '0.7', fontSize:'17px' }}>@rocket_trips</p>
                                        <br />
                                        <h4 style={{fontSize:'large' }}><FontAwesomeIcon icon={faPhone} /> Phone</h4>
                                        <p>Help Center</p>
                                        <p style={{ opacity: '0.7', fontSize:'17px' }}>+01 234 567 88</p>
                                    </div>
                                </div>

                                {/* Email (ขวา) */}
                                <div className="allCon infoAll col-md-4">
                                    <div className="bgContact">
                                        <h4><FontAwesomeIcon icon={faEnvelope} /> Email</h4>
                                        <p style={{fontSize:'large' }}>Business Services</p>
                                        <p style={{ opacity: '0.7', fontSize:'17px' }}>RocketTripsOfficial@gmail.com</p>
                                        <br />
                                        <p style={{fontSize:'large' }}>Email Support</p>
                                        <p style={{ opacity: '0.7', fontSize:'17px' }}>RocketTripsSupport@gmail.com</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;