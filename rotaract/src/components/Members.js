import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const headers = {
    "Accept": "application/json"
}

const Members = (props) => {
    const classes = useStyles();
    const [members, setMembers] = useState([]);
    const clubId = (props.clubId) ? props.clubId : null

    useEffect(() => {
        axios.post('/api/getMembers', {
            headers: headers,
            club_id: clubId
        })
            .then(res => {
                console.log(res)
                setMembers(res.data.data)
            }).catch(error => {
                console.log(error)
            });
    }, []);

    return (
        <div>
            <Container fixed>
                <List className={classes.root}>
                    {members.map((row, index) => (
                        <div key={index} className="member-row">
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={require('../../img/club-member-img/default.jpg')} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={row.first_name + " " + row.last_name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                {row.member_type}
                                            </Typography>
                                            {" — Joined Date " + row.joined_date}
                                        </React.Fragment>
                                    }
                                />
                                <ListItemSecondaryAction >
                                    <Link to={{
                                        pathname: "/memberProfile", state: {
                                            memberId: row.id
                                        }
                                    }}>
                                        <IconButton edge="end" aria-label="comments">
                                            <CommentIcon />
                                        </IconButton>
                                    </Link>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    ))}
                </List>
            </Container>
        </div>
    );
};

export default Members