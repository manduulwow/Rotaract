import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default function PaperSheet(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <div className="img-container">
                <img src={props.Image} className="about-img" />
            </div>
            <Typography variant="h5" component="h3">
                {props.PaperTitle}
            </Typography>
            <Typography component="p">
                {props.Introduction}
            </Typography>
        </Paper>
    );
}