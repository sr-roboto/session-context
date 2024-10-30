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
    return user;
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

export { loginUserService, logoutUserService };
