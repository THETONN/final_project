import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './FlipCard_CSS_All.css';

const Kalasin = () => {
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
                        <Card.Img className="imageCard" variant="top" src="./images/KaiIsland.jpg" />
                        <Card.Body>
                            <Card.Title>Krabi, Thailand</Card.Title>
                            <Card.Text>Kai Island</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className="cardTitleBack">Kai Island</Card.Title>
                            <Card.Text className="cardTextBack">
                                Located in the southern part of Poda Island in the Andaman Sea, facing Ao Nang Bay, the Chicken Island is approximately 8 kilometers away from the mainland. It is one of the three islands contributing to the formation of the sandy phenomenon known as the "Separated Sea," situated to the west and rooted in the larger island.                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Kalasin;
