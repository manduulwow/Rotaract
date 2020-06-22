import React from 'react';
import './section_c.scss';
import section3Img from './Assets/section3.svg';

const Section_c = () => {

    return (
        <section className='section_c' >
            <div className='section_c_left' >
                <img src={section3Img} alt='section3' />
            </div>
            <div className='section_c_right' >
                <h1> No challenge is too big for us </h1>
                <p>
                    For more than 110 years, we’ve bridged cultures and connected continents to champion peace, fight illiteracy and poverty, promote clean water and sanitation, and fight disease.
                </p>
            </div>
        </section>
    )
};

export default Section_c;