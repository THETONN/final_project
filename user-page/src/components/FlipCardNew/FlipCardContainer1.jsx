import React from 'react';
import FlipCard_Bangkok from './FlipCard_Bangkok';
import FlipCard_ChiangRai from './FlipCard_ChiangRai';
import FlipCard_Kribi from './FlipCard_Kribi';
import FlipCard_Kanchanaburi from './FlipCard_Kanchanaburi'
import './FlipCardContainer_All.css';

const FlipCardContainer1 = () => {
    return (
        <div className="flip-card-container">
            <FlipCard_ChiangRai
            // cityName="Chiang Rai"
            // imageSrc="./images/ChiangRaiCard.png"
            // title="Wat Rong Khun - White Temple"
            // description="Wat Rong Khun, better known as the White Temple, is a privately owned art exhibit in the style of a Buddhist temple in Pa O Don Chai, Mueang District, Chiang Rai Province, Thailand. It is owned by Chalermchai Kositpipat, who designed, constructed, and opened it to visitors in 1997."
            />

            <FlipCard_Kribi
            // cityName="Kribi"
            // imageSrc="./images/KrabiCard.png"
            // title="Railay Beach"
            // description="Railay, also known as Rai Leh, is a small peninsula between the city of Krabi and Ao Nang in Thailand. It is accessible only by boat due to high limestone cliffs cutting off mainland access. These cliffs attract rock climbers from all over the world, but the area is also popular due to its beautiful beaches and quiet relaxing atmosphere."
            />
            <FlipCard_Bangkok
            // cityName="Bangkok"
            // imageSrc="./images/BangkokCard.png"
            // title="Wat Arun Ratchawararam Ratchawaramahawihan"
            // description="Bangkok is the capital and most populous city of Thailand. It is known for its vibrant street life, beautiful temples, and delicious street food. Wat Arun is among the best-known landmarks in Thailand. The first light of the morning reflects off the surface of the temple with pearly iridescence."
            />
        </div>
    );
};

export default FlipCardContainer1;
