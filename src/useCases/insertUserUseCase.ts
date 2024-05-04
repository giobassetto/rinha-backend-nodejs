import { createUserQueue } from '../lib/bull';
import { cache } from '../lib/redis';
import { IUser, User } from '../models/User'
import { UserRepository } from '../repositories/user.repository';
import { UserAlreadyExistsError } from './errors/UserAlreadyExistsError';
import { eventEmitter } from '../events'

export class InsertUserUseCase {
  constructor(private usersRepository: UserRepository) { }
  async execute(user: User) {
    const cachedApelido = await cache.get(user.apelido);

    if (cachedApelido) throw new UserAlreadyExistsError()

    await cache.set(user.apelido, JSON.stringify(user.toObject()))

    eventEmitter.emit('add', user);

    return {}
  }
}