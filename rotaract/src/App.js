import React, { Component } from 'react';
import Home from './components/Home';
import Secret from './components/UploadDataType';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Login from './components/Login';
import UploadExcel from './components/UploadExcel';
import withAuth from './withAuth';
import Header from './components/Header';
import ClubPage from './components/ClubPage';
import ClubInfo from './components/ClubInfo';
import Projects from './components/Projects';
import ProjectInfo from './components/ProjectInfo';
import ClubEditPage from './components/EditClubInfo';
import EditProject from './components/EditProjectInfo';
import Footer from './components/Footer'
import Members from './components/Members'
import Profile from './components/MemberProfile'
import MemberEditPage from './components/EditMemberInfo'

import { Route, Switch } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/clubs" component={ClubPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" render={(props) => <Login {...props} isAuthed={true} />} />
          <Route path="/signin" render={(props) => <SignIn {...props} isAuthed={true} />} />
          <Route path="/uploadExcel" component={withAuth(UploadExcel)} />
          <Route path="/clubInfo" component={ClubInfo} />
          <Route path="/projects" component={Projects} />
          <Route path="/projectInfo" component={ProjectInfo} />
          <Route path="/editClubInfo" component={withAuth(ClubEditPage)} />
          <Route path="/editProjectInfo" component={withAuth(EditProject)} />
          <Route path="/members" component={Members} />
          <Route path="/memberProfile" component={Profile} />
          <Route path="/editMemberInfo" component={MemberEditPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

