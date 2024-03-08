import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../Store';
import User from './User';
import Popup from './Popup';

function UserPage() {
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state.userData);
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUserData());
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

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Group"
        value={searchTerm}
        onChange={handleSearch}
      />
      {data.map((userData, index) => (
        <div key={index} onClick={() => handleUserClick(userData)}>
          <User key={index} userData={userData}/>
        </div>
      ))}
      {selectedUser && (
        <Popup userData={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default UserPage;