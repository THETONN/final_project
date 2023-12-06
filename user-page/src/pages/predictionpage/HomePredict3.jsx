import React, { useState,useEffect } from "react";
import './HomePredict.css'
// impoet Nav from components
// import MainNavbar from '../LoginHome/components/navbarAfterLogin'
// impoer Nav Login components
import MainNavbarLog from './components/navbarAfterLogin'
// import for use Container from bootstrap
import { Container } from 'react-bootstrap'
//import footer from componentes
import Footer from './components/footer'
//import PredictTours from componentes
import PredictTour3 from './components/predictTour3'
//import Contact from componentes
import Contact from './components/contact/Contact'
//import Questionnaire from componentes
import Questionnaire from './components/Questionnaire/Questionnaire'
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';



function HomePredict3() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate();
    
    useEffect(() => {
        const storedGroupId = localStorage.getItem("groupId");
        console.log(storedGroupId);
        if (storedGroupId !== "2") {
          navigate(`/HomePredict${storedGroupId}`);
        }
      }, [navigate]);


    return (
        <div className='App2'>
            <MainNavbarLog />
            <div style={{ backgroundColor: 'black', paddingTop: '5rem' }}>
                <section id='sectionAbout2'>
                    <div className='mainTopHome3'>
                        <Container>
                            <div className='ContainMain2'>
                                <h1 style={{ marginBottom: '1rem', color: '#9F7CFC' }}>Prediction results</h1>
                                <h3 style={{ marginBottom: '1rem', color: '#9F7CFC' }}>You have been assigned to Group 3</h3>
                                <h4 style={{ color: 'white' }}>This cluster mainly consists of college students or recent graduates aged around 21 to 30 years old. Most have bachelor’s degrees in education. Their income is mostly less than 15,000 Baht per month. They own motorcycles or other vehicles, but they tend to use private cars or airplanes for travel. The majority of their hometown is located in the southern region and a minority is located in the northern region of Thailand. The majority are single, and households typically contain 4 or more people. They express a desire to travel for 3 - 4 days per trip, with two to more than 5 trips per year. The regions they want to explore are the north and south of Thailand, with a budget exceeding 3,500 Baht per person.</h4>
                            </div>
                        </Container>
                    </div>

                </section>
            </div>

            <div className='HeadPredict2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <section id="sectionTour2" className="scroll-section">
                    <Container className='ContainMain2' style={{ textAlign: 'center' }}>
                        <h1 style={{ paddingTop: '4rem' }}>The Tour Program That Best Suits For You</h1>
                    </Container>
                    <PredictTour3 />
                </section>
            </div>


            <div className='haveBTN2'>
                <div className='container'>
                    <div className='row'>
                        {/* <div className='col-sm-12 col-md-6'></div> */}
                        <div className='ContainMain2'>
                            <div id='coverAllofBTN2'>
                                <h3 className='DetailPredictTour2'>
                                    <h1 className='TopicEachHome2'>Find perfect <span style={{ color: '#9F7CFC' }}>TRIP</span> with us!</h1>
                                    <hr className='style52' />
                                    <p className='DetailEachHome2'>Please take a few minutes to complete our survey and provide us with your valuable feedback</p>
                                </h3>
                                <Link to='/Quiz'>
                                    <button className='btnGoQs2'>
                                        <h4>Arrange the best trip for you by AI</h4>
                                    </button>
                                </Link>              </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* {S-Questionnaire} */}
            <section id='sectionFeedback'>
                <Questionnaire />
            </section>
            {/* {E-Questionnaire} */}

            {/* S-Contact */}
            <section id="sectionContact" className="scroll-section">
                <Contact />
            </section>
            {/* E-Contact */}

            {/* S-Footer */}
            <section id="sectionFooter">
                <Footer />
            </section>
            {/* E-Footer */}

        </div>
    )
}

export default HomePredict3

