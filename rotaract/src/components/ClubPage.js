import React, { useState, useEffect } from 'react';
import PaperSheet from './function/ClubPaper'
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';

const headers = {
  "Accept": "application/json"
}

const ClubPage = (props) => {
  useEffect(() => {
    axios.get('/api/getClubData', {
      headers: headers
    })
      .then(res => {
        console.log(res.data)
        setclubData(res.data.data)
      }).catch(error => {
        console.log(error)
      });
    console.log('mount it!');
  }, []);

  const [clubData, setclubData] = useState([]);

  const redirectToClubPage = (id) => {
    console.log(id)
  }

  return (
    <Container fixed>
      {clubData.map((data, index) => (
        <div key={index} className="club-paper" id={data.id} onClick={redirectToClubPage.bind(this, data.id)}>
          <Link to={{ pathname: "/clubInfo", state: { club_id: data.id, all : false } }}>
            <PaperSheet PaperTitle={"Rotaract Club of " + data.name} Introduction={data.introduction} Image={require('../../img/club-paper-img/2.png')} />
          </Link>
        </div>))}
    </Container>
  )
}

export default ClubPage