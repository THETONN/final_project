import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './about.css';

function About() {
    const [groups, setGroupData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/group')
            .then(response => setGroupData(response.data))
            .catch(error => console.error('Error fetching group data:', error));
    }, []);

    return (
        <div className='About'>
            <div className='a1'>
                <div className='container'>
                    <div className='ContainMain'>
                        <h3 className='LogoName'>
                            <center>
                                <span>
                                    <h1 className='NameWeb'>Rocket Trips</h1>
                                </span>
                                <h4 className='meanRocket'>
                                    Rocket Trips provides a range of travel experiences, from exciting adventures to relaxing getaways, designed to enhance your journeys. Our machine learning tools will help you find the perfect trip based on your preferences and aspirations. Using machine learning clustering, we've organized our packages into four subgroups, each with unique features and attributes. Embark on a journey that elevates your travel experience with Rocket Trips.
                                </h4>
                            </center>
                        </h3>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: 'black' }}>
                <div className='container' style={{ backgroundColor: 'black' }}>
                    <h1 style={{ paddingTop: '3.5rem', color: '#9F7CFC' }}>Clustering Insights: Categorized into 3 Main Groups</h1>
                </div>
            </div>

            {groups.map(group => (
                <div key={group.id} className='a2'>
                    <div className='container'>
                        <div className='row'>
                            {group.id % 2 === 0 ? (
                                <>
                                    <h3 className='DetailAbout col-sm-8'>
                                        <span>
                                            <h1>{`Characteristics of ${group.group_name}`}</h1>
                                        </span>
                                        <h4 className='DetailGroup0'>{group.group_description}</h4>
                                    </h3>
                                    <h1 className='logoAbout2 col-sm-4'>
                                        <img
                                            src={group.image}
                                            className="d-inline-block align-top mx-auto"
                                            alt={`Group ${group.id}`}
                                        />
                                    </h1>
                                </>
                            ) : (
                                <>
                                    <h1 className='logoAbout2 col-sm-4'>
                                        <img
                                            src={group.image}
                                            className="d-inline-block align-top mx-auto"
                                            alt={`Group ${group.id}`}
                                        />
                                    </h1>
                                    <h3 className='DetailAbout col-sm-8'>
                                        <span>
                                            <h1>{`Characteristics of ${group.group_name}`}</h1>
                                        </span>
                                        <h4 className='DetailGroup0'>{group.group_description}</h4>
                                    </h3>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* <div className='a3'>
                <div className='container'>
                    <div className='row'> */}
                        {/* Group2 */}
                        {/* <h3 className='DetailAbout col-sm-8'>
                            <span>
                                <h1>Characteristics of Group 2</h1>
                            </span>
                            <h4 className='DetailGroup0'>This cluster mainly consists of the working age group, aged 31 to 60. The education background bachelor’s degrees to advanced degrees. The income typically falls within the range of 30,000 to more than 60,000 Baht per month. They mostly own private cars and prefer to use them for traveling. Their hometowns are primarily located in central Thailand. The majority are married, and their households typically consist of 4 - 5 people. They express a desire to travel for 3 - 4 days per trip, with 2 - 3 trips per year. The preferred travel region is mainly central Thailand, with a budget of more than 3,500 baht per person.</h4>
                        </h3>
                        <h1 className='logoAbout2 col-sm-4'>
                            <img
                                src="./images/Cluster2.jpg"
                                className="d-inline-block align-top mx-auto"
                                alt="RocketTrip"
                            />
                        </h1>
                    </div>
                </div>
            </div> */}

            {/* <div className='a4'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='logoAbout2 col-sm-4'>
                            <img
                                src="./images/Cluster3.jpg"
                                className="d-inline-block align-top mx-auto"
                                alt="RocketTrip"
                            />
                        </h1> */}
                        {/* Group3 */}
                        {/* <h3 className='DetailAbout col-sm-8'>
                            <span>
                                <h1>Classified in Group 3</h1>
                            </span>
                            <h4 className='DetailGroup0'> This cluster mainly consists of college students or recent graduates aged around 21 to 30 years old. Most have bachelor’s degrees in education. Their income is mostly less than 15,000 Baht per month. They own motorcycles or other vehicles, but they tend to use private cars or airplanes for travel. The majority of their hometown is located in the southern region and a minority is located in the northern region of Thailand. The majority are single, and households typically contain 4 or more people. They express a desire to travel for 3 - 4 days per trip, with two to more than 5 trips per year. The regions they want to explore are the north and south of Thailand, with a budget exceeding 3,500 Baht per person.
                            </h4>
                        </h3>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default About;
