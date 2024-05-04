import { Request, Response } from 'express'
import { InsertUserUseCase } from "../useCases/insertUserUseCase";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/User";
import { UserAlreadyExistsError } from "../useCases/errors/UserAlreadyExistsError";
import { FindbyIdUserUseCase } from "../useCases/findByIdUserUseCase";
import { UserNotFoundError } from "../useCases/errors/UserNotFoundError";
import { FindTermUserUseCase } from "../useCases/findTermUserUseCase";
import { format, isValid, parse } from "date-fns";

interface PersonType {
  apelido?: string
  nome?: string
  nascimento?: string
  stack?: string[] | null
}

export class UserController {
  async create(request: Request, reply: Response) {
    const { nome, apelido, nascimento, stack } = request.body as PersonType;

    if (!nome || !apelido || !nascimento) {
      return reply.status(422).json();
    }

    if (!Array.isArray(stack)) return reply.status(400).json();

    if (!stack.every(text => text.length < 32)) return reply.status(400).json();

    const parsedDate = parse(nascimento, 'yyyy-MM-dd', new Date());
    const isValidDate = isValid(parsedDate);

    if (!isValidDate) return reply.status(422).json();

    const userModel = new User({ nome, apelido, nascimento, stack })
    try {
      const insertUserUseCase = new InsertUserUseCase(new UserRepository());
      const response = await insertUserUseCase.execute(userModel)

      return reply.status(201).json(response);
    } catch (error) {
      console.log(error)
      if (error instanceof UserAlreadyExistsError) return reply.status(422).json({ message: error.message })
    }
  }

  async findById(request: Request, reply: Response) {
    try {
      const id = request.params?.id
      const findByIdUseCase = new FindbyIdUserUseCase(new UserRepository());

      const response = await findByIdUseCase.execute(id);

      return reply.status(200).json(response)
    } catch (error) {
      if (error instanceof UserNotFoundError) return reply.status(404).json({ message: error.message })
    }
  }

  async findByTerm(request: Request, reply: Response) {
    const t = request.query.t;

    if (!t || typeof t !== 'string') return reply.status(400).send({ message: 'query param t is required!' })

    const findByIdUseCase = new FindTermUserUseCase(new UserRepository());

    const response = await findByIdUseCase.execute(t);

    return reply.status(200).json(response)
  }

  async count(request: Request, reply: Response) {
    const userRepository = new UserRepository();

    const count = await userRepository.count();


    return reply.status(200).json({ count });
  }
}