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
                                        src='./images/G2Krabi.jpg'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach'>Immerse Yourself in Krabi: A 2-Day Journey Through Local Heritage and Scenic Marvels</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Krabi
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 3,100 Bath
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Period</span> : 2 Days 1 Nights
                                        <br /><br />
                                        <p style={{ marginBottom: '2rem' }}> <span style={{ paddingLeft: '1rem' }}>Embark </span>
                                            on an enriching 2-day adventure with our "Discover Krabi's Charm" tour. Immerse yourself in the cultural tapestry of Lanta Old Town, savor delectable meals at NAHM restaurant, and explore historical landmarks at Wat Maha That Wachiramongkol. From the vibrant markets of OTOP to the pristine beaches of Promthep Cape, this tour seamlessly blends cultural exploration, culinary delights, and breathtaking natural wonders. Join us for an unforgettable journey through the captivating landscapes of Krabi!</p>

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
                            <h4 style={{ color: '#6800C4' }}>Immerse Yourself in Krabi: A 2-Day Journey Through Local Heritage and Scenic Marvels</h4>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 1
                            </h4>
                            <p><span style={{ color: '#6800C4' }}>10.00 a.m. : </span>Meeting at the meeting point at the arrival hall next to the Krabi international airport.</p>
                            <p><span style={{ color: '#6800C4' }}>11.00 a.m. : </span>Vistied  Lanta Old Town.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 a.m. : </span>Enjoy lunch meal at  NAHM restaurant.</p>
                            <p><span style={{ color: '#6800C4' }}>01.00 p.m. : </span>Visit historical landmarks at Wat Maha That Wachiramongkol.</p>
                            <p><span style={{ color: '#6800C4' }}>02.00 p.m. : </span> Visited the OTOP shop.</p>
                            <p><span style={{ color: '#6800C4' }}>03.30 p.m. : </span>Visit the Promthep Cape including Kata Beach, Karon Beach และ Patong Beach.</p>
                            <p><span style={{ color: '#6800C4' }}>06.00 p.m. : </span>
                                <p><span style={{ color: '#6800C4' }}>03.30 p.m. : </span>Visit the Promthep Cape including Kata Beach, Karon Beach และ Patong Beach.</p></p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>
                                Day 2</h4>
                            <p><span style={{ color: '#6800C4' }}>08.00 a.m. : </span> – Having Breakfast at the hotel.</p>
                            <p><span style={{ color: '#6800C4' }}>09.00  a.m. : </span>Traveling from the hotel to the port.</p>
                            <p><span style={{ color: '#6800C4' }}>10.30 a.m. : </span>Travel to koh-klang Krabi to  Study the way of life of indigenous people.</p>
                            <p><span style={{ color: '#6800C4' }}>11.30 a.m. : </span>Watching the show and do the activity with Indigenous peoples.</p>
                            <p><span style={{ color: '#6800C4' }}>12.30 a.m. : </span>Having lunch at Krabi Koh Klang Seafood Restaurant on Farm.</p>
                            <p><span style={{ color: '#6800C4' }}>01.30 p.m. : </span>Visit the Mud Crabs Sculpture.</p>
                            <p><span style={{ color: '#6800C4' }}>03.30 p.m. : </span>Visit the hot waterfall, emerald pool.</p>
                            <p><span style={{ color: '#6800C4' }}>04.30 p.m. : </span>Enjoy your dinner at Wangsai Seafood.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>
                                Day 3</h4>
                            <p><span style={{ color: '#6800C4' }}>09.00 a.m. : </span>Having a breakfast at the hotel and check out.</p>
                            <p><span style={{ color: '#6800C4' }}>10.00  a.m. : </span>Leaving hotel and travel to Laem Sak Tourism Community.</p>
                            <p><span style={{ color: '#6800C4' }}>11.00 a.m. : </span>Go to see the way of life of Laem Sak community.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 a.m. : </span>Have a lunch at Khaothong Terrace Restaurant.</p>
                            <p><span style={{ color: '#6800C4' }}>01.30 p.m. : </span>Watch the Manohra Rongngen show.</p>
                            <p><span style={{ color: '#6800C4' }}>03.00 a.m. : </span>Heading back to the Krabi International Airport.</p>
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
                                        src='./images/G2Sukhothai.jpg'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach'>Explore Sukhothai: Embark on a 3-Day Journey through Ancient Temples, Artistic Workshops, and Local Heritage.</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Sukhothai
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 3,800 Bath
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Period</span> : 3 Days 2 Night
                                        <br /><br />
                                        <p style={{ marginBottom: '2rem' }}> <span style={{ paddingLeft: '1rem' }}>Embark </span>
                                            on an enriching 3-day adventure with our "Explore Sukhothai" tour. Immerse yourself in the ancient charm of temples, engage in artistic workshops, and delve into the local heritage of Sukhothai. This carefully curated itinerary promises a unique blend of cultural exploration and hands-on experiences, providing an unforgettable journey through the heart of Thailand's historical treasures. Join us for an immersive and insightful exploration!</p>

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
                            <h4 style={{ color: '#6800C4' }}>Explore Sukhothai: Embark on a 3-Day Journey through Ancient Temples, Artistic Workshops, and Local Heritage.</h4>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 1</h4>
                            <p><span style={{ color: '#6800C4' }}>09:00 a.m. : </span>Meeting at the Sukhothai airport and then guide will picking up and head to Organic Agriculture Project. </p>
                            <p><span style={{ color: '#6800C4' }}>10.00 a.m. : </span>Activities at the Organic Agriculture Project such as plucking seedlings , transplant rice seedlings , etc.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 a.m. : </span>Having lunch at  krua sukho Organic Agriculture Project.</p>
                            <p><span style={{ color: '#6800C4' }}>01.00 p.m. : </span>Travel to sukhothai historical park.</p>
                            <p><span style={{ color: '#6800C4' }}>02.00 p.m. : </span>Visit important places within the park such as Wat Mahathat, Wat Chana Songkhram, Wat Phra Phai Luang, Wat Si Chum.</p>
                            <p><span style={{ color: '#6800C4' }}>04.00 p.m. : </span>- Leave the sukhothai historical park.</p>
                            <p><span style={{ color: '#6800C4' }}>05.00 p.m. : </span>Travel to the Sukhothai walking street.</p>
                            <p><span style={{ color: '#6800C4' }}>07.00 p.m. : </span>Checked-in at Legendha Sukhothai Resort and take a rest at your leisure.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>Day 2</h4>
                            <p><span style={{ color: '#6800C4' }}>08.00 a.m. : </span>Breakfast at the hotel.</p>
                            <p><span style={{ color: '#6800C4' }}>09.00  a.m. : </span>Travel and sightseeing around the srisachanarai historical park.</p>
                            <p><span style={{ color: '#6800C4' }}>10.00 a.m. : </span>Travel to baan pri-da-rom.</p>
                            <p><span style={{ color: '#6800C4' }}>11.00 a.m. : </span>Activity : Drawing Sangkhalok patterns on cloth at Baan Pridapirom. </p>
                            <p><span style={{ color: '#6800C4' }}>12.30 a.m. : </span>Enjoy lunch meal at  MAI KLANG KRUNG RESTAURANT.</p>
                            <p><span style={{ color: '#6800C4' }}>01.30 p.m. : </span>Travel to ancient house community.</p>
                            <p><span style={{ color: '#6800C4' }}>02.30 p.m. : </span>Sightseeing around the ancient house community which have a history of 100 years.</p>
                            <p><span style={{ color: '#6800C4' }}>04.00 p.m. : </span>Travel back to the hotel and take a rest at you leisure. </p>
                            <p><span style={{ color: '#6800C4' }}>05.00 p.m. : </span>Enjoy a local dinner food at the hotel.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>Day 3</h4>
                            <p><span style={{ color: '#6800C4' }}>08.00 a.m. : </span>Breakfast at the hotel.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30  a.m. : </span>Visit Wat Phiphat Mongkol It is an old temple, approximately 700 years old.</p>
                            <p><span style={{ color: '#6800C4' }}>11.00 a.m. : </span>Travel to the National Museum See sculptures and Buddha images from various periods before the Sukhothai period.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 a.m. : </span>Have lunch at Sukhothai Restaurant.</p>
                            <p><span style={{ color: '#6800C4' }}>01.30 p.m. : </span>Visit the museum National Sawan Woranayok.</p>
                            <p><span style={{ color: '#6800C4' }}>02.30 p.m. : </span>Return to the city and travel to the airport.</p>
                        </div>
                        <button onClick={handleCloseDetails2}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PredictTour;
