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
                        <Card.Img className="imageCard" variant="top" src="./images/Tak.jpg" />
                        <Card.Body>
                            <Card.Title>Tak, Thailand</Card.Title>
                            <Card.Text>Doi Hua Mod</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className="cardTitleBack">Doi Hua Mod</Card.Title>
                            <Card.Text className="cardTextBack">
                                Doi Hua Mod, located in Tambon Ung Pang, Umphang District, Tak Province, is a renowned fog-viewing spot within the Umphang Wildlife Sanctuary. The summit is adorned with grass, low bushes, and drought-resistant trees like pines and teak, which blossom in the rainy season. The landscape is characterized by the absence of large trees.                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ChonBuri;
