import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class ReactMarkdownExample extends Component {
  render() {
    const { input } = this.props;
    const disallowed = ["image"]; // can disallow links/images...lots of things

    return (
      <ReactMarkdown
        className="markdownContainer"
        source={input}
        escapeHtml={false}
        disallowedTypes={disallowed}
      />
    );
  }
}

export default ReactMarkdownExample;
