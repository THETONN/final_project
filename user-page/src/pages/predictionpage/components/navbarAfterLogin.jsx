import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

function MainNavbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [username, setUsername] = useState('');
  const [groupId, setGroupId] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username') || 'Guest';
    const storedGroupId = localStorage.getItem('groupId');
    setUsername(storedUsername);
    setGroupId(storedGroupId);
  }, []);

  

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('groupId');
    setUsername('Guest');
    setGroupId(null);
    navigate('/');
  };

  const handleTourClick = () => {
    console.log(groupId);
    if (groupId=='null') {
      alert('Please complete the questionnaire to be assigned to a group.');
    } else {
      navigate(`/HomePredict${groupId}`);
    }
  };

  // Modify the style for the Tour link based on the groupId presence
  const tourLinkStyle = groupId && groupId !== 'null' && groupId !== 'defaultGroupId' 
    ? { marginRight: 40, fontSize: 'large' }
    : { marginRight: 40, fontSize: 'large', pointerEvents: 'none', opacity: '0.5' };

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
                href="/"
                onClick={() => handleClick('sectionHome')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{ marginRight: 40, fontSize: 'large' }}
                href="#About"
                onClick={() => handleClick('sectionAbout2')}
              >
                About
              </Nav.Link>
              <Nav.Link style={tourLinkStyle} onClick={handleTourClick}>
                Tour
              </Nav.Link>
              <Nav.Link
                style={{ marginRight: 40, fontSize: 'large' }}
                href="#Contact"
                onClick={() => handleClick('sectionContact2')}
              >
                Contact
              </Nav.Link>
              {
                <Dropdown onToggle={() => setShowDropdown(!showDropdown)} show={showDropdown}>
                <Dropdown.Toggle style={{
                  marginRight: 40,
                  fontSize: 'medium',
                  backgroundColor: '#6750A3',
                  borderRadius: '18px',
                  border: 'white',
                  width: 'auto',
                  textAlign: 'center',
                }} variant="dark" id="dropdown-basic">
                  {username || 'Guest'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
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
