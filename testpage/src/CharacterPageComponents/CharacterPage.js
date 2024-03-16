import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacterData } from '../Store';
import { CircularProgress } from '@mui/material'; // CircularProgress를 추가합니다.
import './CharacterPage.css';
import Character from './Character';

function CharacterPage() {
  const dispatch = useDispatch();
  const characterData = useSelector((state) => state.characterData);
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 나타내는 상태 변수를 추가합니다.

  useEffect(() => {
    dispatch(fetchCharacterData())
      .then(() => setLoading(false)) // 데이터 로딩이 완료되면 로딩 상태를 false로 변경합니다.
      .catch(error => {
        console.error('Error fetching character data:', error);
        setLoading(false); // 에러가 발생할 경우에도 로딩 상태를 false로 변경합니다.
      });
  }, [dispatch]);

  if (loading) {
    // 데이터가 로딩 중일 때 로딩 창을 표시합니다.
    return <CircularProgress />;
  }

  return (
    <div>
      <h1>Character</h1>
      <div className="user-container">
        {characterData && characterData.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default CharacterPage;
