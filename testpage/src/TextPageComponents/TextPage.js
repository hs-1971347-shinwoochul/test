import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../Store';
import './TextPage.css';
import Character from './Character';

function TextPage() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  console.log("userdate:");
  console.log(userData);
  const [onToggle, setToggle] = useState(true);

  useEffect(() => {
    dispatch(fetchUserData());
    console.log('123');
  }, [dispatch]);

  const onClick = () => {
    setToggle(!onToggle);
  }

  return (
    <div>
      <h1>User Data</h1>
      <div className="user-container">
        <button className="toggleButton" onClick={onClick}>{onToggle ? "male" : "female"}</button>
        {userData && userData.map((user) => {
          if ((onToggle && user.gender === 'male') || (!onToggle && user.gender === 'female')) {
            return (
              <Character key={user.id} user={user} />
            );
          }
        })}
      </div>
    </div>
  );
}

export default TextPage;
