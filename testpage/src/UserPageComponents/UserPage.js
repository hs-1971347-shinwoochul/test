import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData, fetchCharacterData } from '../Store';
import { Grid, TextField, CircularProgress } from '@mui/material'; // CircularProgress를 추가합니다.
import User from './User';
import Popup from './Popup';

function UserPage() {
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state.userData);
  const characterData = useSelector((state) => state.characterData);

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 나타내는 상태 변수를 추가합니다.

  useEffect(() => {
    dispatch(fetchUserData())
      .then(() => dispatch(fetchCharacterData())) // Character 데이터도 모두 로딩된 후에 로딩 상태를 false로 변경합니다.
      .then(() => setLoading(false))
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // 에러가 발생할 경우에도 로딩 상태를 false로 변경합니다.
      });
  }, [dispatch]);
  // 검색어에 따라 데이터를 필터링하여 업데이트합니다.
  useEffect(() => {
    const filteredData = Array.isArray(initialData)
      ? initialData.filter((userData) =>
          userData.group.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];
    setData(filteredData);
  }, [searchTerm, initialData]);
  // 검색어를 업데이트하는 함수
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  // 사용자를 클릭했을 때 선택된 사용자를 업데이트하는 함수
  const handleUserClick = (userData) => {
    setSelectedUser(userData);
  };
  // 모달을 닫는 함수
  const handleCloseModal = () => {
    setSelectedUser(null);
  };
  // id에 해당하는 캐릭터 이미지 URL을 가져오는 함수
  function getImgUrlsById(id, data) {
    const filteredItems = data.filter(item => item.id === id);
    const imgUrls = filteredItems.map(item => item.imgUrl);
    return imgUrls;
  }
  
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <TextField
        variant="outlined"
        label="Search by Group"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Grid container spacing={2}>
        {data.map((userData, index) => (
          <Grid item xs={8} sm={4} md={2.3} lg={1.25} key={index}>
            <div onClick={() => handleUserClick(userData)}>
              <User key={index} userData={userData} img={getImgUrlsById(userData.Avatar, characterData)}/>
            </div>
          </Grid>
        ))}
      </Grid>
      {selectedUser && (
        <Popup userData={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default UserPage;
