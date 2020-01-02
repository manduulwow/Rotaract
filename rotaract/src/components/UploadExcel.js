import React, { Component } from 'react';
import axios from 'axios';
import TaskBar from './function/MaterialDesignTaskBar';
import MTable from './function/MaterialDesignTable';
import Chip from './function/MaterialDesignChip';

const headers = {
  "Accept": "application/json"
}

export default class uploadExcel extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...',
      progress: 0,
      dataLoaded: false,
      data: [[]],
      introSelected: false,
      memberSelected: false,
      projectSelected: false,
      api: ''
    }
  }

  chipSelected(value) {
    this.setState({introSelected : false})
    this.setState({memberSelected : false})
    this.setState({projectSelected : false})
    switch(value) {
      case 'Introduction':
        this.setState({introSelected : true})
        this.setState({api : 'save_intro'})
        break
      case 'Members':
        this.setState({memberSelected : true})
        this.setState({api : 'save_member'})
        break
      case 'Projects':
        this.setState({projectSelected : true})
        this.setState({api : 'save_project'})
        break
      default:
        this.setState({introSelected : false})
        this.setState({memberSelected : false})
        this.setState({projectSelected : false})
    }
  }

  componentDidMount() {
    axios.get('/api/getUserClubData', {
      headers: headers
    })
    .then(res => {
      this.setState({message: res.data[0].name})
    }).catch(error => {
      console.log(error)
    });
  }

  fileSelectedHandler = (event) => {   
    this.setState({progress: 0})
    const data = new FormData()
    const fileObj = event.target.files[0]
    data.append('excel', fileObj, fileObj.name)
    axios.post('/api/excelfile', data, {
      headers: headers,
      onUploadProgress: progressEvent => {
        this.setState({progress : Math.round(progressEvent.loaded / progressEvent.total * 100)})
      }
    })
    .then(res => {
      console.log(res)
      this.setState({dataLoaded : true})
      this.setState({data: res.data.data})
    }).catch(error => {
      console.log(error)
    });
  }

  fileUploadHandler = () => {
    axios.post('/api/'+this.state.api, this.state.data, {
      headers: headers
    })
    .then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>Upload excel</p>
        <Chip chipSelecter={this.chipSelected.bind(this)} introSelected={this.state.introSelected} memberSelected={this.state.memberSelected} projectSelected={this.state.projectSelected} />
        <input type="file" name="sampleFile" onChange={this.fileSelectedHandler.bind(this)} />
        <button onClick={this.fileUploadHandler}>Upload</button>
        <TaskBar progress={this.state.progress}/>
        {
          this.state.dataLoaded && 
          <MTable data={this.state.data} />
        }
      </div>
    );
  }
}