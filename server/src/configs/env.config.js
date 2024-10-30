import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const JWT_SECRET = process.env.JWT_SECRET;

export { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS, PORT, JWT_SECRET };
