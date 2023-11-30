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
                        <Card.Img className='imageCard' variant="top" src="./images/DoiSuthep.jpeg" />
                        <Card.Body>
                            <Card.Title>Chiang Mai, Thailand</Card.Title>
                            <Card.Text>
                                Doi Suthep
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className='cardTitleBack'>Doi Suthep</Card.Title>
                            <Card.Text className='cardTextBack'>

                                Suthep is a district in western Chiang Mai named after the adjacent Doi Suthep mountain. Wat Phra That Doi Suthep, located on the mountainside, was built in 1386 to enshrine a fragment of Buddha's shoulder bone. The district, along with Doi Pui, constitutes Doi Suthep-Pui National Park. This area is known for its remarkable temple and natural beauty.                           </Card.Text>
                            {/* <Button className='cardBTN' variant="primary">Back</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FlipCard_ChiangRai;
