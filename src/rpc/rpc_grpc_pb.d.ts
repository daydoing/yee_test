// package: rpcpb
// file: src/rpc/rpc.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as src_rpc_rpc_pb from "../../src/rpc/rpc_pb";

interface IApiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    nodeInfo: IApiServiceService_INodeInfo;
    getBlockByHash: IApiServiceService_IGetBlockByHash;
    getBlockByHeight: IApiServiceService_IGetBlockByHeight;
    getLastBlock: IApiServiceService_IGetLastBlock;
    getTxByHash: IApiServiceService_IGetTxByHash;
    getAccountState: IApiServiceService_IGetAccountState;
}

interface IApiServiceService_INodeInfo extends grpc.MethodDefinition<src_rpc_rpc_pb.NonParamsRequest, src_rpc_rpc_pb.NodeInfoResponse> {
    path: string; // "/rpcpb.ApiService/NodeInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_rpc_rpc_pb.NonParamsRequest>;
    requestDeserialize: grpc.deserialize<src_rpc_rpc_pb.NonParamsRequest>;
    responseSerialize: grpc.serialize<src_rpc_rpc_pb.NodeInfoResponse>;
    responseDeserialize: grpc.deserialize<src_rpc_rpc_pb.NodeInfoResponse>;
}
interface IApiServiceService_IGetBlockByHash extends grpc.MethodDefinition<src_rpc_rpc_pb.GetBlockByHashRequest, src_rpc_rpc_pb.BlockResponse> {
    path: string; // "/rpcpb.ApiService/GetBlockByHash"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_rpc_rpc_pb.GetBlockByHashRequest>;
    requestDeserialize: grpc.deserialize<src_rpc_rpc_pb.GetBlockByHashRequest>;
    responseSerialize: grpc.serialize<src_rpc_rpc_pb.BlockResponse>;
    responseDeserialize: grpc.deserialize<src_rpc_rpc_pb.BlockResponse>;
}
interface IApiServiceService_IGetBlockByHeight extends grpc.MethodDefinition<src_rpc_rpc_pb.GetBlockByHeightRequest, src_rpc_rpc_pb.BlockResponse> {
    path: string; // "/rpcpb.ApiService/GetBlockByHeight"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_rpc_rpc_pb.GetBlockByHeightRequest>;
    requestDeserialize: grpc.deserialize<src_rpc_rpc_pb.GetBlockByHeightRequest>;
    responseSerialize: grpc.serialize<src_rpc_rpc_pb.BlockResponse>;
    responseDeserialize: grpc.deserialize<src_rpc_rpc_pb.BlockResponse>;
}
interface IApiServiceService_IGetLastBlock extends grpc.MethodDefinition<src_rpc_rpc_pb.GetLastBlockRequest, src_rpc_rpc_pb.GetLastBlockResponse> {
    path: string; // "/rpcpb.ApiService/GetLastBlock"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_rpc_rpc_pb.GetLastBlockRequest>;
    requestDeserialize: grpc.deserialize<src_rpc_rpc_pb.GetLastBlockRequest>;
    responseSerialize: grpc.serialize<src_rpc_rpc_pb.GetLastBlockResponse>;
    responseDeserialize: grpc.deserialize<src_rpc_rpc_pb.GetLastBlockResponse>;
}
interface IApiServiceService_IGetTxByHash extends grpc.MethodDefinition<src_rpc_rpc_pb.GetTxByHashRequest, src_rpc_rpc_pb.TransactionResponse> {
    path: string; // "/rpcpb.ApiService/GetTxByHash"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_rpc_rpc_pb.GetTxByHashRequest>;
    requestDeserialize: grpc.deserialize<src_rpc_rpc_pb.GetTxByHashRequest>;
    responseSerialize: grpc.serialize<src_rpc_rpc_pb.TransactionResponse>;
    responseDeserialize: grpc.deserialize<src_rpc_rpc_pb.TransactionResponse>;
}
interface IApiServiceService_IGetAccountState extends grpc.MethodDefinition<src_rpc_rpc_pb.GetAccountStateRequest, src_rpc_rpc_pb.GetAccountStateResponse> {
    path: string; // "/rpcpb.ApiService/GetAccountState"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_rpc_rpc_pb.GetAccountStateRequest>;
    requestDeserialize: grpc.deserialize<src_rpc_rpc_pb.GetAccountStateRequest>;
    responseSerialize: grpc.serialize<src_rpc_rpc_pb.GetAccountStateResponse>;
    responseDeserialize: grpc.deserialize<src_rpc_rpc_pb.GetAccountStateResponse>;
}

export const ApiServiceService: IApiServiceService;

export interface IApiServiceServer {
    nodeInfo: grpc.handleUnaryCall<src_rpc_rpc_pb.NonParamsRequest, src_rpc_rpc_pb.NodeInfoResponse>;
    getBlockByHash: grpc.handleUnaryCall<src_rpc_rpc_pb.GetBlockByHashRequest, src_rpc_rpc_pb.BlockResponse>;
    getBlockByHeight: grpc.handleUnaryCall<src_rpc_rpc_pb.GetBlockByHeightRequest, src_rpc_rpc_pb.BlockResponse>;
    getLastBlock: grpc.handleUnaryCall<src_rpc_rpc_pb.GetLastBlockRequest, src_rpc_rpc_pb.GetLastBlockResponse>;
    getTxByHash: grpc.handleUnaryCall<src_rpc_rpc_pb.GetTxByHashRequest, src_rpc_rpc_pb.TransactionResponse>;
    getAccountState: grpc.handleUnaryCall<src_rpc_rpc_pb.GetAccountStateRequest, src_rpc_rpc_pb.GetAccountStateResponse>;
}

export interface IApiServiceClient {
    nodeInfo(request: src_rpc_rpc_pb.NonParamsRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NodeInfoResponse) => void): grpc.ClientUnaryCall;
    nodeInfo(request: src_rpc_rpc_pb.NonParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NodeInfoResponse) => void): grpc.ClientUnaryCall;
    nodeInfo(request: src_rpc_rpc_pb.NonParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NodeInfoResponse) => void): grpc.ClientUnaryCall;
    getBlockByHash(request: src_rpc_rpc_pb.GetBlockByHashRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getBlockByHash(request: src_rpc_rpc_pb.GetBlockByHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getBlockByHash(request: src_rpc_rpc_pb.GetBlockByHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getBlockByHeight(request: src_rpc_rpc_pb.GetBlockByHeightRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getBlockByHeight(request: src_rpc_rpc_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getBlockByHeight(request: src_rpc_rpc_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getLastBlock(request: src_rpc_rpc_pb.GetLastBlockRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetLastBlockResponse) => void): grpc.ClientUnaryCall;
    getLastBlock(request: src_rpc_rpc_pb.GetLastBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetLastBlockResponse) => void): grpc.ClientUnaryCall;
    getLastBlock(request: src_rpc_rpc_pb.GetLastBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetLastBlockResponse) => void): grpc.ClientUnaryCall;
    getTxByHash(request: src_rpc_rpc_pb.GetTxByHashRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    getTxByHash(request: src_rpc_rpc_pb.GetTxByHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    getTxByHash(request: src_rpc_rpc_pb.GetTxByHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    getAccountState(request: src_rpc_rpc_pb.GetAccountStateRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetAccountStateResponse) => void): grpc.ClientUnaryCall;
    getAccountState(request: src_rpc_rpc_pb.GetAccountStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetAccountStateResponse) => void): grpc.ClientUnaryCall;
    getAccountState(request: src_rpc_rpc_pb.GetAccountStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetAccountStateResponse) => void): grpc.ClientUnaryCall;
}

export class ApiServiceClient extends grpc.Client implements IApiServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public nodeInfo(request: src_rpc_rpc_pb.NonParamsRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NodeInfoResponse) => void): grpc.ClientUnaryCall;
    public nodeInfo(request: src_rpc_rpc_pb.NonParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NodeInfoResponse) => void): grpc.ClientUnaryCall;
    public nodeInfo(request: src_rpc_rpc_pb.NonParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NodeInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHash(request: src_rpc_rpc_pb.GetBlockByHashRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHash(request: src_rpc_rpc_pb.GetBlockByHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHash(request: src_rpc_rpc_pb.GetBlockByHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHeight(request: src_rpc_rpc_pb.GetBlockByHeightRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHeight(request: src_rpc_rpc_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHeight(request: src_rpc_rpc_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getLastBlock(request: src_rpc_rpc_pb.GetLastBlockRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetLastBlockResponse) => void): grpc.ClientUnaryCall;
    public getLastBlock(request: src_rpc_rpc_pb.GetLastBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetLastBlockResponse) => void): grpc.ClientUnaryCall;
    public getLastBlock(request: src_rpc_rpc_pb.GetLastBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetLastBlockResponse) => void): grpc.ClientUnaryCall;
    public getTxByHash(request: src_rpc_rpc_pb.GetTxByHashRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public getTxByHash(request: src_rpc_rpc_pb.GetTxByHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public getTxByHash(request: src_rpc_rpc_pb.GetTxByHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public getAccountState(request: src_rpc_rpc_pb.GetAccountStateRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetAccountStateResponse) => void): grpc.ClientUnaryCall;
    public getAccountState(request: src_rpc_rpc_pb.GetAccountStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetAccountStateResponse) => void): grpc.ClientUnaryCall;
    public getAccountState(request: src_rpc_rpc_pb.GetAccountStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.GetAccountStateResponse) => void): grpc.ClientUnaryCall;
}

interface IAdminServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    accounts: IAdminServiceService_IAccounts;
    newAccount: IAdminServiceService_INewAccount;
    unlockAccount: IAdminServiceService_IUnlockAccount;
    lockAccount: IAdminServiceService_ILockAccount;
    sendTransaction: IAdminServiceService_ISendTransaction;
}

interface IAdminServiceService_IAccounts extends grpc.MethodDefinition<src_rpc_rpc_pb.NonParamsRequest, src_rpc_rpc_pb.AccountsResponse> {
    path: string; // "/rpcpb.AdminService/Accounts"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_rpc_rpc_pb.NonParamsRequest>;
    requestDeserialize: grpc.deserialize<src_rpc_rpc_pb.NonParamsRequest>;
    responseSerialize: grpc.serialize<src_rpc_rpc_pb.AccountsResponse>;
    responseDeserialize: grpc.deserialize<src_rpc_rpc_pb.AccountsResponse>;
}
interface IAdminServiceService_INewAccount extends grpc.MethodDefinition<src_rpc_rpc_pb.NewAccountRequest, src_rpc_rpc_pb.NewAccountResponse> {
    path: string; // "/rpcpb.AdminService/NewAccount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_rpc_rpc_pb.NewAccountRequest>;
    requestDeserialize: grpc.deserialize<src_rpc_rpc_pb.NewAccountRequest>;
    responseSerialize: grpc.serialize<src_rpc_rpc_pb.NewAccountResponse>;
    responseDeserialize: grpc.deserialize<src_rpc_rpc_pb.NewAccountResponse>;
}
interface IAdminServiceService_IUnlockAccount extends grpc.MethodDefinition<src_rpc_rpc_pb.UnlockAccountRequest, src_rpc_rpc_pb.UnlockAccountResponse> {
    path: string; // "/rpcpb.AdminService/UnlockAccount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_rpc_rpc_pb.UnlockAccountRequest>;
    requestDeserialize: grpc.deserialize<src_rpc_rpc_pb.UnlockAccountRequest>;
    responseSerialize: grpc.serialize<src_rpc_rpc_pb.UnlockAccountResponse>;
    responseDeserialize: grpc.deserialize<src_rpc_rpc_pb.UnlockAccountResponse>;
}
interface IAdminServiceService_ILockAccount extends grpc.MethodDefinition<src_rpc_rpc_pb.LockAccountRequest, src_rpc_rpc_pb.LockAccountResponse> {
    path: string; // "/rpcpb.AdminService/LockAccount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_rpc_rpc_pb.LockAccountRequest>;
    requestDeserialize: grpc.deserialize<src_rpc_rpc_pb.LockAccountRequest>;
    responseSerialize: grpc.serialize<src_rpc_rpc_pb.LockAccountResponse>;
    responseDeserialize: grpc.deserialize<src_rpc_rpc_pb.LockAccountResponse>;
}
interface IAdminServiceService_ISendTransaction extends grpc.MethodDefinition<src_rpc_rpc_pb.SendTransactionRequest, src_rpc_rpc_pb.SendTransactionResponse> {
    path: string; // "/rpcpb.AdminService/SendTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_rpc_rpc_pb.SendTransactionRequest>;
    requestDeserialize: grpc.deserialize<src_rpc_rpc_pb.SendTransactionRequest>;
    responseSerialize: grpc.serialize<src_rpc_rpc_pb.SendTransactionResponse>;
    responseDeserialize: grpc.deserialize<src_rpc_rpc_pb.SendTransactionResponse>;
}

export const AdminServiceService: IAdminServiceService;

export interface IAdminServiceServer {
    accounts: grpc.handleUnaryCall<src_rpc_rpc_pb.NonParamsRequest, src_rpc_rpc_pb.AccountsResponse>;
    newAccount: grpc.handleUnaryCall<src_rpc_rpc_pb.NewAccountRequest, src_rpc_rpc_pb.NewAccountResponse>;
    unlockAccount: grpc.handleUnaryCall<src_rpc_rpc_pb.UnlockAccountRequest, src_rpc_rpc_pb.UnlockAccountResponse>;
    lockAccount: grpc.handleUnaryCall<src_rpc_rpc_pb.LockAccountRequest, src_rpc_rpc_pb.LockAccountResponse>;
    sendTransaction: grpc.handleUnaryCall<src_rpc_rpc_pb.SendTransactionRequest, src_rpc_rpc_pb.SendTransactionResponse>;
}

export interface IAdminServiceClient {
    accounts(request: src_rpc_rpc_pb.NonParamsRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.AccountsResponse) => void): grpc.ClientUnaryCall;
    accounts(request: src_rpc_rpc_pb.NonParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.AccountsResponse) => void): grpc.ClientUnaryCall;
    accounts(request: src_rpc_rpc_pb.NonParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.AccountsResponse) => void): grpc.ClientUnaryCall;
    newAccount(request: src_rpc_rpc_pb.NewAccountRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NewAccountResponse) => void): grpc.ClientUnaryCall;
    newAccount(request: src_rpc_rpc_pb.NewAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NewAccountResponse) => void): grpc.ClientUnaryCall;
    newAccount(request: src_rpc_rpc_pb.NewAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NewAccountResponse) => void): grpc.ClientUnaryCall;
    unlockAccount(request: src_rpc_rpc_pb.UnlockAccountRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.UnlockAccountResponse) => void): grpc.ClientUnaryCall;
    unlockAccount(request: src_rpc_rpc_pb.UnlockAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.UnlockAccountResponse) => void): grpc.ClientUnaryCall;
    unlockAccount(request: src_rpc_rpc_pb.UnlockAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.UnlockAccountResponse) => void): grpc.ClientUnaryCall;
    lockAccount(request: src_rpc_rpc_pb.LockAccountRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.LockAccountResponse) => void): grpc.ClientUnaryCall;
    lockAccount(request: src_rpc_rpc_pb.LockAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.LockAccountResponse) => void): grpc.ClientUnaryCall;
    lockAccount(request: src_rpc_rpc_pb.LockAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.LockAccountResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: src_rpc_rpc_pb.SendTransactionRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: src_rpc_rpc_pb.SendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: src_rpc_rpc_pb.SendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
}

export class AdminServiceClient extends grpc.Client implements IAdminServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public accounts(request: src_rpc_rpc_pb.NonParamsRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.AccountsResponse) => void): grpc.ClientUnaryCall;
    public accounts(request: src_rpc_rpc_pb.NonParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.AccountsResponse) => void): grpc.ClientUnaryCall;
    public accounts(request: src_rpc_rpc_pb.NonParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.AccountsResponse) => void): grpc.ClientUnaryCall;
    public newAccount(request: src_rpc_rpc_pb.NewAccountRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NewAccountResponse) => void): grpc.ClientUnaryCall;
    public newAccount(request: src_rpc_rpc_pb.NewAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NewAccountResponse) => void): grpc.ClientUnaryCall;
    public newAccount(request: src_rpc_rpc_pb.NewAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.NewAccountResponse) => void): grpc.ClientUnaryCall;
    public unlockAccount(request: src_rpc_rpc_pb.UnlockAccountRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.UnlockAccountResponse) => void): grpc.ClientUnaryCall;
    public unlockAccount(request: src_rpc_rpc_pb.UnlockAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.UnlockAccountResponse) => void): grpc.ClientUnaryCall;
    public unlockAccount(request: src_rpc_rpc_pb.UnlockAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.UnlockAccountResponse) => void): grpc.ClientUnaryCall;
    public lockAccount(request: src_rpc_rpc_pb.LockAccountRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.LockAccountResponse) => void): grpc.ClientUnaryCall;
    public lockAccount(request: src_rpc_rpc_pb.LockAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.LockAccountResponse) => void): grpc.ClientUnaryCall;
    public lockAccount(request: src_rpc_rpc_pb.LockAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.LockAccountResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: src_rpc_rpc_pb.SendTransactionRequest, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: src_rpc_rpc_pb.SendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: src_rpc_rpc_pb.SendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_rpc_rpc_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
}
