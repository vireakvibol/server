import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class App {
  @Field(type => String)
  id: string;
}