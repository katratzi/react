import React from "react";
//import ReactComp, { Component } from "react";
//import PostList from "./posts/PostList";
// import ConstLetVar from "./learn/ConstLetVar";
// import PostDetail from "./posts/PostDetail";
import ReactYoutubeExample from "./thirdParty/ReactYoutubeExample";

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
    return (
      <div>
        return <ReactYoutubeExample videoId="6vCKWxqyRf4" />;
      </div>
    );
  }
}

export default App;
