import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './FlipCard_CSS_All.css';

const FlipCard_Kribi = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card className="card">
                        <Card.Img className='imageCard' variant="top" src="./images/KrabiCard.png" />
                        <Card.Body>
                            <Card.Title>Kribi, Thailand</Card.Title>
                            <Card.Text>
                                Railay Beach              
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className='cardTitleBack'>Railay Beach</Card.Title>
                            <Card.Text className='cardTextBack'>
                                Railay, also known as Rai Leh, is a small peninsula between the city of Krabi and Ao Nang in Thailand. It is accessible only by boat due to high limestone cliffs cutting off mainland access.
                                These cliffs attract rock climbers from all over the world, but the area is also popular due to its beautiful beaches and quiet relaxing atmosphere.
                            </Card.Text>
                            {/* <Button className='cardBTN' variant="primary">Back</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FlipCard_Kribi;
