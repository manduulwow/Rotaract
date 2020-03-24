import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const MemberType = (props) => {
    const classes = useStyles();
    const deleteItem = props.deleteItem
    const changeStartDate = props.changeStartDate
    const changeFinishedDate = props.changeFinishedDate
    const handleTypeChange = props.handleTypeChange
    // new Date((date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear())
    const handleStartedDateChange = (date,index) => {
        changeStartDate(date,index)
    }
    const handleFinishedDateChange = (date,index) => {
        changeFinishedDate(date,index)
    }
    const handleDelete = (index) => {
        deleteItem(index)
    }
    const typeChange = (event,index) => {
        handleTypeChange(event.target.value,index)
    }

    return (
        <div>
            {
                props.list.map((obj, index) => (
                    <div key={index}>
                        <FormControl className={"member-type-select " + classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Member Type</InputLabel>
                            <Select
                                id="demo-simple-select"
                                value={obj.member_type_id}
                                onChange={(e) => typeChange(e,index)}
                            >
                                <MenuItem value={'1'}>President</MenuItem>
                                <MenuItem value={'2'}>Vice President</MenuItem>
                                <MenuItem value={'3'}>Secretary</MenuItem>
                                <MenuItem value={'4'}>Treasurer</MenuItem>
                                <MenuItem value={'5'}>Sergeant at Arms</MenuItem>
                                <MenuItem value={'6'}>Board Member</MenuItem>
                                <MenuItem value={'7'}>Member</MenuItem>
                                <MenuItem value={'8'}>Supporting Member</MenuItem>
                                <MenuItem value={'9'}>Immediate Past President</MenuItem>
                            </Select>
                        </FormControl>
                        <MuiPickersUtilsProvider className="profileDate" utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                format="MM/dd/yyyy"
                                label="Started Date"
                                value={obj.started_date}
                                onChange={(e) => handleStartedDateChange(e,index)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <MuiPickersUtilsProvider className="profileDate" utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                format="MM/dd/yyyy"
                                label="Finished Date"
                                value={obj.end_date}
                                onChange={(e) => handleFinishedDateChange(e,index)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <IconButton aria-label="delete" className={"deleteBtn " + classes.margin} onClick={() => handleDelete(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                ))
            }
        </div>
    )
}

export default MemberType