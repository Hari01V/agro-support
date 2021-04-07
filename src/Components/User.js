import React, { } from 'react';
import '../styles/User.css';

function User(props) {
  const { user, setChatUser } = props;
  const { uid, name, email, picUrl } = user;

  return (
    <div className="User" onClick={() => setChatUser(user)}>
      <div className="image-container">
        <img src={picUrl} className="User-pic" />
      </div>
      <h1 className="User-name">{name}</h1>
    </div>
  )
}

export default User;