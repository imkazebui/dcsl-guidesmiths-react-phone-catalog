const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data.json");
const validators = require("./validator");
const { validationResult } = require("express-validator");
app.use(express.json());
app.use(cors());

app.get("/phones", (req, res) => {
  setTimeout(() => {
    return res.status(200).send(data);
  }, 500);
});

app.get("/phones/:id", (req, res) => {
  const id = req.params.id;
  const phone = data.find(phone => phone.id == id);
  if (!phone) {
    return res.status(404).send({ error: "This phone doesn't exist" });
  }
  setTimeout(() => {
    return res.send(phone);
  }, 500);
});

app.post("/phones", validators, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors);
    }
    const id = data.length;
    const newDevice = {...req.body, id}
    data.push(newDevice);
    setTimeout(() => {
      return res.status(201).send({newDevice});
    }, 500);
  } catch (error) {
    return res.send({ error });
  }
});

app.listen(3001, () => {
  console.log("Server listening on Port 3001");
});
