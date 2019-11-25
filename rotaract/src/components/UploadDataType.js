import React, { Component } from 'react';
import Card from './function/materialDesignCard';
import { Link } from '@material-ui/core';

import Image from '../img/public/excel.png';

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
        .then(res => this.setState({message: res}))
    }
    
    changeRoute = () => {
      this.props.history.push('/uploadExcel');
    }

    render() {
      return (
        <div className="Box-Container">
          <div className="cardContainer">
            <div className="uploadTypeCard card" onClick={this.changeRoute}>
              <Card title="Upload Excel" image={Image} />
            </div>
            <Link to="/uploadExcel">
              <div className="uploadTypeCard card">
                <Card title="Upload Form"/>
              </div>
            </Link>
          </div>
        </div>
      );
    }
}