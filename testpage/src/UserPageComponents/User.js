import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';

const User = ({ userData, img }) => {
  return (
    <Card style={{ width: 150 , height : 270}}>
      <CardMedia
        component="img"
        style={{ maxHeight: 120, width: 'auto' }}
        image={img}
        alt={userData.name}
      />
      <CardHeader
        title={userData.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Group: {userData.group}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {userData.gender}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default User;
