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
            <Card.Img className="imageCard" variant="top" src="./images/KanchanaburiCard.jpg" />
            <Card.Body>
              <Card.Title>Kanchanaburi, Thailand</Card.Title>
              <Card.Text>The Float House River Kwai</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="card">
            <Card.Body>
              <Card.Title className="cardTitleBack">The Float House River Kwai</Card.Title>
              <Card.Text className="cardTextBack">
                One of the best elegant Kanchanaburi hotels-The FloatHouse River Kwai Resort aims to be the world’s best floating resort. The FloatHouseRiver Kwai Resort is a fancy boutique hideaway and can be found in very few places in the world. The only way to reach the resort is by boat as it actually floats on a flowing river surrounded by thick green jungle. 
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Kanchanaburi;
