import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const applyMiddlewares = (app) => {
  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cookieParser());
};

export { applyMiddlewares };
