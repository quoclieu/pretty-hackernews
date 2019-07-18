import React from 'react';
import Grid from './components/Grid';
import HN from './lib/hackernews';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  async componentWillMount() {
    let response = await HN.getTopStories();
    let postIds = response.data.splice(0, 5);
    postIds.forEach(async id => {
      response = await HN.getItem(id);
      let post = response.data;
      this.setState({ posts: [...this.state.posts, post] });
    });

    fetch(
      'http://api.scraperapi.com/?api_key=5d3d9cf63a09ea776bb49cd4cc84d521&url=https://nullsweep.com/http-security-headers-a-complete-guide/',
      {
        headers: {
          'Content-Type': 'text/plain',
          mode: 'no-cors'
        }
      }
    ).then(response => {
      console.log(response);
    });
  }
  render() {
    console.log(this.state.posts);

    return (
      <div>
        <Grid posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
