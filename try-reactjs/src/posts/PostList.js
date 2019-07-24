import React, { Component } from "react";
import PostData from "../data/posts.json";
import PostDetail from "./PostDetail";

class PostList extends Component {
  constructor(props) {
    // need this to get the properties for use in the titleWasClicked
    super(props);
    this.handleDataCallback = this.handleDataCallback.bind(this);
  }

  handleDataCallback(txtMsg) {
    alert(txtMsg);
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {PostData.map((item, index) => {
          return (
            <PostDetail
              post={item}
              key={`post-list-key ${index}`}
              dataCallback={this.handleDataCallback}
            />
          );
        })}
      </div>
    );
  }
}

export default PostList;
