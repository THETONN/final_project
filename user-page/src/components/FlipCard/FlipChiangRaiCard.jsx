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
                        <Card.Img className='imageCard' variant="top" src="./images/ChiangRaiCard.png" style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }} />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title>Chiang Rai, Thailand</Card.Title>
                            <Card.Text>
                                Wat Rong Khun (White Temple)
                            </Card.Text>
                            <Button variant="primary" style={{ width: '100%',marginTop:'25px', borderStyle: 'none', backgroundColor: '#6750A3' }}>Read Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card style={{ width: '18rem', height: '25.5rem', borderStyle: 'none', borderRadius: '25px', padding: '0', marginRight: '1rem' }}>
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title style={{ color: '#6750A3' }}>Wat Rong Khun</Card.Title>
                            <Card.Text>
                                Wat Rong Khun, better known as the White Temple, is a privately owned art exhibit in the style of a Buddhist temple in Pa O Don Chai, Mueang District, Chiang Rai Province, Thailand. It is owned by Chalermchai Kositpipat, who designed, constructed, and opened it to visitors in 1997.              </Card.Text>
                            {/* <Button variant="primary" style={{ width: '100%', borderStyle: 'none', backgroundColor: '#6750A3' }}>Back</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
