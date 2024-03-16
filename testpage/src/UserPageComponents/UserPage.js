import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData, fetchCharacterData } from '../Store';
import { Grid, TextField } from '@mui/material';
import User from './User';
import Popup from './Popup';

function UserPage() {
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state.userData);
  const characterData = useSelector((state) => state.characterData);

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchCharacterData());
  }, [dispatch]);

  useEffect(() => {
    const filteredData = Array.isArray(initialData)
      ? initialData.filter((userData) =>
          userData.group.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];
    setData(filteredData);
  }, [searchTerm, initialData]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleUserClick = (userData) => {
    setSelectedUser(userData);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  function getImgUrlsById(id, data) {
    const filteredItems = data.filter(item => item.id === id);
    const imgUrls = filteredItems.map(item => item.imgUrl);
    return imgUrls;
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
