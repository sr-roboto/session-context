import {
  loginUserService,
  logoutUserService,
} from '../services/userAuth.service.js';

const loginUserController = async (req, res) => {
  try {
    const userData = req.body;
    if (!userData) {
      return res.status(400).send('Datos de usuario no proporcionados.');
    }
    const user = await loginUserService(userData);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
};

const logoutUserController = async (req, res) => {
  try {
    const response = await logoutUserService();
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
};

export { loginUserController, logoutUserController };
