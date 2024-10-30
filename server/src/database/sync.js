import { User } from '../models/user.model.js';

const syncModels = async () => {
  try {
    await User.sync({ force: true });
    console.log('Modelos sincronizados correctamente.');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
};

syncModels();
