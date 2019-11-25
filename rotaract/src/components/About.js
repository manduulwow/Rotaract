import React, { Component } from 'react';
import Tree from './ForcedDirectedTree';
import Transition from './function/transition';

export default class About extends Component {
    constructor() {
      super();
      this.state = {
        message: 'Loading...'
      }
    }
    componentDidMount() {
      //GET message from server using fetch api
      // fetch('/api/home')
      //   .then(res => res.text())
      //   .then(res => this.setState({message: res}))
      //   .then();
    }
    render() {
      return (
        <div>
            <div className="MainImageField">
              <Tree clubName={this.props.clubName}/>
            </div>

            <div>
              {/* <Transition /> */}
            </div>
        </div>
      );
    }
  }