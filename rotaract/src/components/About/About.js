import React from 'react';
import Section_a from './section_a/section_a';
import Section_b from './section_b/section_b';
import Section_c from './section_c/section_c';

const About = (props) => {
    return (
        <React.Fragment>
            <Section_a />
            <Section_b clubName={props.clubName} />
            <Section_c />
        </React.Fragment>
    )
};

export default About;