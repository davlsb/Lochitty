import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Container, ImageListItem } from '@mui/material';
import { Button } from '@mui/material';
import Lochitty from '../components/lochitty.png'
import Header from '../components/header';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink,
} from 'react-router-dom';
import PostsListPage from './PostsListPage';
import PostFormPage from './PostFormPage';
import ShowPostPage from './ShowPostPage';
import ShowEvents from './EventRoute';
import AboutUsPage from './AboutUsPage';
import PostMessages from '../components/PostModal.js';
import PostEvent from '../components/EventModal.js';
import ProfileSettings from './ProfileSettings.js';
import Profile from './Profile.js';
import { AuthProvider } from '../context/AuthContext';
import LoginPage from './LoginPage';
import PrivateRoute from '../components/PrivateRoute';

export default function Home() {
  return (
    <AuthProvider>
    <Router>
    <Header />
        <div>
          <div >
          <Container>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/posts/newMessage" component={PostMessages} />
              <Route path="/posts/newEvent" component={PostEvent} />
              <Route path="/profile" component={Profile} />
              <Route path="/profile-settings" component={ProfileSettings} />
              <Route path="/events" component={ShowEvents} />
              <Route path="/posts/:id" component={ShowPostPage} />
              <Route path="/profiles" component={Profile} />
              <Route path="/" component={PostsListPage} />
            </Switch>
            </Container>
          </div>
        </div>
        </Router>
    </AuthProvider>
  );
}


