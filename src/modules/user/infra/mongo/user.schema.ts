import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserSchema extends Document{

  @Prop({type:String, required: true})
  nome:string

  @Prop({type:String, required: true})
  email:string

  @Prop({type:String, required: true})
  password:string

  @Prop({type:String, required: true})
  telefone:string

}
export const UserModel = SchemaFactory.createForClass(UserSchema)