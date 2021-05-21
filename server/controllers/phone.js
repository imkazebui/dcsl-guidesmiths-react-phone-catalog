const { validationResult } = require("express-validator");
const data = require("../data.json");

exports.getPhones = (req, res) => {
  setTimeout(() => {
    return res.status(200).send(data);
  }, 500);
};
exports.getPhoneById = (req, res) => {
  const id = req.params.id;
  const phone = data.find(phone => phone.id == id);
  if (!phone) {
    return res.status(404).send({ error: "This phone doesn't exist" });
  }
  return res.send(phone);
};
exports.addPhone = (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors);
    }
    const id = data.length;
    const newDevice = { ...req.body, id };
    data.push(newDevice);
    return res.status(201).send({ newDevice });
  } catch (error) {
    return res.send({ error });
  }
};
exports.removePhone = (req, res) => {
  const device = data.find(phone => phone.id == req.params.id);
  if (!device) {
    return res.status(404).send({ errors: "No device with this id found" });
  }
  data.splice(data.indexOf(device), 1);
  return res.status(200).send({ message: "Successfully remove device" });
};
