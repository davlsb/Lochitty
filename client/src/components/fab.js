import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';


const actions = [
  { icon: <EventRoundedIcon style={{ fill: '#000000' }} />, name: 'Event', link: '/posts/newEvent'},
  { icon: <ForumRoundedIcon style={{ fill: '#000000' }} />, name: 'Message', link: '/posts/newMessage'},
  { icon: <ManageAccountsRoundedIcon style={{ fill: '#000000' }} />, name: 'Profile in Development', link:'/profile'},
];

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



export default function BasicSpeedDial() {


  return (
    <ThemeProvider theme={theme}>

    <Box sx={{outline: 'none', position: 'fixed', fontSize:"4em", bottom: "1%", right: "50%", bcolor: 'linear-gradient(to right bottom, #430089, #82ffa1)', transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{outline: 'none', height: 500, position: 'absolute', fontSize:"4em", left: "50%", bottom: 10, right: "50%" }}
        icon={<SpeedDialIcon fontSize="large"/>}
        FabProps={{style: {height: 80, width: 80 } }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.link}
          />
        ))}
      </SpeedDial>
    </Box>

    </ThemeProvider>
  );
}