import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../Store';
import './CharacterPage.css';
import Character from './Character';

//test commit 
//호호

function CharacterPage() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const [onToggle, setToggle] = useState(true);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const onClick = () => {
    setToggle(!onToggle);
  }

  return (
    <div>
      <h1>Character</h1>
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

export default CharacterPage;
