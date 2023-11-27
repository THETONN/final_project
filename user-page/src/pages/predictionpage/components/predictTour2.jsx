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
                                        src='./images/G2bangkok.jpg'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach'>Visit temples, take a boat cruise to admire the capital city of Thailand, and enjoy the delights of Siam Amazing Park</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Bangkok
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 4,200 Bath
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Period</span> : 3 Days 2 Nights
                                        <br /><br />
                                        <p style={{ marginBottom: '2rem' }}> <span style={{ paddingLeft: '1rem' }}>Embark </span>
                                            on a mesmerizing journey through the heart of Thailand with our 3-day tour. Explore the spiritual wonders of Wat Phra Sri Rattana Satsadaram and Wat Pho, cruise along the enchanting Chao Phraya River, and indulge in the vibrant nightlife of the capital city. Immerse yourself in cultural richness at Wat Arun and shop freely at the iconic Icon Siam. Be captivated by the spectacular ICONIC Multimedia Water Features show and enjoy leisurely shopping. Conclude your adventure with a visit to Siam Amazing Park, promising fun-filled attractions and delightful meals. An unforgettable Thai experience awaits you!</p>

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
                            <h4 style={{ color: '#6800C4' }}>Visit temples, take a boat cruise to admire the capital city of Thailand, and enjoy the delights of Siam Amazing Park</h4>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 1
                            </h4>
                            <p><span style={{ color: '#6800C4' }}>08.00 a.m. : </span>Meet up at the specified meeting point and departure on a journey.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30 a.m. : </span>Visit Wat Phra Sri Rattana Satsadaram, also known as the Temple of the Emerald Buddha.</p>
                            <p><span style={{ color: '#6800C4' }}>12.30 a.m. : </span>Have lunch.</p>
                            <p><span style={{ color: '#6800C4' }}>02.00 p.m. : </span>Visit Wat Phra Chetuphon Wimon Mangkhalaram, also known as Wat Pho.</p>
                            <p><span style={{ color: '#6800C4' }}>04.00 p.m. : </span> Take a long-tail boat cruise to observe the way of life on both sides of the canals along the Chao Phraya River during the evening.</p>
                            <p><span style={{ color: '#6800C4' }}>06.30 p.m. : </span>Dine for dinner and return to the hotel for relaxation.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>
                                Day 2</h4>
                            <p><span style={{ color: '#6800C4' }}>07.00 a.m. : </span> Breakfast service.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30  a.m. : </span>Visit Wat Arun Ratchawararam Ratchawaramahawihan, the beautiful temple with its stunning pagoda along the banks of the Chao Phraya River.</p>
                            <p><span style={{ color: '#6800C4' }}>11.30 a.m. : </span>Take you to Icon Siam and having lunch at Icon Siam. Enjoy the freedom to choose and dine at your leisure.</p>
                            <p><span style={{ color: '#6800C4' }}>02.00 p.m. : </span>Experience The ICONIC Multimedia Water Features show, featuring synchronized water dances with lights, colors, sound, and multimedia elements.</p>
                            <p><span style={{ color: '#6800C4' }}>03.30 p.m. : </span>Allowing free time for shopping according to personal preferences.</p>
                            <p><span style={{ color: '#6800C4' }}>05.00 p.m. : </span>Return to the hotel and have dinner at the accommodation.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>
                                Day 3</h4>
                            <p><span style={{ color: '#6800C4' }}>07.00 a.m. : </span> Take you to Siam Amazing Park and have breakfast on the way.</p>
                            <p><span style={{ color: '#6800C4' }}>09.00  p.m. : </span>Arrive at Siam Amazing Park and distribute lunch vouchers, along with a scheduled time for the return journey.</p>
                            <p><span style={{ color: '#6800C4' }}>04.00 a.m. : </span>Return journey.</p>
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
                                        src='./images/G2Suphan Buri.jpeg'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach'>Tour a Cultural Journey through History and Nature, and Exploring Towering Observatories and Premier Shopping Spots</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Suphan Buri
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 4,600 Bath
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Period</span> : 3 Days 2 Night
                                        <br /><br />
                                        <p style={{ marginBottom: '2rem' }}> <span style={{ paddingLeft: '1rem' }}>Embark </span>
                                            on a captivating 3-day journey through the cultural heart of Thailand, where history and nature intertwine seamlessly. Explore the vibrant markets, serene temples, and the rich heritage of Suphanburi, all while indulging in local flavors. Experience the spiritual essence of Thai rice farmers, pay homage at significant temples, and marvel at the enchanting Dragon Paradise Park. Ascend Banhan Chaemsai Tower for breathtaking views and unwind at the luxurious Vasidtee City Hotel. Immerse yourself in the charm of Sam Chuk's Hundred Years Market and witness the cultural tapestry of Wat Phai Rong Wua. This odyssey promises a perfect blend of history, nature, and unforgettable moments.</p>

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
                            <h4 style={{ color: '#6800C4' }}>Tour a Cultural Journey through History and Nature, and Exploring Towering Observatories and Premier Shopping Spots</h4>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 1</h4>
                            <p><span style={{ color: '#6800C4' }}>06.00 a.m. : </span>Meet up at the specified meeting point and departure on a journey.</p>
                            <p><span style={{ color: '#6800C4' }}>08.00 a.m. : </span>Invite you to savor local cuisine at a native restaurant.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30 a.m. : </span>Take you on a journey to Bueng Chawak.</p>
                            <p><span style={{ color: '#6800C4' }}>10.30 a.m. : </span>Traveling to the Thai Buffalo Conservation Village.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 p.m. : </span>Dine for lunch at a local restaurant.</p>
                            <p><span style={{ color: '#6800C4' }}>02.00 p.m. : </span>Journey to Khum Khun Phaen, an art center that portrays the literary and historical significance of Khun Chang and Khun Phaen</p>
                            <p><span style={{ color: '#6800C4' }}>04.00 p.m. : </span>Proceeding next to the Sukhothai National Historical Park in Suphanburi, a site that gathers the historical narratives of the city of Suphan.</p>
                            <p><span style={{ color: '#6800C4' }}>06.30 p.m. : </span>Accompany you to check in at the Vassanti Hotel, where you'll enjoy dinner and have the opportunity to relax at your leisure.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>Day 2</h4>
                            <p><span style={{ color: '#6800C4' }}>07.30 a.m. : </span>Have breakfast in the room at Vasidtee City Hotel</p>
                            <p><span style={{ color: '#6800C4' }}>08.30  a.m. : </span>Take you on a journey to Nakhia, a learning center that showcases the lifestyle and spiritual essence of Thai rice farmers.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30 p.m. : </span>Traveling to Wat Pa Lelai Worawihan, an important temple that serves as a spiritual center for the local community in Suphanburi province.</p>
                            <p><span style={{ color: '#6800C4' }}>11.00 p.m. : </span>Have lunch.</p>
                            <p><span style={{ color: '#6800C4' }}>01.00 p.m. : </span>Take you on a journey to the Dragon Paradise Park</p>
                            <p><span style={{ color: '#6800C4' }}>03.00 p.m. : </span>Traveling to Banhan Chaemsai Tower, the first and tallest observation tower in Thailand.</p>
                            <p><span style={{ color: '#6800C4' }}>05.00 p.m. : </span>Accompany you to check in at the Vassanti Hotel, where you'll enjoy dinner and have the opportunity to relax at your leisure.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>Day 3</h4>
                            <p><span style={{ color: '#6800C4' }}>07.30 a.m. : </span>Have breakfast in the room at Vasidtee City Hotel</p>
                            <p><span style={{ color: '#6800C4' }}>08.30  a.m. : </span>Embark on a journey to Sam Chuk, the Hundred Years Market.</p>
                            <p><span style={{ color: '#6800C4' }}>10.30 p.m. : </span>Traveling to Wat Phai Rong Wua, paying respects to the Buddha's footprint and the giant statue of Guanyin, and making a stop to explore the Heavenly Garden and Hell Garden.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 p.m. : </span>Have lunch.</p>
                            <p><span style={{ color: '#6800C4' }}>01.30 p.m. : </span>Taking you to Wat Thap Kradan, also known as the popular Wat Phum Pong.</p>
                            <p><span style={{ color: '#6800C4' }}>02.30 p.m. : </span>Traveling to Akchai Salila Suphan, the largest souvenir shop in Suphanburi province.</p>
                            <p><span style={{ color: '#6800C4' }}>05.00 p.m. : </span>Return journey.</p>
                        </div>
                        <button onClick={handleCloseDetails2}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PredictTour;
