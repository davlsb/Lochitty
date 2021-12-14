import React from 'react';
import { Redirect } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, ImageListItem } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

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

  const SignInButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#689ca4',
    borderColor: '#689ca4',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#689ca4',
      borderColor: '#689ca4',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#689ca4',
      borderColor: '#689ca4',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

class SignUpPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false,
    email: "",
    password: "",
    city: "",
    firstName: "",
    lastName: "",
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  registerUser = (event) => {
    fetch("/api/auth/signup", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, password:this.state.password, city:this.state.city, email: this.state.email}),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
        window.location.replace('/');
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
      
  }


  render() {
    const location = this.state.location;
    if(this.state.success) return <Redirect to="/" />;

    let err = null;
    if(this.state.error) {
      err = (
        <div style={{lineHeight:'2em', position:'fixed', width: '100%', left:'0', top:'0', textAlign:'center', height: '4em', borderRadius:'1em'}} className="alert alert-danger">
          "There was an error registering."
        </div>
      );
    }

    return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={this.login} noValidate sx={{mt: 4 }}>
          { err }
          <TextField required
                sx={{width: 400}} id="email" name="email" type="email" label="Email" variant="outlined" value={this.state.email}
                    onChange={this.fieldChanged('email')} />
            <div style={{padding: "0.5em"}}></div>
            <TextField required 
                sx={{width: 400}} id="password" name="password" type="password" label="Password" variant="outlined" value={this.state.password}
                   onChange={this.fieldChanged('password')} /> 
            <div style={{padding: "0.5em"}}></div>
            <TextField required 
                sx={{width: 400}} id="firstName" name="firstName" type="firstName" label="First Name" variant="outlined" value={this.state.firstName}
                   onChange={this.fieldChanged('firstName')} /> 
            <div style={{padding: "0.5em"}}></div>
            <TextField required 
                sx={{width: 400}} id="lastName" name="lastName" type="lastName" label="Last Name" variant="outlined" value={this.state.lastName}
                   onChange={this.fieldChanged('lastName')} /> 
            <div style={{padding: "0.5em"}}></div>
            <TextField required 
                sx={{width: 400}} id="city" name="city" type="city" label="City" variant="outlined" value={this.state.city}
                   onChange={this.fieldChanged('city')} />  
                         
            <SignInButton 
              onClick={this.registerUser}
              style={{outline: 'none'}}
              variant="contained" 
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}>
                Register
            </SignInButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    );
  }
}

SignUpPage.contextType = AuthContext

export default SignUpPage;