import React, { useState, useEffect, Suspense, lazy } from 'react';
import Paper from '@material-ui/core/Paper';
import EditButton from './function/MaterialDesignEdit'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Slider = lazy(() => import('./Slider'))
const BoardMemberSlider = lazy(() => import('./BoardMemberSlider'))



import { animateScroll as scroll } from 'react-scroll';


const headers = {
    "Accept": "application/json"
}

const ClubInformation = (props) => {
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.isLogged)
    const [clubData, setclubData] = useState([]);
    const [clubId, setClubId] = useState(null);
    fetch('/api/checkToken')
        .then(res => {
            if (res.status === 200)
                dispatch({ type: 'SIGNIN' })
            return res.text()
        }).then(res => { setClubId(res) })

    useEffect(() => {
        scroll.scrollToTop();
        axios.post('/api/getClubData', {
            headers: headers,
            club_id: props.location.state.club_id
        })
            .then(res => {
                setclubData(res.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    const name = (clubData[0]) ? clubData[0].name : "Not given"
    const introduction = (clubData[0]) ? clubData[0].introduction : "Not given"
    const charterDate = (clubData[0] && clubData[0].charterDate) ? clubData[0].charterDate.substring(0, 10) : "Not given"
    let image = (clubData[0] && clubData[0].id) ? window.location.origin + "/api/getImage?imageId=" + clubData[0].id : require('../../img/club-info-img/5.jpg')
    return (
        <div>
            <Container fixed>
                <div className="MainImageField">
                    {
                        (clubData[0]) ? <img src={image} className="about-img" /> : <Skeleton height={500} />
                    }
                </div>
                <div className="club-paper">
                    <Link to={{ pathname: "/projects", state: { club_id: props.location.state.club_id } }}>
                        <Paper>Projects</Paper>
                    </Link>
                </div>
                <div className="club-info-text">
                    <div>
                        <Link to={{
                            pathname: "/editClubInfo", state: {
                                club_id: props.location.state.club_id,
                                club_name: name,
                                charter_date: charterDate,
                                introduction: introduction,
                                image: image
                            }
                        }}>
                            {(isLogged && props.location.state.club_id == clubId) ? <EditButton /> : ""}
                        </Link>
                    </div>
                    <div>
                        {
                            (clubData[0]) ?
                                <Typography gutterBottom variant="h5" component="h2">
                                    {name}
                                </Typography>
                                :
                                <Skeleton width={200} />
                        }
                    </div>
                    <div className="charterDate">
                        {
                            (clubData[0]) ?
                                <Typography variant="subtitle1" color="textSecondary" component="p">
                                    Charter date: {charterDate}
                                </Typography>
                                :
                                <Skeleton width={200} />
                        }
                    </div>
                    <div className="">
                        {
                            (clubData[0]) ?
                                <Typography gutterBottom variant="subtitle1" component="p">
                                    {introduction}
                                </Typography>
                                :
                                <Skeleton />
                        }
                    </div>
                </div>
            </Container>
            <div className="box-wrapper" >
                <Suspense fallback={<div className="loading"></div>}>
                    <Slider clubId={props.location.state.club_id}></Slider>
                </Suspense>
            </div>
            <div className="box-wrapper board-wrapper">
                <Suspense fallback={<div className="loading"></div>}>
                    <BoardMemberSlider clubId={props.location.state.club_id}></BoardMemberSlider>
                </Suspense>
            </div>
        </div>
    )
}

export default ClubInformation