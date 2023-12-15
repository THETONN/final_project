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
                        <Card.Img className='imageCard' variant="top" src="./images/Similan Islands.jpg" />
                        <Card.Body>
                            <Card.Title>Phuket, Thailand</Card.Title>
                            <Card.Text>
                                Similan Islands
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className='cardTitleBack'>Similan Islands
                            </Card.Title>
                            <Card.Text className='cardTextBack'>
                                Koh Similan, also called the Similan Islands or "Nine Islands" in Malay, is the focal point of the Similan Islands National Park and the largest in the group. The name "Similan" translates to "nine," reflecting the islands' sequence. Notably, the island is recognized for its unique sail rock formations.
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
