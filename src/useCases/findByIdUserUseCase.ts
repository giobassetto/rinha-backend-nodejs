import { cache } from '../lib/redis';
import { UserRepository } from '../repositories/user.repository'
import { UserNotFoundError } from './errors/UserNotFoundError';

export class FindbyIdUserUseCase {
  constructor(private usersRepository: UserRepository) { }
  async execute(userId: string) {
    const cached = await cache.get(userId);

    if (cached) return JSON.parse(cached);

    const user = await this.usersRepository.findById(userId);

    if (!user) throw new UserNotFoundError()

    await cache.set(userId, JSON.stringify(user))

    return user;
  }
}