import React from 'react';
import { Card } from 'react-bootstrap';

const User = ({ userData ,img}) => {

  return (
    <Card className="card">
      <Card.Img
        variant="top"
        src={img}
        className="card-img"
      />
      <Card.Header className="card-header">
        <div className="flex items-center space-x-4">
          <Card.Title className="card-title">{userData.name}</Card.Title>
        </div>
      </Card.Header>
      <Card.Body className="card-body">
        <p style={{ marginRight: '10px' }}>Group: {userData.group}</p>
        <p style={{ marginRight: '10px' }}>Gender: {userData.gender}</p>
      </Card.Body>
    </Card>
  );
};

export default User;