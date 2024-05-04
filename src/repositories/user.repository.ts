import { IUser, User } from '../models/User'
import { UserModel } from '../models'

export class UserRepository {
  private userModel = UserModel;
  constructor() { }
  async findById(userId: string) {
    try {
      return this.userModel.findById(userId)
    } catch (err) {
      console.log(err);
    }
  }

  async findByApelido(apelido: string) {
    try {
      return await this.userModel.findOne({
        apelido
      })
    } catch (err) {
      console.log(err);
    }
  }

  async bulkInsert(users: IUser[]) {
    try {
      return await this.userModel.insertMany(users)
    } catch (err) {
      console.error(err);
    }
  }

  async insert(user: IUser) {
    try {
      return await this.userModel.create({ ...user })
    } catch (err) {
      console.error(err);
    }
  }

  async findByTerm(term: string) {
    try {
      return await this.userModel.find({
        $text: {
          $caseSensitive: false,
          $search: term
        }
      },
      ).limit(50)
    } catch (err) {
      console.log(err);
    }
  }

  async count() {
    return this.userModel.count();
  }
}