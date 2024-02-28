import Api from "../services/axios";
import errorHandle from "./error";


export const signUp = async (userData) => {
  try {
    const response = await Api.post('/user/sign-up', userData);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
}

export const login = async (loginData) => {
  try {
    const response = await Api.post('/user/login', loginData);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
}

export const logout = async () => {
  try {
    const response = await Api.post('/user/logout');
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};