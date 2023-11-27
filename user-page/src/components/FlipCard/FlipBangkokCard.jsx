import React, { useState } from 'react';
import './FlipAllCard.css';
import { Card, Button } from 'react-bootstrap';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card style={{ width: '18rem', height: '25.5rem', borderStyle: 'none', borderRadius: '25px', padding: '0', marginRight: '1rem' }}>
            <Card.Img className='imageCard' variant="top" src="./images/BangkokCard.png" style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }} />
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>Bangkok, Thailand</Card.Title>
              <Card.Text>
                Wat Arun Ratchawararam Ratchawaramahawihan
              </Card.Text>
              <Button variant="primary" style={{ width: '100%', borderStyle: 'none', backgroundColor: '#6750A3' }}>Read Details</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card style={{ width: '18rem', height: '25.5rem', borderStyle: 'none', borderRadius: '25px', padding: '0', marginRight: '1rem' }}>
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title style={{ color: '#6750A3' }}>Wat Arun Ratchawararam Ratchawaramahawihan</Card.Title>
              <Card.Text>
                Wat Arun is a Buddhist temple in Bangkok Yai district of Bangkok, Thailand, on the Thonburi west bank of the Chao Phraya River. The temple derives its name from the Hindu god Aruna, often personified as the radiations of the rising sun. Wat Arun is among the best known of Thailand's landmarks. The first light of the morning reflects off the surface of the temple with pearly iridescence.
              </Card.Text>
              {/* <Button variant="primary" style={{ width: '100%', borderStyle: 'none', backgroundColor: '#6750A3' }}>Back</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
