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
                                        src='./images/G3Phuket.jpg'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach'>Exploring Phuket's Wonders, Island Hopping, and Culinary Delights , and Underwater Adventures</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Phuket
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 3,300 Bath
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Period</span> : 3 Days 2 Nights
                                        <br /><br />
                                        <p style={{ marginBottom: '2rem' }}> <span style={{ paddingLeft: '1rem' }}>Embark </span>
                                            on an unforgettable 'Phuket Island Retreat.' From the warm welcome at Phuket International Airport, this journey takes you on a cultural exploration, visiting historic sites like Wat Phra Thong, a pearl farm, and the vibrant old town. Day two is a marine adventure, exploring Maithon and Phi Phi Islands, while day three invites coral reef exploration at Kon Kea Bay and Siam Bay. Indulge in local cuisine, snorkel in crystal-clear waters, and relax on sandy shores. This meticulously crafted tour promises an immersive experience in the beauty and culture of Phuket and its surrounding islands.</p>

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
                            <h4 style={{ color: '#6800C4' }}>Exploring Phuket's Wonders, Island Hopping, and Culinary Delights , and Underwater Adventures</h4>
                            <br />
                            <h4 style={{ paddingBottom: '1rem' }}>Day 1
                            </h4>
                            <p><span style={{ color: '#6800C4' }}>11.00 a.m. : </span>Welcome to Phuket Province! Our staff is ready to welcome and assist you at the passenger arrival area inside the country at Phuket International Airport's entrance gate.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 a.m. : </span>Have lunch.</p>
                            <p><span style={{ color: '#6800C4' }}>01.00 p.m. : </span>Take a scenic drive around Phuket Island, visit Wat Phra Thong, explore a pearl farm, admire the old town of Phuket, and make a stop to pay respects at Luang Por Chaem's meditation center at Wat Chalong.</p>
                            <p><span style={{ color: '#6800C4' }}>02.00 p.m. : </span> Choose to purchase products from one district, one unique local product.</p>
                            <p><span style={{ color: '#6800C4' }}>03.30 p.m. : </span>Explore Promthep Cape, including Kata Beach, Karon Beach, and Patong Beach.</p>
                            <p><span style={{ color: '#6800C4' }}>06.00 p.m. : </span>Check-in at the accommodation and relax at your leisure.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>
                                Day 2</h4>
                            <p><span style={{ color: '#6800C4' }}>06.00 a.m. : </span> Breakfast service.</p>
                            <p><span style={{ color: '#6800C4' }}>07.00  a.m. : </span>Pickup from the hotel accommodation and journey to the pier.</p>
                            <p><span style={{ color: '#6800C4' }}>08.30 a.m. : </span>Travel to Maithon Island, take a boat ride to observe the natural dolphin habitat around Maithon Island, and snorkel to explore the coral reefs in the Maithon Island area.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30 a.m. : </span>Continue the journey to Phi Phi Leh Island, admire Maya Bay, Loh Samah Bay, Pileh Lagoon, and Viking Cave. Then, proceed to visit Monkey Beach in the vicinity of Phi Phi Don Island.</p>
                            <p><span style={{ color: '#6800C4' }}>10.30 a.m. : </span>Experience underwater coral reef exploration around Phi Phi Island, immersing yourself in the underwater world beneath the sea.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 p.m. : </span>Enjoy a buffet-style lunch.</p>
                            <p><span style={{ color: '#6800C4' }}>01.30 p.m. : </span>Embark on a journey to Koh Kai, play in the water with schools of fish, or you can snorkel to explore coral reefs from the shoreline. Relax on the fine white sandy beaches of Koh Kai.</p>
                            <p><span style={{ color: '#6800C4' }}>03.30 p.m. : </span>Return journey to the pier.</p>
                            <p><span style={{ color: '#6800C4' }}>04.00 p.m. : </span>Arrive at the pier and stop to see the macaques at the pier.</p>
                            <p><span style={{ color: '#6800C4' }}>04.30 p.m. : </span>Send you back to your hotel.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>
                                Day 3</h4>
                            <p><span style={{ color: '#6800C4' }}>06.30 a.m. : </span> Have breakfast.</p>
                            <p><span style={{ color: '#6800C4' }}>08.00  p.m. : </span>Shuttle service from the accommodation to Ao Chalong Pier.</p>
                            <p><span style={{ color: '#6800C4' }}>09.30 a.m. : </span>The boat departs from Ao Chalong Pier when everyone is ready.</p>
                            <p><span style={{ color: '#6800C4' }}>11.30 a.m. : </span>Take you to explore coral reefs at Kon Kea Bay and Siam Bay.</p>
                            <p><span style={{ color: '#6800C4' }}>12.30 p.m. : </span>Enjoy lunch at a restaurant on the island.</p>
                            <p><span style={{ color: '#6800C4' }}>01.30 p.m. : </span>Arrive at Koh He and relax at your leisure.</p>
                            <p><span style={{ color: '#6800C4' }}>04.00 p.m. : </span>Return to Ao Chalong Pier and the vehicle is ready to take you back.</p>
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
                                        src='./images/G3Tak.png'
                                        className='img-fluid d-inline-block align-top mx-auto'
                                        alt='RocketTrip'
                                    />
                                </h1>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <h3 className='DetailPredictTour'>
                                    <p className='TopicEach'style={{marginBottom:'2rem'}}>Rapids, Waterfalls, and Border Markets Adventure</p>
                                    <p className='DetailEach'>
                                        <span style={{ color: "#9F7CFC" }}>Province</span> : Tak
                                        <br />
                                        <span style={{ color: "#9F7CFC" }}>Price</span> : 4,500 Bath
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
                            <p><span style={{ color: '#6800C4' }}>06.00 a.m. : </span>Meet up at the specified meeting point and departure on a journey.</p>
                            <p><span style={{ color: '#6800C4' }}>07.30 a.m. : </span>Arrive at Umpang District, enjoy breakfast, and after the meal, embark on a journey by local truck to Pa La Tae Village.</p>
                            <p><span style={{ color: '#6800C4' }}>08.30 a.m. : </span>Arrive at Pa La Tae Village, prepare for an adventure through 11 challenging rapids ranging from levels 2 to 4, leading to the beautiful Thi Lo Le Waterfall.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00 p.m. : </span>Have lunch</p>
                            <p><span style={{ color: '#6800C4' }}>01.00 p.m. : </span>Embark on a rubber boat adventure, enjoying the natural scenery on both sides of the route, passing through the Crossing the Auktek rapids and the enchanting Ka Chochita Rapids.</p>
                            <p><span style={{ color: '#6800C4' }}>03.00 p.m. : </span>Arriving at Thiloe Ley Waterfall to admire its natural beauty, followed by a scenic walk along the riverbank and a 500-meter uphill hike to reach the camping site.</p>
                            <p><span style={{ color: '#6800C4' }}>05.00 p.m. : </span>Set up camp and then enjoy a refreshing bath in the Mae Klong Klang Waterfall amidst the vast and serene forest landscapes.</p>
                            <p><span style={{ color: '#6800C4' }}>05.30 p.m. : </span>Fishing, building a bonfire, wildlife spotting, and enjoying dinner.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>Day 2</h4>
                            <p><span style={{ color: '#6800C4' }}>08.00  a.m. : </span>Breakfast and journey to Sepla Village, with a forest trek to admire nature in the midst of the vast and beautiful Thung Yai Naresuan.</p>
                            <p><span style={{ color: '#6800C4' }}>12.00  p.m. : </span>Arrive at Huai Hin Daeng and enjoy a midday meal.</p>
                            <p><span style={{ color: '#6800C4' }}>01.00 p.m. : </span>Continue the journey to the Sep La Village.</p>
                            <p><span style={{ color: '#6800C4' }}>04.00 p.m. : </span>Arrive at Sep La Village and take a songthaew back to the accommodation.</p>
                            <p><span style={{ color: '#6800C4' }}>05.30 p.m. : </span>Arrive at the campsite and unwind at your own pace.</p>
                            <p><span style={{ color: '#6800C4' }}>06.30 p.m. : </span>Traveling to Banhan Chaemsai Tower, the first and tallest observation tower in Thailand.</p>
                            <p><span style={{ color: '#6800C4' }}>5.00 p.m. : </span>Have dinner.</p>
                            <br />

                            <h4 style={{ paddingBottom: '1rem' }}>Day 3</h4>
                            <p><span style={{ color: '#6800C4' }}>05.30 a.m. : </span>Embark on a journey to admire the sea of mist at Doi Hua Mod.</p>
                            <p><span style={{ color: '#6800C4' }}>07.00  a.m. : </span>Return to the resort, making a stop to explore the morning market of Umpang residents along the way.</p>
                            <p><span style={{ color: '#6800C4' }}>08.00 a.m. : </span>Have breakfast</p>
                            <p><span style={{ color: '#6800C4' }}>09.00 a.m. : </span>Journey to Namtok Pha Charoen.</p>
                            <p><span style={{ color: '#6800C4' }}>01.00 p.m. : </span>Have lunch</p>
                            <p><span style={{ color: '#6800C4' }}>2.00 p.m. : </span>Travel to Rim Moei Market and Muser Market, Burmese border markets.</p>
                            <p><span style={{ color: '#6800C4' }}>3.00 p.m. : </span>Return journey.</p>
                        </div>
                        <button onClick={handleCloseDetails2}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PredictTour;
