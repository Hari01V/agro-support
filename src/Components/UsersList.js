import React, { useContext } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FirebaseContext } from './Firebase/context';
import User from './User';

function UserList() {
  const { firebase } = useContext(FirebaseContext);

  const userRef = firebase.firestore.collection('Users');
  const [users] = useCollectionData(userRef);
  return (
    <>
      {users && users.map(user => (
        <User key={user.uid} {...user} />
      ))}
    </>
  )
}

export default UserList;