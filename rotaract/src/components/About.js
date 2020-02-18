import React, { useState, useEffect } from 'react';
import Tree from './ForcedDirectedTree';
import Transition from './function/transition';
import AboutInfoType1 from './AboutInfoType1';
import AboutInfoType2 from './AboutInfoType2';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const About = (props) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    setScrollHeight(document.getElementById('parallax').clientHeight+101)
  }, []);

  const scrollMore = () => {
    scroll.scrollMore(scrollHeight);
  }

  return (
    <div>
      <div id="about-image-container">
        <div id="parallax">
          <div id="parallex-text">
            <div id="parallex-upper-text">
              <span className="first-span">People</span> <span id="second-span">of</span> <span className="first-span">Action</span>
            </div>
            <div id="parallex-lower-text">
              Rotary is where neighbors, friends and problem-solvers share ideas join leaders, and take action to create lasting change.
            </div>
            <div id="parallex-scroll-btn" onClick={scrollMore}>
              <img src={require("../../img/about-img/Arrow.svg")}></img>
            </div>
          </div>
        </div>
        <div id="parallax-curtain"></div>
      </div>
      <div className="MainImageField">
        <div id="chart-text">
          <div id="chart-text-title">
            <span>Rotaract Tree</span>
          </div>
          <div id="chart-text-content">
            <span>
              Each day, our members pour their passion, integrity, and intelligence into completing projects that have a lasting impact. We persevere until we deliver real, lasting solutions.For more than 110 years, we’ve bridged cultures and connected continents to champion peace, fight illiteracy and poverty, promote clean water and sanitation, and fight disease.
            </span>
          </div>
        </div>
        <div id="chart">
          <Tree clubName={props.clubName} />
        </div>
      </div>
      <div id="about-info-container">
        <AboutInfoType1></AboutInfoType1>
        <AboutInfoType2></AboutInfoType2>
      </div>
    </div>
  )
}

export default About