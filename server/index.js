const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const validators = require("./validators/phone");
const phoneControllers = require("./controllers/phone");

app.use(express.json());
app.use(cors());

app.get("/phones", phoneControllers.getPhones);

app.get("/phones/:id", phoneControllers.getPhoneById);

app.post("/phones", validators, phoneControllers.addPhone);

app.delete("/phones/:id", phoneControllers.removePhone);

app.listen(PORT, () => {
  console.log(`Server listening on Port 3001 ${PORT}`);
});
