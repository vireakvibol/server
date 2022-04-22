import { Query, Resolver } from '@nestjs/graphql';
import { App } from './app.model';

@Resolver()
export class AppResolver {
  @Query(() => App)
  async App() {
    console.log
    return {
      id: '1',
    };
  }
}
