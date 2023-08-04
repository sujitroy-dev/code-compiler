const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const compiler = require("compilex");
const options = { stats: true };
compiler.init(options);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});
app.post("/python", async (req, res) => {
  const code = req.body.code;
  const envData = { OS: "linux" };

  try {
    compiler.compilePython(envData, code, (data) => {
      res.json({
        message: "Successfully compiled",
        data,
      });
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = app;
