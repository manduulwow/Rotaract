import React from 'react';
import './About.scss';
import handsSvg from './Assets/hands.svg';

const About = () => {
    return (
        <div className='about__view__1'>
            <div className='view__1__left' >
                <h1> We take action locally and globally </h1>
                <p> Each day, our members pour their passion, integrity, and intelligence into completing projects that have a lasting impact. We persevere until we deliver real, lasting solutions. </p>
            </div>
            <div className='view__1__right' >
                <img src={handsSvg} alt='hands.svg' />
            </div>
        </div>
    )
};

export default About;