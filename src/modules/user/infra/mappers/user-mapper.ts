import { User } from '../../domain/User';
import { UserSchema } from '../mongo/user.schema';

export class UserMapper {
  static parseToEntity(user: UserSchema): User {
    return {
      id: user._id,
      email: user.email,
      nome: user.nome,
      telefone: user.telefone,
      password: user.password
    }
  }
  static parseToList(users: UserSchema[]):User[]{
    const userList:User[] = []
    
      users.map(user => {
        let userEntity: User = {
          id:user._id,
          email:user.email,
          nome: user.nome,
          telefone: user.telefone, 
          password: user.password
        }

        userList.push(userEntity)
      })
    return userList
  }
 static parseToSchema(user: User): UserSchema {
    const userSchema = new UserSchema();

    userSchema._id = user.id,
    userSchema.email= user.email,
    userSchema.nome= user.nome,
    userSchema.telefone =  user.telefone,
    userSchema.password = user.password

    return userSchema
  }
}