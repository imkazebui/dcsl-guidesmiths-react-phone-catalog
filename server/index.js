const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data.json");
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
app.listen(3001, () => {
  console.log("Server listening on Port 3001");
});
