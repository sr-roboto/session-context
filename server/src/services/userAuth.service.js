import { User } from '../models/user.model.js';

const loginUserService = async (userData) => {
  try {
    if (!userData) {
      throw new Error('Datos de usuario no proporcionados.');
    }

    const { email, password } = userData;

    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      },
    });

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
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    throw e;
  }
};

export { loginUserService, logoutUserService, verifyTokenService };
