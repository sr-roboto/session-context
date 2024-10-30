import axios from './axios';

export const loginRequest = async (userCredentials) => {
  try {
    const res = await axios.post('/auth/login', userCredentials);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const logoutRequest = async () => {
  try {
    const res = await axios.post('/auth/logout');
    return res;
  } catch (err) {
    console.log(err);
  }
};
