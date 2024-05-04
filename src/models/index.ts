import mongoose from 'mongoose'
import { UserSchema } from './User';

export const UserModel = mongoose.model('User', UserSchema)