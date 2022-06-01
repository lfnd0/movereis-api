const app = require("./api/app");

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Active app at: http://localhost:${port}.\nDocumentation at: http://localhost:${port}/api-docs`);
});
