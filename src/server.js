const app = require("./http/app");

const port = 3333;

app.listen(port, () => {
  console.log(`Active app at: http://localhost:${port}`);
});
