import React, { useEffect, useState } from 'react';
import About from './About/About';
import axios from 'axios';
import { useDispatch } from 'react-redux'

const headers = {
  "Accept": "application/json"
}

const Home = () => {
  const [clubNames, setClubNames] = useState([]);
  const [showAbout, setShowAbout] = useState(true);
  const dispatch = useDispatch()
  fetch('/api/checkToken')
    .then(res => {
      if (res.status === 200)
        dispatch({ type: 'SIGNIN' })
    })

  useEffect(() => {
    let isSubscribed = true;
    axios.get('/api/clubName', {
      headers: headers
    })
      .then(res => (
        isSubscribed ? setClubNames(res.data) : null
      )).catch(error => {
        console.log(error)
      });
    return () => (isSubscribed = false)
  }, [])

  console.log('clubss,', clubNames);

  return (
    <div>
      <div>
        <About clubName={clubNames} />
      </div>
    </div>
  )
}

export default Home