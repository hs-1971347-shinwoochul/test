import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { HomeOutlined, PersonOutline, PeopleAltOutlined } from '@mui/icons-material';
import Home from './HomeComponents/Home';
import UserPage from './UserPageComponents/UserPage';
import CharacterPage from './CharacterPageComponents/CharacterPage';

const navLinkStyles = {
  marginRight: '1rem', // 네비게이션 링크 간의 간격을 조정합니다.
};

function App() {
  return (
    <div style={{ display: 'flex' }}>
      {/* 왼쪽에 네비게이션 바를 배치합니다. */}
      <AppBar position="static" style={{ width: 200 , minHeight: 1000}}>
        <Toolbar style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h6" component="div">
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/" startIcon={<HomeOutlined />} sx={navLinkStyles}>Home</Button>
          <Button color="inherit" component={Link} to="/UserPage" startIcon={<PersonOutline />} sx={navLinkStyles}>User Page</Button>
          <Button color="inherit" component={Link} to="/CharacterPage" startIcon={<PeopleAltOutlined />} sx={navLinkStyles}>Character Page</Button>
        </Toolbar>
      </AppBar>

      {/* 오른쪽에 페이지 컨텐츠를 배치합니다. */}
      <Container style={{ marginLeft: '0px' }}>
        <Box mt={2}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserPage" element={<UserPage />} />
            <Route path="/CharacterPage" element={<CharacterPage />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
}

export default App;
