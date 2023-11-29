import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar() {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // สร้าง event listener เพื่อตรวจสอบขนาดหน้าจอเมื่อหน้าจอเปลี่ยนขนาด
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // เพิ่ม event listener ใน componentDidMount
    window.addEventListener('resize', handleResize);

    // ใน componentWillUnmount ลบ event listener เพื่อป้องกัน memory leak
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="sm"
        style={{ backgroundColor: 'black', padding: '15px' }}
      >
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              {windowWidth >= 767 && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src="./images/LogoNav.png"
                    height="40px"
                    className="d-inline-block align-top"
                    alt="RocketTrip"
                    style={{ marginRight: 10 }}
                  />
                  <span style={{ fontSize: 'large', color: 'white', paddingRight: '9rem', fontWeight: 'bold' }}>Rocket Trips</span>
                </div>
              )}
              <Nav.Link
                style={{ marginRight: 40, fontSize: 'large' }}
                href="#home"
                onClick={() => handleClick('sectionHome')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{ marginRight: 40, fontSize: 'large' }}
                href="#About"
                onClick={() => handleClick('sectionAbout')}
              >
                About
              </Nav.Link>
              <Nav.Link
                style={{ marginRight: 40, fontSize: 'large' }}
                href="#Tour"
                onClick={() => handleClick('sectionTour')}
              >
                Tour
              </Nav.Link>
              {/* <Nav.Link
                style={{ marginRight: 40, fontSize: 'large' }}
                href="#Feedback"
                onClick={() => handleClick('sectionFeedback')}
              >
                Feedback
              </Nav.Link> */}
              <Nav.Link
                style={{ marginRight: 40, fontSize: 'large' }}
                href="#Contact"
                onClick={() => handleClick('sectionContact')}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                style={{
                  marginRight: 40,
                  fontSize: 'large',
                  backgroundColor: '#6750A3',
                  borderRadius: '18px',
                  border: 'white',
                  width: '6rem',
                  textAlign: 'center',
                }}
                href="/login"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNavbar;
