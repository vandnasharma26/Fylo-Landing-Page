import React from "react";

function Profile(props) {
    return (
        <div className="profile">
            <img src={props.avatar} />
            <div className="profile-info">
                <h6>{props.name}</h6>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Profile;