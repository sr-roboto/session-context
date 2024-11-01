import axios from './axios';

const loginRequest = async (userCredentials) => {
  try {
    const res = await axios.post('/login', userCredentials);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const logoutRequest = async () => {
  try {
    const res = await axios.post('/logout');
    return res;
  } catch (err) {
    console.log(err);
  }
};

const verifyTokenRequest = async () => {
  try {
    const res = await axios.get('/verify');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { loginRequest, logoutRequest, verifyTokenRequest };
