import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditButton from './function/MaterialDesignEdit';
import { useSelector, useDispatch } from 'react-redux';

const headers = {
    "Accept": "application/json"
}

const Members = (props) => {
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.isLogged)
    const [member, setMember] = useState({});
    const memberId = (props.location.state) ? props.location.state.memberId : null

    fetch('/api/checkToken').then(res => {
      if (res.status === 200)
        dispatch({ type: 'SIGNIN' })
      return res.text()
    }).then(res => { setUserClubId(res) })

    useEffect(() => {
        axios.post('/api/memberData', {
            headers: headers,
            memberId: memberId
        })
            .then(res => {
                console.log(res.data.data[0])
                setMember(res.data.data[0])
            }).catch(error => {
                console.log(error)
            });
    }, []);

    return (
        <div>
            <Container fixed>
                <div className="profile-container">
                    <div className="member-image">
                        <img src={(typeof member.image_id == "undefined" || member.image_id == 0) ? require('../../img/club-member-img/default.jpg') : window.location.origin + "/api/getImage?imageId=" + member.image_id}></img>
                    </div>

                    <div>{member.first_name + " " + member.last_name}</div>
                    <div>{member.member_type + " " + member.joined_date}</div>
                    <div>
                        <Link to={{
                            pathname: "/editMemberInfo", state: {
                                memberId: member.id
                            }
                        }}>
                            {(isLogged) ? <EditButton /> : ""}
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Members