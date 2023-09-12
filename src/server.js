import express from "express";

const app = express();

app.get("/*", (req, res) => {
  const reactApp = renderToString(<h1>Hello from the other side</h1>);
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
