import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './FlipCard_CSS_All.css';

const Kanchanaburi = () => {
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
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card className="card">
            <Card.Img className="imageCard" variant="top" src="./images/Sukhothai Historical Park.jpg" />
            <Card.Body>
              <Card.Title>Sukhothai, Thailand</Card.Title>
              <Card.Text>Sukhothai Historical Park</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="card">
            <Card.Body>
              <Card.Title className="cardTitleBack">Sukhothai Historical Park</Card.Title>
              <Card.Text className="cardTextBack">

                Sukhothai Historical Park, a significant historical site in Thailand, covers the ancient Sukhothai Kingdom's ruins, the pivotal governing hub in the 18th-19th centuries. Situated in the Muang Kao sub-district, it symbolizes the historical influence of the Sukhothai Empire in northern Thailand.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Kanchanaburi;
