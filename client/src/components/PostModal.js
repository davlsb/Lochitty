//get Modal compponent for validation and pop up functionanlity
import {useState} from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import NewPost from '../pages/PostFormPage.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  backdropFilter: 8,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 4,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#689ca4',
    },
    secondary: {
      main: '#0a5898',
    },
  },
});

export default function PostMessages() {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
      setOpen(false);
      window.location.replace('./');
    };
  
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 500 }}>
          <div className="Xbutton" onClick={handleClose} style={{left: '85%', bottom: '87%',fontWeight:"900", fontSize:'1.2em', position: 'fixed', paddingTop:'2em', textAlign:'right', fontFamily: 'Roboto'} }>❌</div>
          <NewPost/>
          </Box>
        </Modal>
      </div>
    );
  }