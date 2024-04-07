import React,{ useEffect } from 'react';
import { Routes, Route, Link, useNavigate , Navigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { HomeOutlined, PersonOutline, PeopleAltOutlined } from '@mui/icons-material';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './firebase';
import Home from './HomeComponents/Home';
import UserPage from './UserPageComponents/UserPage';
import CharacterPage from './CharacterPageComponents/CharacterPage';
import LoginPage from './LoginComponents/LoginPage';
import SignupPage from './LoginComponents/SignupPage';

const navLinkStyles = {
  marginRight: '1rem',
};

function App() {
  const auth = getAuth(app);

  const PrivateRoute = () => {
    return auth.currentUser ? <UserPage/> : <Navigate to="/Login" replace/>;
  }

  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="static" style={{ width: 200, minHeight: 1000  }}>
        <Toolbar style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h6" component="div">
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/" startIcon={<HomeOutlined />} sx={navLinkStyles}>Home</Button>
          <Button color="inherit" component={Link} to="/UserPage" startIcon={<PersonOutline />} sx={navLinkStyles}>User Page</Button>
          <Button color="inherit" component={Link} to="/CharacterPage" startIcon={<PeopleAltOutlined />} sx={navLinkStyles}>Character Page</Button>
        </Toolbar>
      </AppBar>
      <Container style={{ maxWidth: '100%', marginLeft: 0, marginRight: 0 }}>
        <Box mt={2}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserPage" element={<PrivateRoute/>}/>
            <Route path="/CharacterPage" element={<CharacterPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/SignUp" element={<SignupPage />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
}



export default App;