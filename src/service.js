const axios = require("axios");
const root = "http://localhost:3001";
export const getPhones = async () => {
  try {
    const phones = await axios.get(root + "/phones");
    return phones;
  } catch (error) {
    throw new Error("No devices found")
  }
};
export const getPhoneById = async id => {
  try {
    const phone = await axios.get(root + "/phones/" + id);
    return phone;
  } catch (error) {
    throw new Error("No device found");
  }
};
export const createPhone = async phoneData => {
  try {
    const res = await axios.post(root + "/phones", phoneData);
    return res.data;
  } catch (error) {
    throw new Error("Error creating resource");
  }
};
export const removePhone = async id => {
  try {
    await axios.delete(root + "/phones/" + id);
    console.log("Successfully remove device")
  } catch (error) {
    throw new Error("Error removing device", error);
  }
};
export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
