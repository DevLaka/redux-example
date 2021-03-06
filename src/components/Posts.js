import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    )
  }
}

// Step 9
// state is redux state
const mapStateToProps = state => ({
  posts: state.posts.items
});

// Step 8
// connecting component to redux store
export default connect(mapStateToProps, { fetchPosts })(Posts);
