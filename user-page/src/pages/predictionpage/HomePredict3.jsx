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
            {/* <MainNavbar /> */}
            <div style={{ backgroundColor: 'black', paddingTop: '5rem' }}>
                <section id='sectionAbout2'>
                    <div className='mainTopHome3'>
                        <Container>
                            <div className='ContainMain2'>
                                <h1 style={{ marginBottom: '1rem', color: '#9F7CFC' }}>Prediction results</h1>
                                <h3 style={{ marginBottom: '1rem', color: '#9F7CFC' }}>You have been assigned to Group 3</h3>
                                <h4 style={{ color: 'white' }}>This group is consisting of Alternative and female, most of them are students graduated Bachelor’s degree or studying , with age less than 20 – 30 years old , Their income mostly less than 15,000 baht per month , They mostly own the other vehicle apart from the private car and also own a motorcycle and some of them don’t have any of it . Their hometown located in eastern , south , north-east and the north of Thailand , the majority of their status is single with more than 4 peoples in their household, They prefer to travel for 3-4 or more than 4 days per trip with more than 5 peoples in each trip. They mostly like to travel with airplane or private car , they like to travel during both cold and hot season and like to travel in recreational and ethnic with a budget more than 2,500 baht per person. They mostly travel during weekends or holidays and lovely to travel more than twice per years</h4>
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
            <section id='sectionFeedback2'>
                <Questionnaire/>
            </section>
            {/* {E-Questionnaire} */}

            {/* S-Contact */}
            <section id="sectionContact2" className="scroll-section">
                <Contact />
            </section>
            {/* E-Contact */}

            {/* S-Footer */}
            <section id="sectionFooter2">
                <Footer />
            </section>
            {/* E-Footer */}

        </div>
    )
}

export default HomePredict3

