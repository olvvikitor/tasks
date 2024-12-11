import { User } from '../User'

export interface IUserRepository<T>{
  create(user :Partial<T>): Promise<User>
  update(id:any, user :Partial<T>): Promise<void>
  findAll():Promise<User[]>
  findById(idUser:any):Promise<User>
}