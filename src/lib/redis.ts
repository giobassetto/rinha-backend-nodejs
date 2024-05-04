import { createClient } from 'redis';

export const cache = createClient({
  url: `redis://cache:6379`
})
  .on('error', err => console.log('Redis Client Error', err))

async function main() {
  await cache.connect();
}

main();
console.log("Redis is running")
