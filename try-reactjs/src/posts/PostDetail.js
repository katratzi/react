import React, { Component } from "react";

class PostDetail extends Component {
  constructor(props) {
    // need this to get the properties for use in the titleWasClicked
    super(props);
    this.titleWasClicked = this.titleWasClicked.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.state = {
      showContent: true,
      postItem: null
    };
  }

  titleWasClicked(event) {
    event.preventDefault();
    const { dataCallback } = this.props;
    const newPostItem = {
      title: "New Title",
      // content: this.state.postItem.content
      content: this.state.postItem.content
    };
    this.setState({
      postItem: newPostItem
    });

    if (dataCallback !== undefined) {
      dataCallback(newPostItem);
    }
  }

  toggleContent(event) {
    event.preventDefault();
    this.setState({ showContent: !this.state.showContent });
  }

  componentDidMount() {
    const { post } = this.props;
    this.setState({
      postItem: post
    });
  }

  render() {
    const { postItem } = this.state;
    const { showContent } = this.state;
    return (
      <div>
        {postItem !== null ? (
          <div>
            <h1 onClick={this.titleWasClicked}>{postItem.title}</h1>
            {showContent === true ? <p>{postItem.content}</p> : ""}

            <button onClick={this.toggleContent}>Toggle Content Display</button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default PostDetail;
