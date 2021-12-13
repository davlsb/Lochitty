import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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

/*
deletePost = (event) => {
  fetch("/api/posts/", {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({content: this.state.content, title: this.state.title}),
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
    })
    .catch(err => {
      this.setState({
        error: true,
      });
    });
}
*/
function getDateToCreateAt(date) {
  var d = new Date( date );
  // d = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  // var newMinute;
  // newMinute.toString(d.getMinutes());
  // if(newMinute.substring(2) == null) newMinute.concat("0");
  d.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  //d = d.toDateString().substring(3) + " | " + (d.getHours()% 12 || 12) + ":" + d.getMinutes();
  return d.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).replace(',','');;


  

}

function Post({title, content, createdAt, id, longitude, latitude }) {
  return (
    <ThemeProvider theme={theme}>

      <Card className="p-5 d-flex border-bottom" sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gridTemplateAreas: `"title content delete"`, width: "100%", borderRadius: 4, marginBottom: 2, border: 0, boxShadow: 7 }}>
      <Box sx={{ gridArea: 'title'}}>
        <CardHeader
          sx={{fontSize: 2}}
          title={title}
          subheader={ getDateToCreateAt(createdAt)}
        />
      </Box>
      
      <CardContent sx={{maxWidth:'25em'}}>

      <Box sx={{ gridArea: 'main'}}>
        
      <Typography sx={{fontSize: 20, paddingLeft: '55px'}}>
        { content }
        </Typography>

      </Box>
      </CardContent>
      
      <CardContent sx={{maxWidth:'25em', marginLeft: "auto"}}>
      <Box sx={{ gridArea: 'sidebar'}}>
      {longitude}
      {latitude} 
        <IconButton style={{outline: 'none'}} aria-label="delete" color="primary">
            <DeleteOutlineRoundedIcon />
        </IconButton>
      </Box>


       
      </CardContent>
    </Card>
    </ThemeProvider>
  );
}

export default Post;