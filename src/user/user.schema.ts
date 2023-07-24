import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';

@Schema()
export class User extends Document {
  @Factory((faker) => faker.person.fullName())
  @Prop()
  name: string;
}

export const userSchema = SchemaFactory.createForClass(User);
