import axios from "axios";
const root = process.env.REACT_APP_SERVER_URL;
export const getPhones = async () => {
  try {
    const phones = await axios.get(root + "/phones");
    return phones;
  } catch (error) {
    throw new Error("No devices found");
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
  } catch (error) {
    throw new Error("Error removing device", error);
  }
};
