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
                        <Card.Img className='imageCard' variant="top" src="./images/KrabiCard.png" style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }} />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title>Krabi, Thailand</Card.Title>
                            <Card.Text>
                                Railay Beach
                            </Card.Text>
                            <Button variant="primary" style={{ width: '100%', marginTop: '25px', borderStyle: 'none', backgroundColor: '#6750A3' }}>Read Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card style={{ width: '18rem', height: '25.5rem', borderStyle: 'none', borderRadius: '25px', padding: '0', marginRight: '1rem' }}>
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title style={{ color: '#6750A3' }}>Wat Rong Khun</Card.Title>
                            <Card.Text>
                                Railay, also known as Rai Leh, is a small peninsula between the city of Krabi and Ao Nang in Thailand. It is accessible only by boat due to high limestone cliffs cutting off mainland access.These cliffs attract rock climbers from all over the world, but the area is also popular due to its beautiful beaches and quiet relaxing atmosphere.               </Card.Text>
                            {/* <Button variant="primary" style={{ width: '100%', borderStyle: 'none', backgroundColor: '#6750A3' }}>Back</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
