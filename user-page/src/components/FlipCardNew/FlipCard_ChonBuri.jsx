import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './FlipCard_CSS_All.css';

const ChonBuri = () => {
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
                        <Card.Img className="imageCard" variant="top" src="./images/Samet2.jpg" />
                        <Card.Body>
                            <Card.Title>Rayong, Thailand</Card.Title>
                            <Card.Text>Koh Kaew Yai</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className="cardTitleBack">Koh Kaew Yai</Card.Title>
                            <Card.Text className="cardTextBack">
                                Koh Samet, triangular in shape, is linked to the legendary Glass Island from Sunthorn Phu's "Phra Aphai Mani." This connection may arise from its pristine sandy beaches. Notably, Sai Kaew Beach features a mermaid sculpture from the Thai literary masterpiece.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ChonBuri;
