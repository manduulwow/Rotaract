import React from 'react';
import './section_a.scss';
import handsSvg from './Assets/hands.svg';
import vectorLeft from './Assets/a-vector-left.svg';
import vectorRight from './Assets/a-vector-right.svg';

const Section_a = () => {
    return (
        <section className='about__view__1'>
            <div className='about__view__1_assets' >
                <img className='vector_left' src={vectorLeft} alt='' />
                <img className='vector_right' src={vectorRight} alt='' />
            </div>
            <div className='view__1__left' >
                <h1> We take action locally and globally </h1>
                <p> Each day, our members pour their passion, integrity, and intelligence into completing projects that have a lasting impact. We persevere until we deliver real, lasting solutions. </p>
            </div>
            <div className='view__1__right' >
                <img src={handsSvg} alt='hands.svg' />
            </div>
        </section>
    )
};

export default Section_a;