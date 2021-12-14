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

class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false,
    email: "",
    password: "",
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  login = (e) => {
    e.preventDefault();
    const auth = this.context;
    let { email, password } = this.state;
    auth.authenticate(email, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger" role="alert">Login Failed</div>;
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
          <TextField required
                sx={{width: 400}} id="email" name="email" type="email" label="Email" variant="outlined" value={this.state.email}
                    onChange={this.fieldChanged('email')} />
            <div style={{padding: "0.5em"}}></div>
            <TextField required 
                sx={{width: 400}} id="password" name="password" type="password" label="Password" variant="outlined" value={this.state.password}
                   onChange={this.fieldChanged('password')} /> 
            <SignInButton 
              style={{outline: 'none'}}
              variant="contained" 
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}>
                Sign In
            </SignInButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    );
  }
}

LoginPage.contextType = AuthContext

export default LoginPage;