import React, { useState, useEffect } from 'react';
import Card from './function/materialDesignCard';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const headers = {
    "Accept": "application/json"
}
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));
const Projects = (props) => {
    const classes = useStyles();
    const [projects, setprojects] = useState([]);
    const clubId = (props.location.state) ? props.location.state.club_id : null

    useEffect(() => {
        axios.post('/api/getProjects', {
            headers: headers,
            club_id: clubId
        })
            .then(res => {
                console.log(res)
                setprojects(res.data)
            }).catch(error => {
                console.log(error)
            });
        console.log('mount it!');
    }, []);


    return (
        <div>
            <Container fixed>
                <div className={classes.root}>
                    <Pagination count={10} />
                    <Pagination count={10} color="primary" />
                    <Pagination count={10} color="secondary" />
                    <Pagination count={10} disabled />
                </div>
                {projects.map((row, index) => (
                    <div key={index} className="project-card">
                        <Link to={{ pathname: "/projectInfo", state: { project_id: row.id, club_id: row.club_id } }}>
                            <Card title={row.name} content={row.overview} image={(row.image_id) ? window.location.origin + "/api/getImage?imageId=" + row.image_id : require('../img/public/background.jpg')} />
                        </Link>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default Projects