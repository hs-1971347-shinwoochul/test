import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../Store';
import User from './User';

function UserPage() {
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state.userData);
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchUserData());
    console.log(data);
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
        <User key={index} userData={userData}/>
      ))}
    </div>
  );
}

export default UserPage;
