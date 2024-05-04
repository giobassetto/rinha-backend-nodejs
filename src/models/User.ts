import { Schema } from "mongoose";

export interface IUser {
  nome: string;
  apelido: string;
  nascimento: string;
  stack?: string[] | null
}

export class User {
  nome: string;
  apelido: string;
  nascimento: string;
  stack: string[] | null

  constructor(props: IUser) {
    this.apelido = props.apelido;
    this.nascimento = props.nascimento;
    this.nome = props.nome;
    this.stack = props.stack || null;
  }

  toObject() {
    return { ...this, stack: !this.stack ? [] : this.stack }
  }
}

export const UserSchema = new Schema<IUser>({
  nome: { type: String, required: true },
  apelido: { type: String, required: true },
  nascimento: { type: String, required: true },
  stack: { type: [String] },
});

UserSchema.index({ nome: 'text', apelido: 'text', stack: 'text' });
UserSchema.index({ stack: 1 });
UserSchema.index({
  nome: 'ascending',
  apelido: 'ascending',
  stack: 'ascending',
});