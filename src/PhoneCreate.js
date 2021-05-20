import React, { useState } from "react";
import { createPhone, debounce } from "./service";

const PhoneCreate = ({ addDevice }) => {
  const [formFields, setForm] = useState({
    name: "",
    manufacturer: "",
    description: "",
    color: "",
    price: 0,
    imageFileName: "",
    screen: "",
    processor: "",
    ram: 0,
  });
  const handleFormChange = fieldName => e => {
    const value = e.target.value;
    setForm(prev => ({ ...prev, [fieldName]: value }));
  };
  const submit = async () => {
    try {
      const res = await createPhone(formFields);
      addDevice(res.newDevice);
    } catch (error) {
      console.log({ error });
    }
  };
  const handleSubmit = debounce(submit, 250)

  const isDisabled = () => {
    return (
      !formFields.name ||
      !formFields.manufacturer ||
      !formFields.description ||
      !formFields.color ||
      !formFields.price ||
      !formFields.imageFileName ||
      !formFields.screen ||
      !formFields.processor ||
      !formFields.ram 
    );
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={formFields.name}
            onChange={handleFormChange("name")}
          ></input>
        </div>
        <div className="form-group">
          <label>Manufacturer:</label>
          <input
            className="form-control"
            type="text"
            name="manufacturer"
            value={formFields.manufacturer}
            onChange={handleFormChange("manufacturer")}
          ></input>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formFields.description}
            className="form-control"
            onChange={handleFormChange("description")}
          ></input>
        </div>
        <div className="form-group">
          <label>Color:</label>
          <input
            type="text"
            name="color"
            value={formFields.color}
            className="form-control"
            onChange={handleFormChange("color")}
          ></input>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            name="price"
            onChange={handleFormChange("price")}
            value={formFields.price}
          ></input>
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            className="form-control"
            type="text"
            name="imageFileName"
            value={formFields.imageFileName}
            onChange={handleFormChange("imageFileName")}
          ></input>
        </div>
        <div className="form-group">
          <label>Screen:</label>
          <input
            type="text"
            name="screen"
            value={formFields.screen}
            className="form-control"
            onChange={handleFormChange("screen")}
          ></input>
        </div>
        <div className="form-group">
          <label>Processor:</label>
          <input
            type="text"
            name="processor"
            value={formFields.processor}
            className="form-control"
            onChange={handleFormChange("processor")}
          ></input>
        </div>
        <div className="form-group">
          <label>Ram:</label>
          <input
            className="form-control"
            type="number"
            name="ram"
            value={formFields.ram}
            onChange={handleFormChange("ram")}
          ></input>
        </div>
      </form>
      <button
        className="button-add button-custom"
        disabled={isDisabled()}
        style={{ marginTop: "10px", float: "right" }}
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default PhoneCreate;
