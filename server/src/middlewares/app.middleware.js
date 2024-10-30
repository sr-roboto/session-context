import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const applyMiddlewares = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
};

export { applyMiddlewares };
