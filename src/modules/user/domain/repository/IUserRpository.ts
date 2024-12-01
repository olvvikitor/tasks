import { User } from '../User';

export interface IUserRepository<T>{
  create(user :Partial<T>): Promise<User>
  findAll():Promise<User[]>
}