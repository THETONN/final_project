import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import {useNavigate } from 'react-router-dom';

function MainNavbar() {

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [username, setUsername] = useState(''); // เพิ่ม state สำหรับเก็บ username

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const login = (username) => {
    // ทำการเข้าสู่ระบบ และรับชื่อผู้ใช้จากต้นทาง (เช่น จาก API)
    // หลังจากเข้าสู่ระบบสำเร็จ
    setUsername(username);
    // และทำอื่นๆ เช่น เก็บ token หรืออื่นๆ ตามความเหมาะสม
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('userId');
    navigate('/'); // นำทางกลับไปยังหน้าhomepage
  };

  

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
                  <span style={{ fontSize: 'large', color: 'white', fontWeight: 'bold', paddingRight: '9rem' }}>Rocket Trips</span>
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
                style={{ marginRight: 40, fontSize: 'large', pointerEvents:'none', opacity:'0.5' }}
                href="/HomePredict"
                onClick={() => handleClick('sectionTour2')}
              >
                Tour
              </Nav.Link>
              <Nav.Link
                style={{ marginRight: 40, fontSize: 'large' }}
                href="#Contact"
                onClick={() => handleClick('sectionContact')}
              >
                Contact
              </Nav.Link>
              {
                <Dropdown onToggle={handleDropdownToggle} show={showDropdown}>
                  <Dropdown.Toggle style={{
                    marginRight: 40,
                    fontSize: 'medium',
                    backgroundColor: '#6750A3',
                    borderRadius: '18px',
                    border: 'white',
                    width: 'auto',
                    textAlign: 'center',
                  }} variant="dark" id="dropdown-basic">
                    {username || username}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item  onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNavbar;
