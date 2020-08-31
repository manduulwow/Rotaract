import React, { useState, useEffect, Suspense } from 'react';
import PaperSheet from './function/ClubPaper'
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';

const headers = {
  "Accept": "application/json"
}

const ClubPage = () => {
  useEffect(() => {
    axios.get('/api/getClubData', {
      headers: headers
    })
      .then(res => {
        setclubData(res.data.data)
      }).catch(error => {
        console.log(error)
      });
  }, []);

  const [clubData, setclubData] = useState([]);

  return (
    <Container fixed>
      {clubData.map((data, index) => (
        <div key={index} className="club-paper club-paper-float" id={data.id}>
          <Link to={{ pathname: "/clubInfo", state: { club_id: data.id, all : false } }}>
            <PaperSheet PaperTitle={"Rotaract Club of " + data.name} Introduction={data.introduction} Image={require('../../img/club-paper-img/2.png')} />
          </Link>
        </div>))}
    </Container>
  )
}

export default ClubPage