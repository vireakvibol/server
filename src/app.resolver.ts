import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query()
  async App() {
    return {
      id: '1',
    };
  }
}
