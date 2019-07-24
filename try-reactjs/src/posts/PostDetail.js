import React, { Component } from "react";

class PostDetail extends Component {
  constructor(props) {
    // need this to get the properties for use in the titleWasClicked
    super(props);
    this.titleWasClicked = this.titleWasClicked.bind(this);
  }

  titleWasClicked(event) {
    event.preventDefault();
    const { dataCallback } = this.props;
    console.log(dataCallback);
    const { post } = this.props;
    if (dataCallback !== undefined) {
      dataCallback("hello world!", post.content);
    }
  }

  render() {
    const { post } = this.props;
    //   const post = this.props.post;
    return (
      <div>
        <h1 onClick={this.titleWasClicked}>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostDetail;
