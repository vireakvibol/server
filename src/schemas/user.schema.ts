import { Dgraph } from 'src/classes/dgraph.class';

export class UserSchema {
  public static async init(): Promise<void> {
    Dgraph.setSchema('name: string @index(exact) .');
  }
}
