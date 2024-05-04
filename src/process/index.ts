import { Job } from "bull";
import { createUserQueue } from "../lib/bull";
import { IUser, User } from "../models/User";
import { UserRepository } from '../repositories/user.repository'
import { UserAlreadyExistsError } from "../useCases/errors/UserAlreadyExistsError";

const usersRepository = new UserRepository();

createUserQueue.process(async (job: Job<IUser[]>, done) => {
  console.log('Inserted Data in bulk: ' + job.data.length);
  await usersRepository.bulkInsert(job.data)


  console.log('Bulk Insert Success');

  done(null);

})

// createUserQueue.on('error', (job: Job, error: any) => console.log(error))