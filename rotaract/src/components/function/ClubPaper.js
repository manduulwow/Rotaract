import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Skeleton from 'react-loading-skeleton';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default function PaperSheet(props) {
    const classes = useStyles();
    const [isImgLoaded, setIsImgLoaded ] = useState(false); 
    const showImg = () => (setIsImgLoaded(true));

    return (
        <Paper className={classes.root}>
            <div className="img-container">
                {(isImgLoaded) ? '' : <Skeleton height={252}/>}
                <img src={props.Image} style={isImgLoaded ? {} : {display:'none'}} onLoad={showImg} className="about-img" />
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