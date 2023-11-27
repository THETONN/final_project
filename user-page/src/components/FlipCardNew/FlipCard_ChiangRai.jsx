import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './FlipCard_CSS_All.css';

const FlipCard_ChiangRai = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`flip-card ${isFlipped ? 'flipped' : ''}`}
            onMouseOver={() => setIsFlipped(true)}
            onMouseOut={() => setIsFlipped(false)}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card className="card">
                        <Card.Img className='imageCard' variant="top" src="./images/ChiangRaiCard.png" />
                        <Card.Body>
                            <Card.Title>Chiang Rai, Thailand</Card.Title>
                            <Card.Text>
                                Wat Rong Khun - White Temple
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card className="card"> 
                        <Card.Body>
                            <Card.Title className='cardTitleBack'>Wat Rong Khun <br /> White Temple</Card.Title>
                            <Card.Text className='cardTextBack'>
                                Wat Rong Khun, better known as the White Temple, is a privately owned art exhibit in the style of a Buddhist temple in Pa O Don Chai, Mueang District, Chiang Rai Province, Thailand. It is owned by Chalermchai Kositpipat, who designed, constructed, and opened it to visitors in 1997.
                            </Card.Text>
                            {/* <Button className='cardBTN' variant="primary">Back</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FlipCard_ChiangRai;
