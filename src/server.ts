import express from 'express'
import routes from './routes'
import 'dotenv/config';
import './lib/mongodb';
import './lib/redis';
import './process';

export const app = express()

app.use(express.json());

app.use(routes);
app.use((req, res) => {
  res.status(400).json({ message: 'not found' })
})
