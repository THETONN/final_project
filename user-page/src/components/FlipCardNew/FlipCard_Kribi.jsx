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
                        <Card.Img className='imageCard' variant="top" src="./images/SuphanBuri.jpg" />
                        <Card.Body>
                            <Card.Title>Suphan Buri, Thailand</Card.Title>
                            <Card.Text>
                                The Celestial Dragon Village
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className='cardTitleBack'>The Celestial Dragon Village
                            </Card.Title>
                            <Card.Text className='cardTextBack'>
                                During his tenure as Prime Minister, Banyar Sillapacharoen led the establishment of a museum in Suphan Buri Province, Thailand. This museum highlights the history of the local Chinese community and Chinese culture. Positioned near the main shrine along the Suphan Buri River, the initiative commemorates the 20th anniversary of Thai-Chinese diplomatic relations in 2539 B.E.
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
