import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import { AuthContext } from '../context/AuthContext';

const AuthButton = withRouter(({ history }) => {
  const auth = useContext(AuthContext);

  if(!auth.isAuthenticated) {
    return <a href="/login"><Button>Login</Button></a>;
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div className="text-black">
      <a href="/profile"><Button>Profile</Button></a>
    </div>
  );
});

export default AuthButton;