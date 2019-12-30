import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import EditButton from './function/MaterialDesignEdit';
import Carousel from './function/AliceCarousel';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  }
}));

const headers = {
  "Accept": "application/json"
}

const ProjectInfo = (props) => {
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.isLogged)
  const classes = useStyles();
  const [userClubId, setUserClubId] = useState(null);
  const [projectData, setProjectData] = useState({});
  const [projectImages, setProjectImages] = useState([]);
  const [projectTypes, setProjectTypes] = useState([]);
  fetch('/api/checkToken')
    .then(res => {
      if (res.status === 200)
        dispatch({ type: 'SIGNIN' })
      return res.text()
    }).then(res => { setUserClubId(res) })

  useEffect(() => {
    axios.post('/api/getProjectData', {
      headers: headers,
      projectId: props.location.state.project_id
    })
      .then(res => {
        setProjectData(res.data.project[0])
        setProjectImages(res.data.images)
        setProjectTypes(res.data.projectType)
        // console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  return (
    <div>
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className="img-slide-container">
                  <Carousel imageSource={projectImages}/>
                </div>
              </Paper>
              <div className="">
                <Link to={{
                  pathname: "/editProjectInfo", state: {
                    projectData: projectData,
                    projectImages: projectImages,
                    projectTypes: projectTypes
                  }
                }}>
                  {(isLogged) ? <EditButton /> : ""}
                </Link>
              </div>
            </Grid>
            <Grid item xs={9}>
              {/* <Paper className={classes.paper}> */}
                <Typography variant="h5" gutterBottom>
                  {projectData.name}
                </Typography>
                <Divider />
                <Typography component="p">
                  {projectData.overview}
                </Typography>
              {/* </Paper> */}
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography variant="h6" gutterBottom>
                  Co-Organizers
                </Typography>
                <Divider />
                {
                  (projectData.co_organizers) ?
                    projectData.co_organizers.split(",").map((value, index) => (
                      < ListItem key={index}>
                        <ListItemText
                          primary={value}
                          secondary={null}
                        />
                      </ListItem>

                    )) : "None"
                }
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                {
                  (projectTypes.length > 0) ? projectTypes.map(type => type.type+" ") : "None"
                }
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                {"Total Budget: " + ((projectData.total_budget) ? projectData.total_budget : "none")}
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                {((projectData.started_date) ? projectData.started_date : "none") + " - " + ((projectData.finished_date) ? projectData.finished_date : "none")}
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography variant="h6" gutterBottom>
                  Beneficaries
                </Typography>
                <Divider />
                {
                  (projectData.beneficaries) ?
                    projectData.beneficaries.split(",").map((value, index) => (
                      < ListItem key={index}>
                        <ListItemText
                          primary={value}
                          secondary={null}
                        />
                      </ListItem>
                    )) : "None"
                }
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div >
  );
}

export default ProjectInfo