import { Token } from '../Token'

export interface ITokenRepository<T>{
  create(createToken: Partial<T>):Promise<void>
  findByToken(token:string):Promise<Token>
}