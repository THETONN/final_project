import React, { useState } from 'react';
import './predictTour.css';

function PredictTour() {
    const [showDetails, setShowDetails] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);

    const handleClick = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    const handleDetailsClick = () => {
        setShowDetails(true);
    }

    const handleCloseDetails = () => {
        setShowDetails(false);
    }

    const handleDetailsClick2 = () => {
        setShowDetails2(true);
    }

    const handleCloseDetails2 = () => {
        setShowDetails2(false);
    }


    return (
        <div className='PredictTour'>
            <center>
                <div className='a22'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6'>
                                <h1 className='logoPredictTour3 text-center'>
                                    <img style={{ borderRadius: '20px', height: '20rem', width: '100%', marginTop: '4.7rem' }}
                                        src='./images/G1Nonthaburi.jpg'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach'>KohKret Exploration: Pottery Workshops, Cultural Delights, and Scenic Boat Rides</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Nonthaburi
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 1,200 Bath
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Period</span> : One Day Trip
                                        <br /><br />
                                        <p style={{ marginBottom: '2rem' }}> <span style={{ paddingLeft: '1rem' }}>Embark </span>

                                            on a captivating day with our "KohKret Exploration" tour, immersing yourself in the cultural richness of Nonthaburi. From pottery workshops in the quaint Kwan Ar Man village to scenic boat rides around KohKret, this tour promises a delightful blend of art, history, and culinary delights. Join us for a unique journey through the hidden gems of this enchanting destination.</p>

                                        <div className='buttonContainer'>
                                            <button className='btnEach' style={{ width: '50%', marginRight: '1rem' }} onClick={handleDetailsClick}>More Details</button>
                                            <button className='btnEach' style={{ width: '50%', backgroundColor: '#00BA2A ' }} onClick={() => handleClick('sectionContact2')}>@Line for Booking</button>

                                        </div>
                                    </p>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </center>

            {showDetails && (
                <div className="detailsModal">
                    <div className="modalContent">
                        <div className='modalContentDetail'>
                            <h4 style={{ color: '#6800C4' }}>KohKret Exploration: Pottery Workshops, Cultural Delights, and Scenic Boat Rides</h4>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Timetable</h4>
                            <p><span style={{ color: '#6800C4' }}>07.00 a.m. : </span>Meeting at the meeting point and rolling to the port at Wat Sanam Nuea.</p>
                            <p><span style={{ color: '#6800C4' }}>07.30 a.m. : </span>Arrived at KohKret and worship phramaha raman chedi Wat Paramaiyikawat.</p>
                            <p><span style={{ color: '#6800C4' }}>08.00 a.m. : </span>Shopping for food In front of the temple at your leisure.</p>
                            <p><span style={{ color: '#6800C4' }}>09.00 a.m. : </span>Visited the kwan ar man pottery village. </p>
                            <p><span style={{ color: '#6800C4' }}>11.00 a.m. : </span>workshop from pottery craft.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 a.m. : </span>Enjoy lunch at your leisure., with the recommended restaurant is Ing Nam Noodle Restaurant.</p>
                            <p><span style={{ color: '#6800C4' }}>01.00 p.m. : </span>Taking a boat trip around Koh Kret.</p>
                            <p><span style={{ color: '#6800C4' }}>03.00 p.m. : </span>Finished the boat trip and take everyone to worship wat phai lhom.</p>
                            <p><span style={{ color: '#6800C4' }}>04.30 p.m. : </span>Enjoy dinner at your own place , with the recommended restaurant is Chit beer restaurant.</p>
                            <p><span style={{ color: '#6800C4' }}>05.30 p.m. : </span>Travel back to the port at wat sanam nuea.</p>
                            <br />
                        </div>
                        <button onClick={handleCloseDetails}>Close</button>
                    </div>
                </div>
            )}

            <center>
                <div className='a22'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6'>
                                <h1 className='logoPredictTour3 text-center'>
                                    <img style={{ borderRadius: '20px', height: '20rem', width: '100%', marginTop: '4.7rem' }}
                                        src='./images/G1Koh Samet.jpg'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach'>Serenity on Koh Samet: 2-Day Coastal Escape with Beach Bliss and Water Adventures</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Koh-Samet
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 2,500 Bath
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Period</span> : 2 Days 1 Night
                                        <br /><br />
                                        <p style={{ marginBottom: '2rem' }}> <span style={{ paddingLeft: '1rem' }}>Embark </span>
                                            on a tranquil coastal escape with our "Serenity on Koh Samet" tour, a 2-day retreat that combines the allure of pristine beaches, cultural exploration at Wat Koh Samet, and exhilarating water activities. From savory dining experiences to a comfortable stay at Samed My Home Hotel, this tour promises a perfect blend of relaxation and adventure on the captivating shores of Koh Samet. Join us for an unforgettable island retreat!</p>

                                        <div className='buttonContainer'>
                                            <button className='btnEach' style={{ width: '50%', marginRight: '1rem' }} onClick={handleDetailsClick2}>More Details</button>
                                            <button className='btnEach' style={{ width: '50%', backgroundColor: '#00BA2A ' }} onClick={() => handleClick('sectionContact2')}>@Line for Booking</button>

                                        </div>
                                    </p>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </center>

            {showDetails2 && (
                <div className="detailsModal">
                    <div className="modalContent">
                        <div className='modalContentDetail'>
                            <h4 style={{ color: '#6800C4' }}>Serenity on Koh Samet: 2-Day Coastal Escape with Beach Bliss and Water Adventures</h4>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 1</h4>
                            <p><span style={{ color: '#6800C4' }}>09.00 a.m. : </span>Meeting at the meeting point and traveling to nadan pier.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30 a.m. : </span>Having a breakfast at Jump At Sea restaurant. </p>
                            <p><span style={{ color: '#6800C4' }}>10.30 a.m. : </span>walking and taking a photo at sai kaew beach. </p>
                            <p><span style={{ color: '#6800C4' }}>11.30 a.m. : </span>worship at wat koh samet. </p>
                            <p><span style={{ color: '#6800C4' }}>12.30 a.m. : </span>Having lunch at nah sun pochana and take a rest at your leisure.</p>
                            <p><span style={{ color: '#6800C4' }}>02.00 p.m. : </span>Taking a photo at koh-samet view point.</p>
                            <p><span style={{ color: '#6800C4' }}>03.00 p.m. : </span>Activities : kayaking.</p>
                            <p><span style={{ color: '#6800C4' }}>04.30 p.m. : </span>Check-in at Samed my home hotel.</p>
                            <p><span style={{ color: '#6800C4' }}>05.30 p.m. : </span>Having dinner at the hotel.</p>

                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 2</h4>
                            <p><span style={{ color: '#6800C4' }}>09.00 a.m. : </span>Having a breakfast at hotel.</p>
                            <p><span style={{ color: '#6800C4' }}>10.00  a.m. : </span>Visited at nuan bay.</p>
                            <p><span style={{ color: '#6800C4' }}>10.30 a.m. : </span>Swimming at phai bay.</p>
                            <p><span style={{ color: '#6800C4' }}>11.30 a.m. : </span>Enjoy lunch at apache lung dum bay.</p>
                            <p><span style={{ color: '#6800C4' }}>01.00 p.m. : </span>Headed back to the hotel and check-out.</p>
                            <p><span style={{ color: '#6800C4' }}>02.30 p.m. : </span>Travel back to the nadan pier.</p>
                            <br />
                        </div>
                        <button onClick={handleCloseDetails2}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PredictTour;
