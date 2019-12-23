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