const app = require("./http/app");

const port = process.env.SERVER_PORT || 3333;

app.listen(port, () => {
  console.log(`Active app at: http://localhost:${port}`);
});
