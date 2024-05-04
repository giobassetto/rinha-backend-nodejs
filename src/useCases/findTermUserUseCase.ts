import { UserRepository } from '../repositories/user.repository'

export class FindTermUserUseCase {
  constructor(private usersRepository: UserRepository) { }
  async execute(term: string) {
    const users = await this.usersRepository.findByTerm(term);

    return users;
  }
}