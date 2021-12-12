import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Container, ImageListItem } from '@mui/material';
import { Button } from '@mui/material';
import Header from '../components/header';
import FAB from '../components/fab';
import EventCard from '../components/eventFetcher';
import eventData from '../components/mockData.json';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

class EventRoute extends React.Component {
    state = {
      loading: true,
      post: null,
      notFound: false,
    }
  
    render() {
        return(
        eventData.map((item, index) => (<EventCard key={index} data={item} />))
        )
    }
  }
  
  export default EventRoute;
