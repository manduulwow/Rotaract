import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import ImageUploader from 'react-images-upload';
import Popup from "reactjs-popup";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Carousel from './function/AliceCarousel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const headers = {
    "Accept": "application/json",
    'Content-Type': 'multipart/form-data'
}

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    }
}));

const EditProject = (props) => {
    const classes = useStyles();
    const [projectName, setProjectName] = useState(props.location.state.projectData.name);
    const [totalBudget, setTotalBudget] = useState(props.location.state.projectData.total_budget);
    const [fundraising, setFundraising] = useState(props.location.state.projectData.fundraising);
    const [coOrganizer, setCoOrganizer] = useState(props.location.state.projectData.co_organizers);
    const [otherParticipants, setOtherParticipants] = useState(props.location.state.projectData.other_participants);
    const [beneficaries, setBeneficaries] = useState(props.location.state.projectData.beneficaries);
    const [sponsors, setSponsors] = useState(props.location.state.projectData.sponsors);
    const [aim, setAim] = useState(props.location.state.projectData.aim);
    const [overView, setOverView] = useState(props.location.state.projectData.overview);
    const [numParticipants, setNumParticipants] = useState(props.location.state.projectData.num_participants);
    const [startedDate, setStartedDate] = useState(props.location.state.projectData.started_date);
    const [finishedDate, setFinishedDate] = useState(props.location.state.projectData.finished_date);
    const [imageFiles, setImageFiles] = useState([]);
    const [imageNames, setImageNames] = useState([]);
    const [popUpState, setPopUpState] = useState(false)
    const [imageFileUrls, setImageFileUrls] = useState([])
    const [isUploaded, setIsUploaded] = useState(false)
    const [imageIds, setImageIds] = useState(props.location.state.projectImages)    

    const [health, setHealth] = useState(props.location.state.projectTypes.some(obj => obj.id === 1))
    const [education, setEducation] = useState(props.location.state.projectTypes.some(obj => obj.id === 2))
    const [none, setNone] = useState(false)

    // const { health, education, none } = projectType;


    const popUpControl = () => {
        setPopUpState(false)
    }
    const uploadImageButton = () => {
        if (popUpState)
            setPopUpState(false)
        else
            setPopUpState(true)
    }
    const handleTypeChange = type => event => {
        switch(type) {
            case "health": setHealth(event.target.checked); break;
            case "education": setEducation(event.target.checked); break;
            case "none": setNone(event.target.checked); break;
        }
    }

    const handleStartedDateChange = (date) => {
        setStartedDate(date)
    }

    const handleFinishedDateChange = (date) => {
        setFinishedDate(date)
    }

    const handleOverviewChange = (event) => {setOverView(event.target.value)}
    const handleAimChange = (event) => {setAim(event.target.value)}
    const handleSponsorChange = (event) => {setSponsors(event.target.value)}
    const handleBeneficariesChange = (event) => {setBeneficaries(event.target.value)}
    const handleOtherParticpantsChange = (event) => {setOtherParticipants(event.target.value)}
    const handleCoOrganizerChange = (event) => {setCoOrganizer(event.target.value)}
    const handleNumParticipantsChange = (event) => {setNumParticipants(event.target.value)}
    const handleFundraisingChange = (event) => {setFundraising(event.target.value)}
    const handleTotalBudgetChange = (event) => {setTotalBudget(event.target.value)}
    const handleProjectNameChange = (event) => {setProjectName(event.target.value)}

    const handleOnClick = () => {
        const projectType = []
        if(health)      projectType.push(1)
        if(education)   projectType.push(2)
        axios.post('/api/editProjectData', {
            headers: headers,
            body: {
                project_id: props.location.state.projectData.id,
                projectName: projectName,
                totalBudget: totalBudget,
                fundraising: fundraising,
                coOrganizer: coOrganizer,
                otherParticipants: otherParticipants,
                beneficaries: beneficaries,
                sponsors: sponsors,
                aim: aim,
                overView: overView,
                numParticipants: numParticipants,
                startedDate: startedDate,
                finishedDate: finishedDate,
                imageNames: imageNames,
                projectType: projectType
            }
        })
        .then(res => {
            console.log(res)
            props.history.push({
                pathname: '/projectInfo',
                state: { project_id: props.location.state.projectData.id }
            })
        })
        .catch(error => {
            console.log(error)
        });
    }

    const handleSubmit = () => {
        setPopUpState(false)
        const tmp = []
        imageFiles.forEach((file,index) => {
            let reader = new FileReader();
            reader.onloadend = () => {
                tmp.push(reader.result)
                if(index == imageFiles.length-1)
                    setImageFileUrls(tmp)
                setIsUploaded(false)
            }
            reader.readAsDataURL(file);
        });
    }

    const onDrop = (picture) => {
        if (picture.length > 0) {
            let data = new FormData();
            let fileName = []

            console.log(picture)

            for (let i = 0; i < picture.length; i++) {
                fileName.push(picture[i].name)
                data.append('file', picture[i]);
            }
            setImageNames(fileName)
            axios.post('/api/uploadImages', data, {
                headers: headers
            })
                .then(res => {
                    console.log("response : ")
                    console.log(res)
                    if (res.status === 200) {
                        setImageFiles(picture)
                        setIsUploaded(true)
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        }
        else { console.log("Must Upload Image") }
    }

    return (
        <div>
            <Container fixed>
                <div className="MainImageField">
                    <div className="uploadImageButton">
                        <Fab color="primary" aria-label="add" onClick={uploadImageButton}>
                            <AddIcon />
                        </Fab>
                    </div>
                    {/* <img src={(imageFileUrl) ? imageFileUrl : props.location.state.image} className="about-img" /> */}
                    <div className="img-slide-container">
                        <Carousel imageSource={(imageFileUrls.length > 0) ? imageFileUrls : imageIds}/>
                    </div>
                </div>
                <div className="project-info-text">
                    <Typography variant="h6" gutterBottom>
                        Project Information
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={10} sm={3}>
                            <TextField
                                required
                                id="Name"
                                name="Name"
                                label="Project Name"
                                fullWidth
                                autoComplete="fname"
                                defaultValue={projectName}
                                onChange={handleProjectNameChange}
                            />
                        </Grid>
                        <Grid item xs={10} sm={3}>
                            <TextField
                                id="total_budget"
                                name="total_budget"
                                label="Total Budget"
                                fullWidth
                                autoComplete=""
                                defaultValue={totalBudget}
                                onChange={handleTotalBudgetChange}
                            />
                        </Grid>
                        <Grid item xs={10} sm={3}>
                            <TextField
                                id="fundraising"
                                name="fundraising"
                                label="Fundraising"
                                fullWidth
                                autoComplete=""
                                defaultValue={fundraising}
                                onChange={handleFundraisingChange}
                            />
                        </Grid>
                        <Grid item xs={10} sm={3}>
                            <TextField
                                id="num_participants"
                                name="num_participants"
                                label="Number of Participants"
                                fullWidth
                                autoComplete=""
                                defaultValue={numParticipants}
                                onChange={handleNumParticipantsChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="co-organizer"
                                name="co-organizer"
                                label="Co-Organizer"
                                fullWidth
                                autoComplete=""
                                defaultValue={coOrganizer}
                                onChange={handleCoOrganizerChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="other-participants"
                                name="other-participants"
                                label="Other Participants"
                                fullWidth
                                autoComplete=""
                                defaultValue={otherParticipants}
                                onChange={handleOtherParticpantsChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="beneficaries"
                                name="beneficaries"
                                label="Beneficaries"
                                fullWidth
                                autoComplete=""
                                defaultValue={beneficaries}
                                onChange={handleBeneficariesChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="sponsors"
                                name="sponsors"
                                label="Sponsors"
                                fullWidth
                                autoComplete=""
                                defaultValue={sponsors}
                                onChange={handleSponsorChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="aim"
                                name="aim"
                                label="Aim"
                                fullWidth
                                autoComplete=""
                                defaultValue={aim}
                                onChange={handleAimChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={health} onChange={handleTypeChange('health')} value="health" />}
                                    label="Health"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={education} onChange={handleTypeChange('education')} value="education" />}
                                    label="Education"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={none} onChange={handleTypeChange('none')} value="none" />}
                                    label="None"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    format="MM/dd/yyyy"
                                    label="Started Date"
                                    value={startedDate}
                                    onChange={handleStartedDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    format="MM/dd/yyyy"
                                    label="Finished Date"
                                    value={finishedDate}
                                    onChange={handleFinishedDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize placeholder="Overview" onChange={handleOverviewChange} aria-label="Club Introduction" rows={10} defaultValue={overView} />
                        </Grid>
                    </Grid>


                    <Button variant="outlined" color="primary" className={classes.button} onClick={handleOnClick}>
                        Submit
                    </Button>
                </div>

                <Popup open={popUpState} position="bottom center">
                    <a className="close" onClick={popUpControl}>
                        &times;
                    </a>
                    <div className="PopUp-Post">
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            withPreview={true}
                        />
                        <Button variant="outlined" color="primary" className={classes.button} onClick={handleSubmit} disabled={(isUploaded) ? false : true}>
                            Submit
                        </Button>
                    </div>
                </Popup>
            </Container>
        </div>
    )
}

export default EditProject