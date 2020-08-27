import * as SecureStorage from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";
const storeToken = async (authToken) => {
  try {
    await SecureStorage.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the token ", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStorage.getItemAsync(key);
  } catch (error) {
    console.log("Error while getting the token, ", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStorage.deleteItemAsync(key);
  } catch (error) {
    console.log("Error while removing token, ", error);
  }
};

export default {
  getToken,
  getUser,
  storeToken,
  removeToken,
};
