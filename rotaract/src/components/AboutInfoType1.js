import React, { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';


const AboutInfoType1 = (props) => {
    const [animate, setAnimate] = useState("");

    const onchange = (isVisible) => {
        if(isVisible)
            setAnimate('visible')
    }

    return (
        <VisibilitySensor partialVisibility onChange={onchange}>
            <div className={"about-info-section1 about-animate-field " + animate}>
                <div className="about-info1-left">
                    <img src={require("../../img/about-img/3.jpg")}></img>
                </div>
                <div className="about-info1-right">
                    <span>
                    Club activities, social events, and volunteer projects offer networking opportunities that build personal and professional connections. And Rotarians can extend those networks by visiting other clubs around the globe.
                    Together, we see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.
                    For more than 110 years, we’ve bridged cultures and connected continents to champion peace, fight illiteracy and poverty, promote clean water and sanitation, and fight disease.
                    </span>
                </div>
            </div>
        </VisibilitySensor>
    )
}

export default AboutInfoType1