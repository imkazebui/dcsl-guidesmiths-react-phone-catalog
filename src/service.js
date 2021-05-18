const axios = require("axios");
const root = "http://localhost:3001";
export const getPhones = async () => {
  try {
    const phones = await axios.get(root + "/phones");
    return phones;
  } catch (error) {
    return {error}
  }
};
export const getPhoneById = async id => {
  try {
    const phone = await axios.get(root + "/phones/" + id);
    return phone;
  } catch (error) {
    throw new Error("No device found")
  }
};
