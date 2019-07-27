import React, { Component } from "react";
import PostData from "../data/posts.json";
import PostDetail from "./PostDetail";

class PostList extends Component {
  constructor(props) {
    // need this to get the properties for use in the titleWasClicked
    super(props);
    this.handleDataCallback = this.handleDataCallback.bind(this);
    this.handlePostRemove = this.handlePostRemove.bind(this);
    this.state = {
      postList: []
    };
  }

  // pretend we have a backend server doign work
  updateBackend(currentPostList) {
    console.log("updating...");
    this.setState({
      postItem: currentPostList
    });
  }
  handlePostRemove(postItem) {
    let currentPostList = this.state.postList;
    currentPostList.pop(postItem);
    this.updateBackend(currentPostList);
  }
  handleDataCallback(postItem) {
    console.log(postItem);
    let currentPostList = this.state.postList;
    currentPostList.push(postItem);
    this.setState({
      postItem: currentPostList
    });
  }

  componentDidMount() {
    this.setState({
      postList: PostData
    });
  }

  render() {
    const { postList } = this.state;
    return (
      <div>
        <h1>Hello World</h1>
        {PostData.map((item, index) => {
          return (
            <PostDetail
              post={item}
              key={`post-list-key ${index}`}
              didHandleRemove={this.handlePostRemove}
              dataCallback={this.handleDataCallback}
            />
          );
        })}
      </div>
    );
  }
}

export default PostList;
