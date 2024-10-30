import { app } from './app.js';
import { connectDb } from './database/db.js';
import { PORT } from './configs/env.config.js';
import './database/sync.js';

// Start the server
app.listen(PORT, () => {
  connectDb();
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
