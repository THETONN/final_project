import { useState,useEffect } from 'react';
import './homepage.css'
import MainNavbar from '../../components/navbar';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Footer from '../../components/footer';
import Contact from '../../components/contact/Contact';
import About from '../../components/about';
import FlipCardContainer1 from '../../components/FlipCardNew/FlipCardContainer1';
import FlipCardContainer2 from '../../components/FlipCardNew/FlipCardContainer2';
import ButtonHomeQS from '../../components/button/buttonQS';
import ButtonHomeAlert from '../../components/button/buttonAlert';
import {useNavigate } from 'react-router-dom';

function HomePage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      navigate('/LoginHome'); // ถ้ามี session, นำทางไปยังหน้า LoginHome
    }
  }, [navigate]);

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
                <ButtonHomeAlert />
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

export default HomePage;
