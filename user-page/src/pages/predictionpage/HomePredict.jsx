import { useState } from 'react'
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
import PredictTour from './components/predictTour'
//import Contact from componentes
import Contact from './components/contact/Contact'
//import Questionnaire from componentes
import Questionnaire from './components/Questionnaire/Questionnaire'
import { Link } from 'react-router-dom';



function HomePredict() {
  const [count, setCount] = useState(0)

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
                <h3 style={{ marginBottom: '1rem', color: '#9F7CFC' }}>You have been assigned to Group 1</h3>
                <h4 style={{ color: 'white' }}>Their age ranges from 21 to 40 years, with educational qualifications typically at the bachelor's degree level or lower. They are primarily private sector employees, including students, with monthly incomes falling within the range of 15,000 to 30,000 Baht. Most members in this group do not have personal vehicles and only a few members own motorcycles. They are mostly single, and their households typically consist of 2- 3 people. They express a desire to travel to the northern and central regions of Thailand, with a budget ranging from 500 to 2,500 Baht per person.</h4>
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
          <PredictTour />
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

export default HomePredict

