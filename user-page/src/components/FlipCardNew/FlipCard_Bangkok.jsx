import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './FlipCard_CSS_All.css';

const FlipCard_Bangkok = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''} flip-card-bangkok`}
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <div className="flip-card-inner ">
        <div className=" flip-card-front">
          <Card className="card">
            <Card.Img className='imageCard' variant="top" src="./images/BangkokCard.png" />
            <Card.Body>
              <Card.Title className='card-name-each'>Bangkok, Thailand</Card.Title>
              <Card.Text>
                Wat Arun Ratchawararam Ratchawaramahawihan
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="card">
            <Card.Body>
              <Card.Title className='cardTitleBack'>Wat Arun Ratchawararam Ratchawaramahawihan</Card.Title>
              <Card.Text className='cardTextBack'>
                Bangkok is the capital and most populous city of Thailand. It is known for its vibrant street life, beautiful temples, and delicious street food.Wat Arun is among the best known of Thailand's landmarks. The first light of the morning reflects off the surface of the temple with pearly iridescence.
              </Card.Text>
              {/* <Button className='cardBTN' variant="primary">Back</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlipCard_Bangkok;
