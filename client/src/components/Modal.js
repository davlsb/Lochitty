//get Modal compponent for validation and pop up functionanlity
import {useState} from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Backdrop from '@material-ui/core/Backdrop';

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

function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <Button data-dismiss="modal" style={{color:"#689ca4"}} onClick={handleOpen}>Don't have an account? Sign Up</Button>
      <Modal
        //hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
        <SignUp/>
          <Button style={{color:"#689ca4"}} onClick={handleClose}>Return to Login</Button>
        </Box>
      </Modal>
    </React.Fragment>
    </ThemeProvider>
  );
}

export default function NestedModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
        <SignIn/>
          <ChildModal/>
        </Box>
      </Modal>
    </div>
  );

}
