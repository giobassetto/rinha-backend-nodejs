import Queue from 'bull'

export const createUserQueue = new Queue('create-user', { redis: { port: 6379, host: 'cache' } });
