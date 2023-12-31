import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/App";

// before:
// import { StaticRouter } from "react-router-dom";

// now you can just pass your root component and everything works fine?
//
const app = express();

app.use(express.static("./build"));

app.get("/*", (req, res) => {
  const reactApp = renderToString(<App />);
  return res.send(`
  <html>
    <body>
      <div id="root">${reactApp}</div>
    </body>
  </html>
`);
});

app.listen(8080, () => {
  console.log(`Server is listening on port ${8080}`);
});
