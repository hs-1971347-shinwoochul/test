import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacterData } from '../Store';
import './CharacterPage.css';
import Character from './Character';

function CharacterPage() {
  const dispatch = useDispatch();
  const characterData = useSelector((state) => state.characterData);
  const [onToggle, setToggle] = useState(true);

  useEffect(() => {
    dispatch(fetchCharacterData());
  }, [dispatch]);

  const onClick = () => {
    setToggle(!onToggle);
  }
  return (
    <div>
      <h1>Character</h1>
      <div className="user-container">
      
        {characterData && characterData.map((character) => {
          //<button className="toggleButton" onClick={onClick}>{onToggle ? "male" : "female"}</button>
          //if ((onToggle && character.gender === 'male') || (!onToggle && character.gender === 'female')) {
            return (
              <Character key={character.id} character={character} />
            );
          
        })}
      </div>
    </div>
  );
}

export default CharacterPage;
