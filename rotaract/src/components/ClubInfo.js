import React, { useState, useEffect } from 'react';
import PaperSheet from './function/ClubPaper'
import EditButton from './function/MaterialDesignEdit'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Slider from './Slider'
import BoardMemberSlider from './BoardMemberSlider'
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


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
    const charterDate = (clubData[0]) ? clubData[0].charterDate : "Not given"
    let image = (clubData[0] && clubData[0].id) ? window.location.origin + "/api/getImage?imageId=" + clubData[0].id : require('../../img/club-info-img/5.jpg')
    return (
        <div>
            <Container fixed>
                <div className="MainImageField">
                    <img src={image} className="about-img" />
                </div>
                <div className="club-paper">
                    <Link to={{ pathname: "/projects", state: { club_id: props.location.state.club_id } }}>
                        <PaperSheet PaperTitle={"Projects"} />
                    </Link>
                </div>
                <div className="club-info-text">
                    <div className="">
                        <Link to={{
                            pathname: "/editClubInfo", state: {
                                club_id: props.location.state.club_id,
                                club_name: name,
                                charter_date: charterDate.substring(0, 10),
                                introduction: introduction,
                                image: image
                            }
                        }}>
                            {(isLogged && props.location.state.club_id == clubId) ? <EditButton /> : ""}
                        </Link>
                    </div>
                    <div className="">
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                    </div>
                    <div className="charterDate">
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            Charter date: {charterDate.substring(0, 10)}
                        </Typography>
                    </div>
                    <div className="">
                        <Typography gutterBottom variant="subtitle1" component="p">
                            {introduction}
                        </Typography>
                    </div>
                </div>
            </Container>
            <div className="box-wrapper" >
                <Slider clubId={props.location.state.club_id}></Slider>
            </div>
            <div className="box-wrapper board-wrapper" >
                <BoardMemberSlider clubId={props.location.state.club_id}></BoardMemberSlider>
            </div>
        </div>
    )
}

export default ClubInformation