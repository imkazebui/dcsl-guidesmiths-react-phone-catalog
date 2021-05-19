const { check } = require("express-validator");
module.exports = [
  check("name").not().isEmpty().withMessage("Must provide product name"),
  check("description")
    .not()
    .isEmpty()
    .withMessage("Must provide product description"),
  check("manufacturer")
    .not()
    .isEmpty()
    .withMessage("Must provide product manufacturer"),
  check("color").not().isEmpty().withMessage("Must provide product color"),
  check("price").not().isEmpty().withMessage("Must provide product price"),
  check("imageFileName")
    .not()
    .isEmpty()
    .withMessage("Must provide product image"),
  check("screen").not().isEmpty().withMessage("Must provide product screen"),
  check("processor")
    .not()
    .isEmpty()
    .withMessage("Must provide product processor"),
  check("ram").not().isEmpty().withMessage("Must provide product ram"),
];
