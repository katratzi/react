import React from "react";
//import ReactComp, { Component } from "react";
//import PostList from "./posts/PostList";
// import ConstLetVar from "./learn/ConstLetVar";
// import PostDetail from "./posts/PostDetail";
//import ReactYoutubeExample from "./thirdParty/ReactYoutubeExample";
import ReactMarkdownExample from "./thirdParty/ReactMarkdownExample";

import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <PostList />
//       </header>
//     </div>
//   );
// }

// ES6 coding
class App extends React.Component {
  render() {
    const input =
      "<h1>Hello World</h1> \n\n# [This](http://www.icypath.com) is a header\n\nAnd this is a paragraph http://www.bing.com";
    return (
      <div>
        {/* return <ReactYoutubeExample videoId="6vCKWxqyRf4" />; */}
        <ReactMarkdownExample input={input} />;
      </div>
    );
  }
}

export default App;
