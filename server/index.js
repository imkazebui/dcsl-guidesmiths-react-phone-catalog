const express = require("express");
const cors = require("cors");
const app = express();

const validators = require("./validators/phone");
const phoneControllers = require("./controllers/phone");

app.use(express.json());
app.use(cors());

app.get("/phones", phoneControllers.getPhones);

app.get("/phones/:id", phoneControllers.getPhoneById);

app.post("/phones", validators, phoneControllers.addPhone);

app.delete("/phones/:id", phoneControllers.removePhone);

app.listen(3001, () => {
  console.log("Server listening on Port 3001");
});
