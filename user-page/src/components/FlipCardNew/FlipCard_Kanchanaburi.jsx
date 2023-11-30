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
            <Card.Img className="imageCard" variant="top" src="./images/Kanchanaburi.jpg" />
            <Card.Body>
              <Card.Title>Kanchanaburi, Thailand</Card.Title>
              <Card.Text>The Bridge Over the River Kwai</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="card">
            <Card.Body>
              <Card.Title className="cardTitleBack">The Bridge Over the <br /> River Kwai</Card.Title>
              <Card.Text className="cardTextBack">
                The Kwae River bridge in Kanchanaburi, Thailand, showcases a unique semi-circular steel structure. Serving as a crucial path for the Thonburi - Nam Tok railway, it blends truss and reinforced concrete sections. Located around 4 kilometers north of the city center, the bridge holds historical importance as part of the Death Railway.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Kanchanaburi;
