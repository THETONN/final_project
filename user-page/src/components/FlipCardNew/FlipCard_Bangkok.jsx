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
            <Card.Img className='imageCard' variant="top" src="./images/WhiteJD.jpg" />
            <Card.Body>
              <Card.Title className='card-name-each'>Nonthaburi, Thailand</Card.Title>
              <Card.Text>

                Wat Paramaiyikawat
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="card">
            <Card.Body>
              <Card.Title className='cardTitleBack'>
                Wat Paramaiyikawat</Card.Title>
              <Card.Text className='cardTextBack'>
                Wat Paramaiyikawat, an ancient Buddhist temple on Ko Kret in Nonthaburi Province, Thailand, was built in the late Ayutthaya period and initially named "Wat Pak Ao." Classified as a second-rank royal temple, its historical importance is tied to the Chao Phraya River region.
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
