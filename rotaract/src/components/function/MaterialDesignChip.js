import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips(props) {
  const classes = useStyles();

  const introduction = () => {
    props.chipSelecter('Introduction')
  };

  const members = () => {
    props.chipSelecter('Members')
  };

  const projects = () => {
    props.chipSelecter('Projects')
  };

  return (
    <div className={classes.root}>
      <Chip label="Club Introduction" component="a" className={(props.introSelected) ? 'chipSelected':''} onClick={introduction} clickable />
      <Chip label="Members" component="a" className={(props.memberSelected) ? 'chipSelected':''} onClick={members} clickable />
      <Chip label="Projects" component="a" className={(props.projectSelected) ? 'chipSelected':''} onClick={projects} clickable />
    </div>
  );
}