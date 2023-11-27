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
                                        src='./images/G1chiangmai.jpg'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach'>Forest trekking, mountain climbing, and mountain biking tour on Doi Suthep</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Chiang Mai
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 850 Bath
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Period</span> : One Day Trip
                                        <br /><br />
                                        <p style={{ marginBottom: '2rem' }}> <span style={{ paddingLeft: '1rem' }}>An </span>
                                            excursion designed for fitness enthusiasts and those who love challenging activities, conquering various obstacles. Whether trekking through rainforests, pine forests, waterfalls, and hill tribe villages, followed by conquering the challenge of mountain biking with a moderate level difficulty route of over 35 kilometers. Descend hills, climb mountains, and rock climb from the summit of Doi Pui down to the reservoir of Huai Tung Thao.</p>

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
                            <h4 style={{ color: '#6800C4' }}>Forest trekking, mountain climbing, and mountain biking tour on Doi Suthep</h4>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Highlights</h4>
                            <p>- Forest trekking duration : <span style={{ color: '#6800C4' }}>Approximately 3 hours. </span></p>
                            <p>- Mountain biking duration : <span style={{ color: '#6800C4' }}>Approximately 2 hours. </span></p>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Timetable</h4>
                            <p><span style={{ color: '#6800C4' }}>09.30 a.m. : </span>Meet up at the specified meeting point and departure on a journey.</p>
                            <p><span style={{ color: '#6800C4' }}>10.00 a.m. : </span>Bring everyone to the starting point of the jungle trek at Doi Suthep-Pui National Park.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 p.m. : </span>Have lunch.</p>
                            <p><span style={{ color: '#6800C4' }}>02.00 p.m. : </span>Arrive at the appointed meeting point in Doi Suthep-Pui National Park.</p>
                            <p><span style={{ color: '#6800C4' }}>05.30 p.m. : </span>Return journey</p>
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
                                        src='./images/G1Kanchanaburi.jpeg'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach'>Tour to Tiger Cave Temple, Krabi Caves, and the River Kwai Crossing Bridge</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Kanchanaburi
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 2,300 Bath
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Period</span> : 2 Days 1 Night
                                        <br /><br />
                                        <p style={{ marginBottom: '2rem' }}> <span style={{ paddingLeft: '1rem' }}>Embark </span>
                                            on a comprehensive 2-day exploration of Kanchanaburi, featuring cultural landmarks, scenic wonders, and riverside relaxation. The journey includes visits to Tham Suea Temple, the ancient Giant Chamchuri tree, and the challenging Tham Krasae along the 'Death Railway Route.' Enjoy rafting activities, water fun, and a riverside dinner, followed by a leisurely morning on Day 2, capturing scenic moments at the Bridge over the River Kwai and concluding with souvenir shopping before returning to the journey.</p>

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
                            <h4 style={{ color: '#6800C4' }}>Tour to Tiger Cave Temple, Krabi Caves, and the River Kwai Crossing Bridge</h4>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 1</h4>
                            <p><span style={{ color: '#6800C4' }}>06.00 a.m. : </span>Meet up at the specified meeting point and departure on a journey.</p>
                            <p><span style={{ color: '#6800C4' }}>08.30 a.m. : </span>Tour to Tham Suea Temple, paying respects, making merit, and worshiping the largest Buddha statue in Kanchanaburi Province.</p>
                            <p><span style={{ color: '#6800C4' }}>10.00 a.m. : </span>Admire the beauty of the Giant Chamchuri tree, which is over 100 years old.</p>
                            <p><span style={{ color: '#6800C4' }}>11.00 a.m. : </span>Visit Tham Krasae, also known as the 'Death Railway Route and savor a midday meal.</p>
                            <p><span style={{ color: '#6800C4' }}>01.30 p.m. : </span>Embark on a journey to the riverside raft accommodation, where you can unwind and relax at your leisure.</p>
                            <p><span style={{ color: '#6800C4' }}>04.00 p.m. : </span>Rafting in the vicinity of the accommodation.</p>
                            <p><span style={{ color: '#6800C4' }}>06.00 p.m. : </span>Have dinner and relax at your leisure.</p>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 2</h4>
                            <p><span style={{ color: '#6800C4' }}>07.00 a.m. : </span>Have breakfast at the resort's dining area.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30  a.m. : </span>Check out from the accommodation and proceed to the Bridge over the River Kwai. Capture the atmosphere at your leisure</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 p.m. : </span>Have lunch</p>
                            <p><span style={{ color: '#6800C4' }}>02.00 p.m. : </span>Return journey with a stop to buy souvenirs.</p>
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
