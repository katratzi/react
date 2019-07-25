import React, { Component } from "react";

class PostDetail extends Component {
  constructor(props) {
    // need this to get the properties for use in the titleWasClicked
    super(props);
    this.titleWasClicked = this.titleWasClicked.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.state = { showContent: true };
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

  toggleContent(event) {
    event.preventDefault();
    this.setState({ showContent: !this.state.showContent });
  }

  render() {
    const { post } = this.props;
    //   const post = this.props.post;
    const { showContent } = this.state;
    return (
      <div>
        <h1 onClick={this.titleWasClicked}>{post.title}</h1>
        {showContent === true ? <p>{post.content}</p> : ""}

        <button onClick={this.toggleContent}>Toggle Content Display</button>
      </div>
    );
  }
}

export default PostDetail;
