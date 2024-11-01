import { User } from '../models/user.model.js';
import { createAccesToken } from '../libs/jwt.lib.js';
import jwt from 'jsonwebtoken';

const loginUserService = async (userData) => {
  try {
    const { email, password } = userData;

    console.log(userData);

    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      },
    });
    console.log(user);

    const idUser = await User.findByPk(1);

    console.log(idUser);

    if (!user) {
      throw new Error('Usuario no encontrado.');
    }

    const token = await createAccesToken({ id: user.id });

    if (!token) {
      throw new Error('Error al crear el token.');
    }
    return { user, token };
  } catch (e) {
    throw e;
  }
};

const logoutUserService = async () => {
  try {
    return 'Logout';
  } catch (e) {
    console.log(e);
  }
};

const verifyTokenService = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return { decoded };
  } catch (e) {
    throw e;
  }
};

export { loginUserService, logoutUserService, verifyTokenService };
