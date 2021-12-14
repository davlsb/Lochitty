import React, { useContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MockAvatarImage from '../images/Avi.png';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import snackBar from '../components/snackBar.js';
import '../components/fancyButtons.css';
import { Container, ImageListItem } from '@mui/material';
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


const ProfileSettings = withRouter(({ history }) => {

  const auth = useContext(AuthContext);

  const [firstName, setFirstName] = useState(auth.user.firstName);
  const [lastName, setlastName] = useState(auth.user.lastName);
  const [city, setCity] = useState(auth.user.city);

  const handleChange = (e) => {
    setFirstName({[e.target.name] : e.target.value});
  }

  return (
    <ThemeProvider theme={theme}>
       <Container>
        <Card variant="outlined" sx={{borderColor: 'transparent', borderRadius: 8, paddingTop: 5, paddingLeft: 5, paddingRight: 5}}>
      <Box 
            display="flex"
            justifyContent="left"
            alignItems="left"
            minHeight="7vh" 

            >
              <h1> <b>Profile Settings</b></h1>
              
      </Box>

      <div class="Avatar" style={{paddingTop: "5em", paddingBottom: "5em"}}>
        <Avatar style={{backgroundImage: "url(" + MockAvatarImage + ")",transform: "translate(-50%, -50%)", boxShadow: "inset 0 0 0 4em rgba(0,0,0,0.2)", backgroundRepeat: "no-wrap", backgroundPosition: "center", backgroundSize:"200px", filter: "blur(3px)", webkitFilter: "blur(3px)", position: "absolute", left: "50%", right:"50%", width: 110, height: 110 }}> </Avatar>
        <Button variant="text" sx={{':hover': { bgcolor: 'transparent', color: 'white',}, }} style={{outline: 'none', textTransform:"capitalize", alignItems: "flex-end", whiteSpace: "nowrap", color:"#689ca4",
          color: "white",
          position: "absolute", left: "50%", right:"50%",
          transform: "translate(-50%, -50%)",
          zIndex: "2",
          width: "80%",
          padding: "20px",
          textSlign: "center",
          }}>Replace</Button>
      </div>

      <Box
      position = "relative"
      display ='flex'
      justifyContent ='center'
      minHeight="8vh"
      >
        <TextField required style={{marginLeft: "auto", marginRight: "auto"}} sx={{width: 400}} id="firstName" value={firstName} label={"First Name: " + auth.user.firstName} variant="outlined" /> 
      </Box>

      <Box
      position = "relative"
      display ='flex'
      justifyContent ='center'
      minHeight="8vh"
      >
        <TextField required style={{marginLeft: "auto", marginRight: "auto"}} sx={{width: 400}} id="lastName" value={lastName} onChange={handleChange} label={"Last Name: "+ auth.user.lastName} variant="outlined" /> 
      </Box>

      <Box
      position = "relative"
      display ='flex'
      justifyContent ='center'
      >
        <TextField required style={{marginLeft: "auto", marginRight: "auto"}} sx={{width: 400}} id="city" value={city} label={"City: " + auth.user.city} variant="outlined" />
      
      </Box>

      </Card>

      <Box
      display="flex"
      >
        <Button variant="text"><a href="/deleteAccount" style={{position:"fixed", bottom: "90px", left: "68px", width: "177px",height: "28px", textTransform:"capitalize", alignItems: "flex-end", whiteSpace: "nowrap", color:"#689ca4"}}><br/>Delete Account?</a></Button>
        <button style={{position:"fixed", bottom: "30px", right: "40px", width: "170px", fontSize: "1.3em"}} sx={{width: 400}} className="btn btn-fancy">Done</button>
      </Box>
      </Container>
    </ThemeProvider>
    );
  });

export default ProfileSettings;
