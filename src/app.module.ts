import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
