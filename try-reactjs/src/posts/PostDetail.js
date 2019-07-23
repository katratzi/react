import React, { Component } from "react";

class PostDetail extends Component {
  render() {
    const { post } = this.props;
    //   const post = this.props.post;
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostDetail;
