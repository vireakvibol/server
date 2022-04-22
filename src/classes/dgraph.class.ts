import * as dgraph from 'dgraph-js';
import { UserSchema } from 'src/schemas/user.schema';

export class Dgraph {
  public static async init(): Promise<void> {
    const clientStub = dgraph.clientStubFromCloudEndpoint(
      'https://green-feather-470079.ap-south-1.aws.cloud.dgraph.io/graphql',
      'ZDMzMGI0MjdjYmUyMTI1ZjMwMDYxMGIwYjU1NDU5NWE=',
    );
    global.dgraphClient = new dgraph.DgraphClient(clientStub);

    // Initialize the schema.
    UserSchema.init();

  }

  public static async setSchema(schema: string): Promise<void> {
    const op = new dgraph.Operation();
    op.setSchema(schema);
    global.dgraphClient.alter(op);
  }

}
