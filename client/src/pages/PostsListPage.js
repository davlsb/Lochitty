import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import FAB from '../components/fab';



class PostsListPage extends React.Component {
  state = {
    posts: [`<Post props={} key='Name' />`],
    loading: true,
  }

  componentDidMount() {
        
    var userZip = 0
    fetch(
      "http://ip-api.com/json/?fields=city,zip"
    )
      .then(response => response.json())
      .then((data) => {
        console.log("the zip from API is " + data.zip)
        let zippy = data.zip 
        console.log("zippy is " + zippy)
        userZip = zippy
        this.wePostPosts(zippy)
      })
  }

  wePostPosts(userZip){
    fetch("/api/posts/zip", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ userZip }) })
      .then(res => res.json())
      .then(posts => {
        console.log(posts)
        this.setState({
          loading: false,
          posts: posts.reverse().map((p,ii) => <Post {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <><Card variant="outlined" sx={{ borderColor: 'transparent', borderRadius: 8, paddingBottom:"8em", paddingTop: 0.5, paddingLeft: 5, paddingRight: 5 }}>
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            {this.state.posts}
          </div>
        </div>
      </Card>
      
      
      <FAB/>
      </>
    );
  }
}

export default PostsListPage;