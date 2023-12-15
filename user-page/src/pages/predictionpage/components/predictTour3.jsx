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
                                        src='./images/G3Chiangmai.jpg'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach'>Majestic Chiang Mai Adventure: 3-Day Retreat with Elephant Encounters, Scenic Landscapes, and Cultural Discoveries.</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Chiang Mai
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 4,600 Bath
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Period</span> : 3 Days 2 Night
                                        <br /><br />
                                        <p style={{ marginBottom: '2rem' }}> <span style={{ paddingLeft: '1rem' }}>Embark </span>
                                            on an unforgettable 3-day adventure with our "Majestic Chiang Mai" tour. Immerse yourself in the rich culture at Wat Phra That Doi Suthep, experience the thrill of Jungle Coaster Pongyang, and interact with gentle giants at Maesa Elephant Camp. This meticulously crafted itinerary combines cultural exploration, thrilling activities, and natural wonders, offering a truly immersive journey through the heart of Chiang Mai. Join us for an extraordinary exploration of northern Thailand's hidden gems!</p>

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
                            <h4 style={{ color: '#6800C4' }}>Majestic Chiang Mai Adventure: 3-Day Retreat with Elephant Encounters, Scenic Landscapes, and Cultural Discoveries.</h4>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 1</h4>
                            <p><span style={{ color: '#6800C4' }}>08.30 a.m. : </span>Picking the customer up at chiang mai international airport or the other place around the downtown.</p>
                            <p><span style={{ color: '#6800C4' }}>09.00 a.m. : </span>Have a snack break.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30 a.m. : </span>Travel to Worship Wat Phra That Doi Suthep.</p>
                            <p><span style={{ color: '#6800C4' }}>11.30 a.m. : </span>Having Lunch.</p>
                            <p><span style={{ color: '#6800C4' }}>01.00 p.m. : </span>Activities at jungle coaster pongyang.</p>
                            <p><span style={{ color: '#6800C4' }}>03.00 p.m. : </span>Visited the flower garden at mon jam.</p>
                            <p><span style={{ color: '#6800C4' }}>04.00 p.m. : </span>travel to Canopy walkway at Queen Sirikit Botanic Garden.</p>
                            <p><span style={{ color: '#6800C4' }}>05.00 p.m. : </span>checked-in at Hotel M chiang mai.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>Day 2</h4>
                            <p><span style={{ color: '#6800C4' }}>08.30 a.m. : </span>Having breakfast at the Hotel.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30  a.m. : </span>Travel to the kariang village mae-rim.</p>
                            <p><span style={{ color: '#6800C4' }}>10.30 a.m. : </span>Walk around and buy some souvenir at the kariang village.</p>
                            <p><span style={{ color: '#6800C4' }}>12.30 a.m. : </span>Having luch at Kariang village.</p>
                            <p><span style={{ color: '#6800C4' }}>02.00 p.m. : </span>Travel to Maesa Elephant Camp.</p>
                            <p><span style={{ color: '#6800C4' }}>03.00 p.m. : </span>Visited the ban mong.</p>
                            <p><span style={{ color: '#6800C4' }}>05.00 p.m. : </span>Travel back to the hotel and rest at your leisure.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>Day 3</h4>
                            <p><span style={{ color: '#6800C4' }}>08.30 a.m. : </span>Checked-out in the morning and the will picking up at the hotel.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30  a.m. : </span>Visited Pha Chor (Grand Canyon).</p>
                            <p><span style={{ color: '#6800C4' }}>10.30 a.m. : </span>Visited Wachirathan Falls.</p>
                            <p><span style={{ color: '#6800C4' }}>11.30 a.m. : </span>Visited The Royal Agricultural Station Inthanon.</p>
                            <p><span style={{ color: '#6800C4' }}>12.30 a.m. : </span>Having lunch at Royal Project Inthanon.</p>
                            <p><span style={{ color: '#6800C4' }}>02.30 p.m. : </span>Shop for souvenirs at Dam Rong in Chiang Mai downtown.</p>
                            <p><span style={{ color: '#6800C4' }}>03.00 p.m. : </span>Return to Chiang Mai Airport, complete your trip safely.</p>
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
                                        src='./images/G3Phuket2.jpg'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach' style={{ marginBottom: '2rem' }}>Rapids, Waterfalls, and Border Markets Adventure</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Phuket
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 3,900 Bath
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Period</span> : 3 Days 2 Night
                                        <br /><br />
                                        <p style={{ marginBottom: '2rem' }}> <span style={{ paddingLeft: '1rem' }}>Embark </span>
                                            on an exhilarating journey and dive into the heart of nature as you conquer challenging rapids, explore vibrant villages, and witness the beauty of waterfalls. Camp under the stars, engage in cultural encounters, and discover hidden gems along the Burmese border markets. This tour promises an immersive experience, blending adventure, cultural discovery, and the tranquility of the wilderness.</p>

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
                            <h4 style={{ color: '#6800C4' }}>Rapids, Waterfalls, and Border Markets Adventure</h4>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 1</h4>
                            <p>- Meeting with the agent and leave the Phuket international airport.</p>
                            <p><span style={{ color: '#6800C4' }}>11.30 a.m. : </span>Workshop cocktail making at CHALONG BAY RUM.</p>
                            <p><span style={{ color: '#6800C4' }}>02.30 p.m. : </span>Cheked-in at hotel and take a rest at your leisure.</p>

                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 2</h4>
                            <p><span style={{ color: '#6800C4' }}>07.30  a.m. : </span>Having a breakfast at the hotel and leave the hotel.</p>
                            <p><span style={{ color: '#6800C4' }}>09.00  a.m. : </span>Travel to the port by speedboat and headed to the pp island.</p>
                            <p><span style={{ color: '#6800C4' }}>10.00 a.m. : </span>Take a commemorative photo in front of Maya Beach Take a dip and swim at Pileh Bay (Inner Sea) and see the beautiful Viking Cave or Bird's Nest Cave.</p>
                            <p><span style={{ color: '#6800C4' }}>11.30 a.m. : </span>Travel to pp don island to diving and watching the coral and the fish at the island.</p>
                            <p><span style={{ color: '#6800C4' }}>12.30 a.m. : </span>Having a lunch buffet at the pp don island.</p>
                            <p><span style={{ color: '#6800C4' }}>01.30 p.m. : </span>Travel to Koh-Khai to enjoy the beach and take a rest at your leisure. </p>
                            <p><span style={{ color: '#6800C4' }}>04.00 p.m. : </span>Travel back from Koh-Khai to the pier.</p>
                            <p><span style={{ color: '#6800C4' }}>05.00 p.m. : </span>Return to the Phuket pier and head back to the hotel. </p>
                            
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>Day 3</h4>
                            <p><span style={{ color: '#6800C4' }}>09.30 a.m. : </span>Have a breakfast and checked-out from the hotel and the agent will picking up to travel around Phuket city.</p>
                            <p><span style={{ color: '#6800C4' }}>10.00  a.m. : </span>Sightseeing the beauty of Sino-Portuguese architecture and the ancient building in old town Phuket. </p>
                            <p><span style={{ color: '#6800C4' }}>11.00 a.m. : </span>Stop by to worship Luang Por Chaem at Wat Chalong for good fortune.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 a.m. : </span>Admire the beauty of Laem Phromthep.</p>
                            <p><span style={{ color: '#6800C4' }}>01.00 p.m. : </span>Stop by the souvenirs shop.</p>
                            <p><span style={{ color: '#6800C4' }}>2.00 p.m. : </span>Take you to Phuket Airport safely.</p>
                        </div>
                        <button onClick={handleCloseDetails2}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PredictTour;
