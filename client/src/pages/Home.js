import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Container, ImageListItem } from '@mui/material';
import { Button } from '@mui/material';
import Lochitty from '../components/lochitty.png'
import Header from '../components/header';
import FAB from '../components/fab';
import EventCard from '../components/eventFetcher';
import eventData from '../components/mockData.json';
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
import AboutUsPage from './AboutUsPage';

export default function Home() {
  return (
    <Container>
    <Header />
    {eventData.map((item,index)=>(<EventCard key={index} data={item}/>))}
    {/* {Object.values(eventData).map(event => (
      <EventCard props={event} />
    ))} */}
    

    </Container>
  );
}


