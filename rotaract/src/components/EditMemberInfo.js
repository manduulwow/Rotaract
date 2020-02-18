import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import ImageUploader from 'react-images-upload';
import Popup from "reactjs-popup";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MemberType from './MemberTypeList';
import { FormControlLabel } from '@material-ui/core';


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

const MemberEditPage = (props) => {
    const classes = useStyles();
    const [member, setMember] = useState(props.location.state.member)
    const [types, setTypes] = useState((props.location.state.types && props.location.state.types.length > 0) ? props.location.state.types : [{ member_id: member.id, member_type_id: 7, start_date: new Date, end_date: new Date }])
    const [popUpState, setPopUpState] = useState(false)
    const [imageFileUrl, setImageFileUrl] = useState()
    const [isUploaded, setIsUploaded] = useState(false)
    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState()
    const deleteItem = (index) => {
        if(types.length > 1)
            setTypes(types.filter((el, i) => i != index))
    }
    const changeStartDate = (date, index) => {
        let ar = [...types]
        ar[index].start_date = date
        setTypes(ar)
    }
    const changeFinishedDate = (date, index) => {
        let ar = [...types]
        ar[index].end_date = date
        setTypes(ar)
    }
    const handleTypeChange = (type, index) => {
        let ar = [...types]
        ar[index].member_type_id = type
        setTypes(ar)
    }
    const popUpControl = () => {
        setPopUpState(false)
    }
    const uploadImageButton = () => {
        if (popUpState)
            setPopUpState(false)
        else
            setPopUpState(true)
    }
    const handleMemberIdChange = (event) => {
        let tmp = { ...member }
        tmp.member_id = event.target.value
        setMember(tmp)
    }
    const handleFirstNameChange = (event) => {
        let tmp = { ...member }
        tmp.first_name = event.target.value
        setMember(tmp)
    }
    const handleLastNameChange = (event) => {
        let tmp = { ...member }
        tmp.last_name = event.target.value
        setMember(tmp)
    }
    const handleRegisterChange = (event) => {
        let tmp = { ...member }
        tmp.register_num = event.target.value
        setMember(tmp)
    }
    const handleJoinedDateChange = (date) => {
        let tmp = { ...member }
        tmp.joined_date = date
        setMember(tmp)
    }
    const addMemberType = () => {
        setTypes([...types, {
            member_id: member.id,
            member_type_id: 7,
            start_date: new Date,
            end_date: new Date
        }])
    }
    const handleOnClick = () => {
        axios.post('/api/editMemberData', {
            headers: headers,
            body: {
                member: member,
                types: types,
                fileName: fileName
            }
        })
        .then(res => {
            props.history.push({
                pathname: '/memberProfile',
                state: { 
                    memberId: props.location.state.member.id,
                    club_id: props.location.state.club_id
                }
            })
        })
        .catch(error => {
            console.log(error)
        });
    }
    const handleSubmit = () => {
        setPopUpState(false)
        const tmp = []
        let reader = new FileReader();
        reader.onloadend = () => {
            setImageFileUrl(reader.result)
            setIsUploaded(false)
        }
        reader.readAsDataURL(file);
    }
    const onDrop = (picture) => {
        if (picture.length > 0) {
            let data = new FormData();

            data.append('file', picture[0])
            setFileName(picture[0].name)
            axios.post('/api/uploadImages', data, {
                headers: headers
            })
                .then(res => {
                    if (res.status === 200) {
                        setFile(picture[0])
                        setIsUploaded(true)
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        }
        else { console.log("Must Upload Image") }
    }

    const image = (member && member.image_id) ? window.location.origin + "/api/getImage?imageId=" + member.image_id : require('../../img/club-member-img/default.jpg')
    return (
        <div>
            <Container fixed>
                <div id="profileinfo-container">
                    <div className="profileImage-container" onClick={uploadImageButton}>
                        <div id="profile-img-circle">
                            <img src={(imageFileUrl) ? imageFileUrl : image} className="about-img" />
                        </div>
                    </div>
                    <div id="profile-input-container">
                        <TextField
                            className="profileInput"
                            id="MemberId"
                            name="MemberId"
                            label="Member ID"
                            fullWidth
                            defaultValue={member.member_id}
                            onChange={handleMemberIdChange}
                        />
                        <TextField
                            className="profileInput"
                            required
                            id="FirstName"
                            name="FirstName"
                            label="FirstName"
                            fullWidth
                            defaultValue={member.first_name}
                            onChange={handleFirstNameChange}
                        />
                        <TextField
                            className="profileInput"
                            required
                            id="LastName"
                            name="LastName"
                            label="LastName"
                            fullWidth
                            defaultValue={member.last_name}
                            onChange={handleLastNameChange}
                        />
                        <TextField
                            className="profileInput"
                            required
                            id="registerNum"
                            name="registerNum"
                            label="Register Number"
                            fullWidth
                            defaultValue={member.register_num}
                            onChange={handleRegisterChange}
                        />
                        <MuiPickersUtilsProvider className="profileDate" utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                format="MM/dd/yyyy"
                                label="Started Date"
                                value={member.joined_date}
                                onChange={handleJoinedDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <div id="member-type-container">
                            <Fab color="primary" aria-label="add" onClick={addMemberType}>
                                <AddIcon />
                            </Fab>
                            <div id="member-type-wrapper">
                                <MemberType list={types} deleteItem={deleteItem} handleTypeChange={handleTypeChange} changeFinishedDate={changeFinishedDate} changeStartDate={changeStartDate} />
                            </div>
                        </div>

                        <Button variant="outlined" color="primary" className={classes.button} onClick={handleOnClick}>
                            Submit
                        </Button>
                    </div>
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

export default MemberEditPage