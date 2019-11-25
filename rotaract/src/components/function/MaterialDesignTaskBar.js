import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function LinearDeterminate(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <br />
        <LinearProgress variant="determinate" value={props.progress} />
        <br />
    </div>
  );
}