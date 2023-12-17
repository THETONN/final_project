import React, { useState,useEffect } from "react";
import './HomePredict.css'
// impoet Nav from components
import MainNavbar from './components/navbar'
// impoer Nav Login components
import MainNavbarLog from './components/navbarAfterLogin'
// import for use Container from bootstrap
import { Container } from 'react-bootstrap'
//import footer from componentes
import Footer from './components/footer'
//import PredictTours from componentes
import PredictTour2 from './components/predictTour2'
//import Contact from componentes
import Contact from './components/contact/Contact'
//import Questionnaire from componentes
import Questionnaire from './components/Questionnaire/Questionnaire'
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';



function HomePredict2() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedGroupId = localStorage.getItem('groupId');
    console.log(storedGroupId);
    if (storedGroupId !== '1') {
      // alert('You are not authorized to view this page.');
      navigate(`/HomePredict${storedGroupId}`); // Redirect to a safe page or a not authorized page
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
                <h3 style={{ marginBottom: '1rem', color: '#9F7CFC' }}>You have been assigned to Group 2</h3>
                <h4 style={{ color: 'white' }}>This group consists of a male and mostly a working age which more than 31 years old, graduated higher than bachelor’s degree level. Their income is mostly more than 30,000 baht per month , mostly people in this group have their own private car ,  the majority of them status are married and they prefer to travel in historical including ethnic with a budget of more than 3500 baht per person.</h4>
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
          <PredictTour2 />
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
        <Questionnaire />
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

export default HomePredict2

