import React from 'react';
import './section_b.scss';
import Tree from '../../ForcedDirectedTree';

const Section_b = (props) => {

    return (
        <section className="section_b" >
            <div className="section_b_left">
                <h1> Rotaract tree </h1>
                <p>
                    Together, we see a world where people unite and take action to create lasting change across the globe, in our communities, and in ourselves.
                </p>
            </div>
            <div className='section_b_right' >
                <Tree clubName={props.clubName}/>
            </div>
        </section>
    );

};

export default Section_b;