import React from "react";
import PostList from "./posts/PostList";
import PostData from "./data/posts.json";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PostList />
        {PostData.map((postDetail, index) => {
          return (
            <div>
              <h1>{postDetail.title}</h1>
              <p>{postDetail.content}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
