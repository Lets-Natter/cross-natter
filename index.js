const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(bodyParser.json());

const crossNatterByNatterId = {};

app.get("/natters/:id/cross-natter", (req, res) => {
  res.send(crossNatterByNatterId[req.params.id] || []);
});

app.post("/natters/:id/cross-natter", async (req, res) => {
  const crossNatterId = uuidv4();
  const { crossNatter } = req.body;

  const crossNatters = crossNatterByNatterId[req.params.id] || [];
  crossNatters.push({ id: crossNatterId, crossNatter });
  crossNatterByNatterId[req.params.id] = crossNatters;

  res.status(201).send(crossNatters);
});

app.listen(5001, () => console.log("Listening on 5001.."));
