import React from 'react';
import FlipCard_Bangkok from './FlipCard_Bangkok';
import FlipCard_ChiangRai from './FlipCard_ChiangRai';
import FlipCard_Kribi from './FlipCard_Kribi';
import FlipCard_Kanchanaburi from './FlipCard_Kanchanaburi'
import FlipCard_Kalasin from './FlipCard_Kalasin'
import FlipCard_ChonBuri from './FlipCard_ChonBuri'
import './FlipCardContainer_All.css';

const FlipCardContainer2 = () => {
    return (
        <div className="flip-card-container">
            <FlipCard_Kanchanaburi
                // cityName="Kanchanaburi"
                // imageSrc="./images/KanchanaburiCard.jpg"
                // title="Kanchanaburi, Thailand"
                // description="Railay, also known as Rai Leh, is a small peninsula between the city of Krabi and Ao Nang in Thailand. It is accessible only by boat due to high limestone cliffs cutting off mainland access. These cliffs attract rock climbers from all over the world, but the area is also popular due to its beautiful beaches and quiet relaxing atmosphere."
            />
            <FlipCard_Kalasin
                // cityName="Kanchanaburi"
                // imageSrc="./images/KanchanaburiCard.jpg"
                // title="Kanchanaburi, Thailand"
                // description="Railay, also known as Rai Leh, is a small peninsula between the city of Krabi and Ao Nang in Thailand. It is accessible only by boat due to high limestone cliffs cutting off mainland access. These cliffs attract rock climbers from all over the world, but the area is also popular due to its beautiful beaches and quiet relaxing atmosphere."
            />
            <FlipCard_ChonBuri
                // cityName="ChonBuri"
                // imageSrc="./images/ChonBuriCard.jpg"
                // title="Chon Buri, Thailand"
                // description="Pattaya is a city on Thailand’s eastern Gulf coast known for its beaches. A quiet fishing village as recently as the 1960s, it’s now lined with resort hotels, high-rise condos, shopping malls, cabaret bars and 24-hour clubs. Nearby, hillside Wat Phra Yai Temple features an 18m-tall golden Buddha. The area also features several designer golf courses, some with views of Pattaya Bay."
            />
        </div>
    );
};

export default FlipCardContainer2;
