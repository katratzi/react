import React, { Component } from "react";

class PostDetail extends Component {
  constructor(props) {
    // need this to get the properties for use in the titleWasClicked
    super(props);
    this.titleWasClicked = this.titleWasClicked.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.handleRemoveContentButton = this.handleRemoveContentButton.bind(this);
    this.state = {
      showContent: true,
      postItem: null
    };
  }

  handleRemoveContentButton(event) {
    event.preventDefault();
    if (this.props.didHandleRemove) {
      this.props.didHandleRemove(this.props.post);
    }
  }

  titleWasClicked(event) {
    event.preventDefault();
    const { dataCallback } = this.props;
    let newPostItem = this.props.post;
    newPostItem["title"] = "My New Title";
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
            <button onClick={this.handleRemoveContentButton}>
              Remove Content
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default PostDetail;
