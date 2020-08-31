import React, { Component } from 'react';
import Card from './function/materialDesignCard';
import { Link } from 'react-router-dom';

import Image from '../img/public/default.jpg';

export default class Secret extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Yes...'
    }
  }

  componentDidMount() {
    fetch('/api/secret')
      .then(res => res.text())
      .then(res => this.setState({ message: res }))
  }


  render() {
    return (
      <div className="Box-Container">
        <div className="cardContainer">
          {/* <Link to="/uploadExcel">
            <div className="uploadTypeCard card uploadExcel">
              <Card title="Upload Excel" image={Image} />
            </div>
          </Link> */}
          <Link to="/editMemberInfo">
            <div className="uploadTypeCard card uploadExcel">
              <Card title="Add Member" image={Image}/>
            </div>
          </Link>
          {/* <Link to="/addProject"> */}
            <div className="uploadTypeCard card">
              <Card title="Add Project" />
            </div>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}