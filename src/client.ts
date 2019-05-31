import { credentials } from "grpc";
import { ApiServiceClient, AdminServiceClient } from "./rpc/rpc_grpc_pb.js";

export class Client {
  private static _adminClient: AdminServiceClient;
  private static _apiServiceClient: ApiServiceClient;

  private constructor() {}

  public static apiServiceClient(address: string): ApiServiceClient {
    if (!Client._apiServiceClient) {
      return new ApiServiceClient(address, credentials.createInsecure());
    }

    return Client._apiServiceClient;
  }

  public static adminServiceClient(address: string): AdminServiceClient {
    if (!Client._adminClient) {
      return new AdminServiceClient(address, credentials.createInsecure());
    }

    return Client._adminClient;
  }
}
