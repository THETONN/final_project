import { useState,useEffect } from 'react';
import './LoginHome.css'
import MainNavbar from './components/navbarAfterLogin';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Footer from '../../components/footer';
import Contact from '../../components/contact/Contact';
import About from '../../components/about';
import FlipCardContainer1 from '../../components/FlipCardNew/FlipCardContainer1';
import FlipCardContainer2 from '../../components/FlipCardNew/FlipCardContainer2';
import ButtonHomeQS from '../../components/button/buttonQS';
import {useNavigate } from 'react-router-dom';
import axios from "axios";


function LoginHomePage() {
  const [userGroup, setUserGroup] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const userId = localStorage.getItem('userId');
    const group = localStorage.getItem('groupId');

    console.log('All localStorage keys and values:');
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(`${key}: ${value}`);
  }
    
    // console.log('Id:', userId);
    // console.log('Group:', group);
  
    if (!userId) {
      navigate('/Login');
    } else {
      setUserGroup(group);
      if (!group) {
        // If user is logged in but doesn't have a group, inform them to complete the questionnaire.
        // You can set state here to conditionally render a message or disable the Tours button.
        console.log('Please complete the questionnaire to be assigned to a group.');
      }
    }
  }, [navigate]);
  
  // Retrieve the group_id from localStorage
  // const userGroup = localStorage.getItem('group_id');
  // const userId = localStorage.getItem('userId');
  

  return (
    <div className='App'>
      <MainNavbar />


      <section id="sectionHome" className="scroll-section">
        <div className='mainTopHome'>
          <Container >
            <div className='ContainMain'>
              <br />
              <h1>TRAVEL PROGRAM RECOMMENDATION <br /> BY MACHINE LEARNING</h1>
              <h3>Let us plan your trip!</h3>
                <ButtonHomeQS />
              <h4>*Our website recommends tour programs tailored to your preferences. Just click a button and take the quiz to get personalized recommendations. Discover your perfect trip with us!"</h4>
            </div>

          </Container>
        </div>
      </section>

      <div className='topVacation'>
        <Container >
          <div className='ContainMain'>
            <h1>Top Vacation Destinations of Thailand</h1>
            <div className='row text-center' style={{ paddingBottom: '4rem' }}>
              <div className=' FC col-sm'>
                <FlipCardContainer1 />
              </div>
            </div>
          </div>
        </Container>

        <Container >
          <div className='ContainMain'>
            <div className='row text-center' style={{ paddingBottom: '4rem' }}>
              <div className=' FC col-sm'>
                <FlipCardContainer2 />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section id="sectionAbout" className="scroll-section">
        <About />
      </section>

      <section id="sectionContact" className="scroll-section">
        <Contact />
      </section>

      <section id="sectionFooter">
        <Footer />
      </section>
    </div>
  );
}

export default LoginHomePage;
