import React from "react";
import * as reactRouterDom from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>SSR example</h1>

      <ul>
        <li>
          <reactRouterDom.Link to="/">Home</reactRouterDom.Link>
        </li>
        <li>
          <reactRouterDom.Link to="/about">About</reactRouterDom.Link>
        </li>
        <li>
          <reactRouterDom.Link to="/articles">Articles</reactRouterDom.Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
