import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="contact-info col-md-6">
            <img
              src="./images/LogoFooter.png"
              height="100px"
              className="d-inline-block align-top logo"
              alt="RocketTrip"
            />

            <div className="contact-item" style={{ paddingRight: '3rem' }}>
              <h5>ROCKET TRIPS</h5>
              <p>
                Rocket Trips: Elevate your travel experience with our diverse, <br /> machine learning-powered packages.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-info">
              {/* <div className="contact-item">
                <h5>MENU</h5>
                <p>
                  Home <br /> About <br /> Tour <br /> Contact
                </p>
              </div> */}
              <div className="contact-item social-icons">
                <h5>Social Media</h5>
                {/* เพิ่มลิงก์และไอคอน Facebook และ Twitter */}
                <a href="https://www.facebook.com/THETONTONTON">
                  <FontAwesomeIcon icon={faFacebookF} /> Facebook
                </a>
                <a href="https://www.twitter.com">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Rocket Trips.com
      </div>
    </footer>
  );
};

export default Footer;
