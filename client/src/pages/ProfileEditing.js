import React, { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MockAvatarImage from '../images/AvatarMock.png';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import '../components/fancyButtons.css';
import Header from '../components/header';
import { Container, ImageListItem } from '@mui/material';
import PostsListProfile from './PostsListsProfile';
import { withRouter, Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#689ca4',
    },
    secondary: {
      main: '#689ca4',
    },
  },
});

const Profile = withRouter(({ history }) => {

  const auth = useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
        
       {/*
         <div style={{position: "absolute",
          top: "5em",
          left: 0,
          zIndex: "0",
          width: "100%",
          justifyContent: "space-around",
          alignItems: 'center',
          padding: '200px',
          paddingBottom: '400px',
          backgroundColor: '#e1ebed',
          backgroundImage: 'linear-gradient(#e1ebed, #e1ebed, #e1ebed, white)',
          }}>
        </div>

        */}

      <Container>
        <Card variant="outlined" sx={{borderColor: 'transparent', borderRadius: 8, paddingTop: 5, paddingLeft: 5, paddingRight: 5}}>
       

      <div class="Avatar" style={{paddingTop: "5em", paddingBottom: "5em"}}>
        <Avatar style={{backgroundImage: "url(" + MockAvatarImage + ")", transform: "translate(-50%, -50%)",  position: "absolute", left: "50%", right:"50%", backgroundRepeat: "no-wrap", backgroundPosition: "center", backgroundSize:"200px", marginTop: "2em", width: 110, height: 110 }}> </Avatar>
      </div>

      <Box 
            display="flex"
            minHeight="7vh" 
            bottomMargin="2em"
            textAlign="center"
            >
              <h1> <b>{auth.user.firstName} {auth.user.lastName}</b></h1>
      </Box>

      <Box 
            display="flex"
            minHeight="7vh" 
            zIndex= "3"
            bottomMargin="4em"
            textAlign="center"
            >
              <h3>{auth.user.city}</h3>
      </Box>


      <div style={{width: "100%", paddingTop: '9em'}}>
        <PostsListProfile/>
      </div>

      <Box
      display="flex"
      >
        <a href="/profile-settings" style={{marginLeft: "81%"}}><button style={{ position:"fixed", bottom: "30px", right: "40px", width: "170px", fontSize: "1.3em"}} sx={{width: 400}} className="btn btn-fancy">Edit Profile</button></a>
      </Box>

        </Card>
      </Container>
    </ThemeProvider>
    );
  });

export default Profile;
