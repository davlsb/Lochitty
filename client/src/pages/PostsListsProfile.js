import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import FAB from '../components/fab';


class PostsListPage extends React.Component {
  state = {
    posts: [``],
    loading: true,
  }

  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        console.log(posts)
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <Post {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <Card variant="outlined" sx={{backgroundColor: "#f2f6f700", borderColor: 'transparent', borderRadius: 8, paddingTop: 0.5, paddingLeft: 5, paddingRight: 5 }}>
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            {this.state.posts}
          </div>
        </div>
      </Card>
    );
  }
}

export default PostsListPage;