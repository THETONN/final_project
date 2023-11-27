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
                        <Card.Img className='imageCard' variant="top" src="./images/SamutPrakanCard.png" style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }} />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title>Samut Prakan, Thailand</Card.Title>
                            <Card.Text>
                                Samut Prakan Ancient City
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
                                Ancient Siam is dubbed as the world's largest outdoor museum. Close to the Crocodile Farm in Samut Prakan Province, the 320-hectare "city" features 116 structures of Thailand's famous monuments and architectural attractions. The grounds of Ancient Siam correspond roughly to the shape of the kingdom, with the monuments lying at their correct places geographically. 
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
