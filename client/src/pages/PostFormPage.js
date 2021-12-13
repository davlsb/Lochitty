import React from 'react';
import { Redirect } from 'react-router-dom';
import '../components/fancyButtons.css';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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

class PostFormPage extends React.Component {
    state = {
    error: false,
    success: false,
    content: '',
    title: '',
    latitude: '',
    longitude: 0,
  }


  
  contentChanged = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  titleChanged = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude
        let lng = position.coords.longitude
        console.log("getCurrentPosition Success " + lat +" and "+ lng)
        this.setState({
            longitude: position.coords.latitude,
            latitude: position.coords.longitude,
          })
      },
      (error) => {
        this.props.displayError("Error dectecting your location");
        console.error(JSON.stringify(error))
      },
    )
  }

  savePost = (event) => {
    fetch("/api/posts/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: this.state.content, title: this.state.title, longitude:this.state.longitude, latitude: this.state.latitude}),
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


  render() {
    const location = this.state.location;
    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div style={{lineHeight:'2em', position:'fixed', width: '100%', left:'0', top:'0', textAlign:'center', height: '4em', borderRadius:'1em'}} className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }


    return (
      <ThemeProvider theme={theme}>
          <div className="col-10 col-md-8 col-lg-7" style={{ alignItems:'center', height: '25em', width: '25em' }}>
            <div style={{padding:'200'}}>
              { errorMessage }
            </div>
          <div>
            <div newPost style={{ paddingBottom: '1em', fontSize: '2em', fontWeight: 'bolder' }}>
              Compose Post
            </div>
            <div inputs style={{ borderRadius: "4em", textAlign: 'center', paddingLeft: '2em' }}>
          <TextField required style={{width: '20em', marginLeft: "auto", marginRight: "auto"}} sx={{}} id="Title" label="Title..." variant="outlined" value={this.state.title} onChange={this.titleChanged} />
            <div style={{ padding: '0.5em' }}></div>
          <TextField multiline rows={4} required style={{width: '20em', marginLeft: "auto", marginRight: "auto"}} sx={{borderRadius: "4em"}} id="Content" label="Content..." variant="outlined" value={this.state.content} onChange={this.contentChanged} />
            <div style={{ padding: '0.5em' }}></div>
              <button style={{ position:'relative', left:'35%'}} className="btn btn-fancy" onClick={this.savePost}>Post Message</button>
            </div>
          </div>
        </div>
        </ThemeProvider>
    );
  }
}

export default PostFormPage;


