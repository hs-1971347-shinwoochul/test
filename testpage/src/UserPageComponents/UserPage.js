import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../Store';

function UserPage() {
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state.userData);
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    // initialData가 배열이 아닌 경우, 빈 배열을 사용하여 에러를 방지
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

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Group"
        value={searchTerm}
        onChange={handleSearch}
      />
      {data.map((userData, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={{ marginRight: '10px' }}>Avatar: {userData.avatar}</p>
          <p style={{ marginRight: '10px' }}>Gender: {userData.gender}</p>
          <p style={{ marginRight: '10px' }}>Group: {userData.group}</p>
          <p style={{ marginRight: '10px' }}>Name: {userData.name}</p>
          <p style={{ marginRight: '10px' }}>Roblox ID: {userData.robloxID}</p>
          <p>User ID: {userData.userID}</p>
        </div>
      ))}
    </div>
  );
}

export default UserPage;
