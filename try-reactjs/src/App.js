import React from "react";
import ReactComp, { Component } from "react";
import PostList from "./posts/PostList";

import "./App.css";
import ConstLetVar from "./learn/ConstLetVar";
import PostDetail from "./posts/PostDetail";

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
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PostList />
        </header>
      </div>
    );
  }
}

export default App;
