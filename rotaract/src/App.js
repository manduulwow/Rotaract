import React, { Suspense, lazy } from 'react'
import withAuth from './withAuth'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./components/Home'))
const ClubPage = lazy(() => import('./components/ClubPage'))
const SignUp = lazy(() => import('./components/SignUp'))
const Secret = lazy(() => import('./components/UploadDataType'))
const Login = lazy(() => import('./components/Login'))
const SignIn = lazy(() => import('./components/SignIn'))
const UploadExcel = lazy(() => import('./components/UploadExcel'))
const ClubInfo = lazy(() => import('./components/ClubInfo'))
const Projects = lazy(() => import('./components/Projects'))
const ProjectInfo = lazy(() => import('./components/ProjectInfo'))
const ClubEditPage = lazy(() => import('./components/EditClubInfo'))
const EditProject = lazy(() => import('./components/EditProjectInfo'))
const Members = lazy(() => import('./components/Members'))
const Profile = lazy(() => import('./components/MemberProfile'))
const MemberEditPage = lazy(() => import('./components/EditMemberInfo'))
const EmptyComponent = lazy(() => import('./components/EmptyComponent'))


const App = () => (
  <div>
    <Header />
    <div id="body-container">
      <Suspense fallback={<div className="loading"></div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={Home} />
          <Route exact path="/clubs" component={ClubPage} />
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
          <Route path="/emptyComponent" component={EmptyComponent} />
        </Switch>
      </Suspense>
    </div>
    <Footer />
  </div>
);
export default App;

