import { EventEmitter } from 'events';
import { IUser } from '../models/User'
import { createUserQueue } from '../lib/bull';

let bulkAdd: IUser[] = []

setInterval(() => {
  if (bulkAdd.length < 1) return;

  createUserQueue.add(bulkAdd);

  bulkAdd = [];
}, 15000)

export const eventEmitter = new EventEmitter();

eventEmitter.on('add', (data: IUser) => {
  bulkAdd.push(data);
})