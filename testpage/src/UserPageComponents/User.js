import React from 'react';

const User = ({ userData }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <p style={{ marginRight: '10px' }}>Gender: {userData.gender}</p>
      <p style={{ marginRight: '10px' }}>Group: {userData.group}</p>
      <p style={{ marginRight: '10px' }}>Name: {userData.name}</p>
    </div>
  );
};

export default User;