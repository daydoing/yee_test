"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_1 = require("grpc");
const rpc_grpc_pb_js_1 = require("./rpc/rpc_grpc_pb.js");
class Client {
    constructor() { }
    static apiServiceClient(address) {
        if (!Client._apiServiceClient) {
            return new rpc_grpc_pb_js_1.ApiServiceClient(address, grpc_1.credentials.createInsecure());
        }
        return Client._apiServiceClient;
    }
    static adminServiceClient(address) {
        if (!Client._adminClient) {
            return new rpc_grpc_pb_js_1.AdminServiceClient(address, grpc_1.credentials.createInsecure());
        }
        return Client._adminClient;
    }
}
exports.Client = Client;
