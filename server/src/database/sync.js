import { User } from '../models/user.model.js';
import { sequelize } from '../database/db.js';

const syncModels = async () => {
  try {
    await User.sync({ force: false });
    console.log('Modelos sincronizados correctamente.');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
};

syncModels();
