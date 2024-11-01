import {
  loginUserService,
  logoutUserService,
  verifyTokenService,
} from '../services/userAuth.service.js';

const loginUserController = async (req, res) => {
  try {
    const userData = req.body;
    if (!userData) {
      return res.status(400).send('Datos de usuario no proporcionados.');
    }
    const { user, token } = await loginUserService(userData);
    res.cookie('token', token);
    console.log(req.cookies);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
};

const logoutUserController = async (_req, res) => {
  try {
    const response = await logoutUserService();
    res.clearCookie('token');
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
};

const verifyTokenController = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).send('No autorizado.');
    }
    const { decoded } = await verifyTokenService(token);

    res.status(200).json(decoded);
  } catch (error) {
    console.log(error);
    return res.status(401).send('No autorizado.');
  }
};

export { loginUserController, logoutUserController, verifyTokenController };
