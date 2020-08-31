import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const headers = {
    "Accept": "application/json"
}

const BoardMemberSlider = (props) => {
    const [data, setData] = useState([]);
    let slideCount = slideCount = parseInt((data.length / 3) + ((data.length % 3 > 0) ? 1 : 0))
    const [slidePos, setSlidePos] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);
    const memberType = {
        1: 'President',
        2: 'Vice President',
        3: 'Secretary',
        4: 'Treasurer',
        5: 'Sergeant at Arms',
        6: 'Board Member',
        7: 'Member',
        8: 'Supporting Member',
        9: 'Immediate Past President'
    }
    useEffect(() => {
        axios.post('/api/getBoardMembers', {
            headers: headers,
            club_id: props.clubId
        })
            .then(res => {
                setData(res.data.data)
            }).catch(error => {
                console.log(error)
            });
    }, []);

    const onLeft = () => {
        if (slideIndex > 0) {
            setSlidePos(slidePos + 100)
            setSlideIndex(slideIndex - 1)
        }
    }
    const onRight = () => {
        console.log('RIGHT')
        if (slideIndex < slideCount - 1) {
            setSlidePos(slidePos - 100)
            setSlideIndex(slideIndex + 1)
        }
    }

    let slideBox = []

    for (let i = 0; i <= data.length - 3; i += 3) {
        let cards = []
        for (let j = i; j < i + 3; j++) {
            let card =
                <Link to={{
                    pathname: "/memberProfile", state: {
                        memberId: (data[j]) ? data[j].id : 0,
                        club_id: props.clubId
                    }
                }} key={j}>
                    <div className="board-card">
                        <div className="board-tag">
                            <div className="board-tag-text">{memberType[data[j].member_type_id]}</div>
                        </div>
                        <div className="board-image">
                            <img src={(data[j].image_id > 0) ? window.location.origin + "/api/getImage?imageId=" + data[j].image_id : require('../../img/club-member-img/default.jpg')}></img>
                        </div>
                        <div className="board-text">
                            {data[j].first_name + ' ' + data[j].last_name}
                        </div>
                    </div>
                </Link>
            cards.push(card)
        }
        slideBox.push(cards)
    }


    let cards = []
    let count = 0
    for (let i = data.length - data.length % 3; i < data.length; i++) {
        let card =
            <Link to={{
                pathname: "/memberProfile", state: {
                    memberId: (data[i]) ? data[i].id : 0,
                    club_id: props.clubId
                }
            }} key={i}>
                <div className="board-card">
                    <div className="board-tag">
                        <div className="board-tag-text">{memberType[data[i].member_type_id]}</div>
                    </div>
                    <div className="board-image">
                        <img src={(data[i].image_id > 0) ? window.location.origin + "/api/getImage?imageId=" + data[i].image_id : require('../../img/club-member-img/default.jpg')}></img>
                    </div>
                    <div className="board-text">
                        {data[i].first_name + ' ' + data[i].last_name}
                    </div>
                </div>
            </Link>
        cards.push(card)
    }
    slideBox.push(cards)

    return (
        <div id="slider-window">
            <div id="slide-button-wrapper">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onLeft}>
                    <path d="M35.5782 16.1445H7.00885L24.1085 1.30078C24.3819 1.06152 24.2159 0.617188 23.8546 0.617188H19.5333C19.3428 0.617188 19.1622 0.685547 19.0206 0.807617L0.568424 16.8184C0.399424 16.9649 0.263886 17.146 0.170995 17.3494C0.0781039 17.5529 0.0300293 17.7739 0.0300293 17.9976C0.0300293 18.2212 0.0781039 18.4423 0.170995 18.6457C0.263886 18.8492 0.399424 19.0303 0.568424 19.1768L19.128 35.2852C19.2012 35.3486 19.2891 35.3828 19.3819 35.3828H23.8497C24.211 35.3828 24.377 34.9336 24.1036 34.6992L7.00885 19.8555H35.5782C35.793 19.8555 35.9688 19.6797 35.9688 19.4648V16.5352C35.9688 16.3203 35.793 16.1445 35.5782 16.1445Z" fill="#F9136B" />
                </svg>
                <div className="slide-circle"></div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onRight}>
                    <path d="M0.42181 19.8555H28.9911L11.8915 34.6992C11.6181 34.9385 11.7841 35.3828 12.1454 35.3828H16.4667C16.6572 35.3828 16.8378 35.3145 16.9794 35.1924L35.4316 19.1816C35.6006 19.0351 35.7361 18.854 35.829 18.6506C35.9219 18.4471 35.97 18.2261 35.97 18.0024C35.97 17.7788 35.9219 17.5577 35.829 17.3543C35.7361 17.1508 35.6006 16.9697 35.4316 16.8232L16.872 0.714844C16.7988 0.651367 16.7109 0.617188 16.6181 0.617188H12.1503C11.789 0.617188 11.623 1.06641 11.8964 1.30078L28.9911 16.1445H0.42181C0.206966 16.1445 0.0311852 16.3203 0.0311852 16.5352V19.4648C0.0311852 19.6797 0.206966 19.8555 0.42181 19.8555Z" fill="#F9136B" />
                </svg>
            </div>
            <div id="slide-title-section">
                <span style={{ marginLeft: "46px" }}>Board members</span>
                <div id="slide-title-line" className="board-line"></div>
            </div>
            <div id="slider-wrapper" style={{ transform: 'translateX(' + slidePos + '%)' }}>
                {
                    slideBox.map((cards, i) => (
                        <div key={i} className="test-box">
                            <div className="member-card-container board-slider">
                                {cards.map((card,i) => (card))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BoardMemberSlider