const express = require("express");
const app = express();
const port = 4000;

app.use("/", require("./compiler.route"));

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
