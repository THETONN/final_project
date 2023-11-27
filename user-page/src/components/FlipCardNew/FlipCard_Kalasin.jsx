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
                        <Card.Img className="imageCard" variant="top" src="./images/KalasinCard.jpg" />
                        <Card.Body>
                            <Card.Title>Kalasin, Thailand</Card.Title>
                            <Card.Text>Thepsuda Bridge</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className="cardTitleBack">Thepsuda Bridge</Card.Title>
                            <Card.Text className="cardTextBack">
                                The Thesuda Bridge is a reinforced concrete bridge used to pass through the Lam Pao Dam. Between Laem Non Wiset Tambon Non Buri District. With the Nong Bua. Nongkhai Province has two lanes of 2,040 meters.  This bridge was named on April 22, 2010 named The Bridge is considered a beautiful view of the Lam Pao Dam. Especially at sunset.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Kalasin;
