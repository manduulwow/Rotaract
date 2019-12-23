import React, { useState, useEffect } from 'react';
import PaperSheet from './function/ClubPaper'
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


const headers = {
    "Accept": "application/json"
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

const ClubEditPage = (props) => {
    const classes = useStyles();
    const [charterDate, setCharterDate] = useState(props.location.state.charter_date);
    const [clubName, setClubName] = useState(props.location.state.club_name);
    const [clubIntroduction, setClubIntroduction] = useState(props.location.state.introduction);
    const [imageFile, setImageFile] = useState(null);
    const [imageNames, setImageNames] = useState([]);
    const [popUpState, setPopUpState] = useState(false)
    const [imageFileUrl, setImageFileUrl] = useState()
    const [isUploaded, setIsUploaded] = useState(false) 
    const handleDateChange = date => {
        setCharterDate(date);
    };
    const handleNameChange = (event) => {
        setClubName(event.target.value);
    };
    const handleIntroChange = (event) => {
        setClubIntroduction(event.target.value);
    };
    const popUpControl = () => {
        setPopUpState(false)
    }
    const uploadImageButton = () => {
        if (popUpState)
            setPopUpState(false)
        else
            setPopUpState(true)
    }
    const handleOnClick = () => {
        axios.post('/api/editClubData', {
            headers: headers,
            body: {
                club_id: props.location.state.club_id,
                charterDate: charterDate,
                clubName: clubName,
                clubIntroduction: clubIntroduction,
                fileNames: imageNames
            }
        })
        .then(res => {
            props.history.push({
                pathname: '/clubInfo',
                state: { club_id: props.location.state.club_id }
            })
        })
        .catch(error => {
            console.log(error)
        });
    }
    const handleSubmit = () => {
        setPopUpState(false)
        let reader = new FileReader();

        reader.readAsDataURL(imageFile)
        reader.onloadend = () => {
            setImageFileUrl(reader.result)
            setIsUploaded(false)
        }
    }

    const onDrop = (picture) => {
        if (picture.length > 0) {
            let data = new FormData();
            let fileName = []
            data.append('file', picture[0]);

            for(let i = 0; i < picture.length; i++) {
                fileName.push(picture[i].name)
            }
            setImageNames(fileName)
            axios.post('/api/uploadImages', data,{
                headers: headers
            })
            .then(res => {
                if(res.status === 200) {
                    setImageFile(picture[0])
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
                <div className="MainImageField" onClick={uploadImageButton}>
                    <img src={(imageFileUrl) ? imageFileUrl : props.location.state.image} className="about-img" />  
                </div>
                <div className="club-info-text">
                    <TextField
                        required
                        id="standard-required"
                        label="Club Name Required"
                        defaultValue={props.location.state.club_name}
                        className={classes.textField}
                        margin="normal"
                        onChange={handleNameChange}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={charterDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>

                    <TextareaAutosize onChange={handleIntroChange} aria-label="Club Introduction" rows={10} defaultValue={props.location.state.introduction} />

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
                        <Button variant="outlined" color="primary" className={classes.button} onClick={handleSubmit} disabled={(isUploaded) ? false:true}>
                            Submit
                        </Button>
                    </div>
                </Popup>
            </Container>
        </div>
    )
}

export default ClubEditPage