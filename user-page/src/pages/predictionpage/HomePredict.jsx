import React, { useState, useEffect } from "react";

import "./HomePredict.css";
// impoet Nav from components
import MainNavbar from "./components/navbar";
// impoer Nav Login components
import MainNavbarLog from "./components/navbarAfterLogin";
// import for use Container from bootstrap
import { Container } from "react-bootstrap";
//import footer from componentes
import Footer from "./components/footer";
//import PredictTours from componentes
import PredictTour from "./components/predictTour";
//import Contact from componentes
import Contact from "./components/contact/Contact";
//import Questionnaire from componentes
import Questionnaire from "./components/Questionnaire/Questionnaire";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HomePredict() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedGroupId = localStorage.getItem("groupId");
    console.log(storedGroupId);
    if (storedGroupId !== "0") {
      // alert('You are not authorized to view this page.');
      navigate(`/HomePredict${storedGroupId}`); // Redirect to a safe page or a not authorized page
    }
  }, [navigate]);

  return (
    <div className="App2">
      <MainNavbarLog />
      {/* <MainNavbar /> */}
      <div style={{ backgroundColor: "black", paddingTop: "5rem" }}>
        <section id="sectionAbout2">
          <div className="mainTopHome3 ">
            <Container>
              <div className="ContainMain2">
                <h1
                  style={{
                    marginBottom: "1rem",
                    marginTop: "-5rem",
                    color: "white",
                    fontSize: "4rem",
                    textShadow: "2px 2px 4px #000000",
                  }}
                >
                  Prediction results
                </h1>
                <h3
                  style={{
                    marginBottom: "1rem",
                    color: "#FFD700",
                    fontSize: "3rem",
                    textShadow: "2px 2px 4px #000000",
                  }}
                >
                  You have been assigned to Group 1
                </h3>
                <h4
                  style={{
                    color: "white",
                    textShadow: "1px 1px 2px #000000",
                  }}
                >
                  {/* Group description text */}
                  This group consists of female and male mostly graduated under
                  bachelor’s degree with age range less than 20 – 40 years old
                  which have an income less than 15,000 – 45,000 baht per month,
                  most of the member in this group have their own motor cycle,
                  their home town mostly located in Western, North-East and
                  Central of Thailand, The majority of them status is single
                  with 1-3 people in their households, their preferences for
                  traveling is 1-2 days per trip, mostly traveling with 1-4
                  people and they prefer to travel at the Central, Eastern,
                  North-East and Western of Thailand, They like to travel during
                  hot and cold season and most like to travel in cultural
                  including historical and recreational, with a budget of less
                  than 500 – 2,500 baht per person.
                </h4>
              </div>
            </Container>
          </div>
        </section>
      </div>

      <div
        className="HeadPredict2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section id="sectionTour2" className="scroll-section">
          <Container className="ContainMain2" style={{ textAlign: "center" }}>
            <h1 style={{ paddingTop: "4rem" }}>
              The Tour Program That Best Suits For You
            </h1>
          </Container>
          <PredictTour />
        </section>
      </div>

      <div className="haveBTN2">
        <div className="container">
          <div className="row">
            <div className="ContainMain2">
              <div id="coverAllofBTN2">
                <h3 className="DetailPredictTour2">
                  <h1 className="TopicEachHome2">
                    Find perfect <span style={{ color: "#9F7CFC" }}>TRIP</span>{" "}
                    with us!
                  </h1>
                  <hr className="style52" />
                  <p className="DetailEachHome2">
                    Please take a few minutes to complete our survey and provide
                    us with your valuable feedback
                  </p>
                </h3>
                <Link to="/Quiz">
                  <button className="btnGoQs2">
                    <h4>Arrange the best trip for you by AI</h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {S-Questionnaire} */}
      <section id="sectionFeedback2">
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
  );
}

export default HomePredict;
