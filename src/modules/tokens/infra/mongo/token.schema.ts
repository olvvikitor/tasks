import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


@Schema()
export class TokenSchema extends Document{

  @Prop({type:Types.ObjectId, ref: 'User', required:true})
  userId: Types.ObjectId

  @Prop({type:String, required:true})
  token : string

  @Prop({type: Date, required:true})
  exipiresAt:Date

}
export const TokenModel = SchemaFactory.createForClass(TokenSchema)