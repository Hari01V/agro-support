import React, { } from 'react';
import '../styles/User.css';

function User(props) {
  const { uid, name, email, picUrl } = props;

  return (
    <div className="User">
      <div className="image-container">
        <img src={picUrl} className="User-pic" />
      </div>
      <h1 className="User-name">{name}</h1>
    </div>
  )
}

export default User;