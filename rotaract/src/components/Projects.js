import React, { useState, useEffect } from 'react';
import Card from './function/materialDesignCard';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';


const headers = {
    "Accept": "application/json"
}
const Projects = (props) => {
    const [projects, setprojects] = useState([]);
    const clubId = (props.location.state) ? props.location.state.club_id : null
    useEffect(() => {
        axios.post('/api/getProjects', {
            headers: headers,
            club_id: clubId
        })
            .then(res => {
                setprojects(res.data)
            }).catch(error => {
                console.log(error)
            });
        console.log('mount it!');
    }, []);


    return (
        <div>
            <Container fixed>
                {projects.map((row, index) => (
                    <div key={index} className="project-card">
                        <Link to={{ pathname: "/projectInfo", state: { project_id: row.id, club_id: row.club_id } }}>
                            <Card title={row.name} content={row.overview} image={(row.images.length) ? require(row.images.split("::")[0]) : require('../img/public/background.jpg')} />
                        </Link>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default Projects