import { useState,useEffect } from 'react';
import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button } from '@mui/material';
import Lochitty from './lochitty.png';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'typeface-roboto';
import { color } from '@mui/system';
import NestedModal from './Modal';

import './header.css';

export default function Header() {
  const [alignment, setAlignment] = useState('web');
  const [displayModal, setDisplayModal] = useState(false); 


  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

// will modify to take a parameter of the chosen page signup or login
  function modalPage(){
    displayModal===false?setDisplayModal(true):setDisplayModal(false)
    console.log(displayModal)
  }


  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#689ca4',
      },
      ".Mui-selected": {
        backgroundColor: 'rgba(104, 156, 164, 0.28)',
      },
      ".Mui-active": {
        backgroundColor: 'rgba(104, 156, 164, 0.28)',
      },
      ".Mui-checked": {
        backgroundColor: 'rgba(104, 156, 164, 0.28)',
      },
    },
  });
   

 
  return (
  
  <ThemeProvider theme={theme}>
  <div style={{display: 'flex',
      justifyContent: "space-around",
      alignItems: 'center',
      padding: '20px',
      paddingBottom: '50px',
      backgroundColor: '#e1ebed',
      backgroundImage: 'linear-gradient(#e1ebed, #e1ebed, #e1ebed, white)',
    }}>
      

    <a href="/posts"><img src={Lochitty} style={{width:'130px'}}/></a>

    <div style={{backgroundColor: 'white', borderRadius: '40px', backgroundColor:'transparent', borderColor:'transparent', paddingRight: '4em'}}>
    
    <div style={{backgroundColor: 'white', borderRadius: '40px', boxShadow: '0px 0px 5px 5px rgba(104, 156, 164, 0.2)', padding:'0.4em 0.7em'}}>


    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      sx={{
        '&:.Mui-selected': {
          backgroundColor: 'rgba(104, 156, 164, 0.28)',
        },
        '&:.Mui-active': {
          backgroundColor: 'rgba(104, 156, 164, 0.28)',
        },
        '&:.Mui-checked': {
          backgroundColor: 'rgba(104, 156, 164, 0.28)',
        },
      }}
    >
      <ToggleButton style={{borderColor:'transparent', fontFamily: 'Roboto', paddingInline:'1em', fontWeight: "bold", borderRadius: '100px 0 0 100px'}} size='small' value="messages">Messages</ToggleButton>
      <ToggleButton style={{borderColor:'transparent', fontFamily: 'Roboto', paddingInline:'1em',fontWeight: "bold", borderRadius: '0 100px 100px 0'}} size='small' value="events">Events</ToggleButton>
    </ToggleButtonGroup>
  

    </div>
      </div>
      {/* <ToggleButton onChange={() => {setDisplayModal(!displayModal)}} onClick={modalPage} value="events" style={{color:"#000000"}}>Login</ToggleButton>  */}
      <NestedModal/>
      </div>
      {/* pop up functionality */}
      {/* {displayModal===true?<NestedModal/>:null} */}
      
      {/* pop up functionality */}
    </ThemeProvider>
  );
}
