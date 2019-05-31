// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
//  Copyright (C) 2017 gyee authors
//
//  This file is part of the gyee library.
//
//  The gyee library is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  The gyee library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with the gyee library.  If not, see <http://www.gnu.org/licenses/>.
//
//
// protoc -I . rpc.proto --go_out=plugins=grpc:.
// grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./ --grpc_out=./ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` ./src/rpc/rpc.proto 
// pbjs -t static-module -w commonjs -o rpc.js rpc.proto
// pbts -o rpc.d.ts rpc.js
//
'use strict';
var grpc = require('grpc');
var src_rpc_rpc_pb = require('../../src/rpc/rpc_pb.js');

function serialize_rpcpb_AccountsResponse(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.AccountsResponse)) {
    throw new Error('Expected argument of type rpcpb.AccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_AccountsResponse(buffer_arg) {
  return src_rpc_rpc_pb.AccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_BlockResponse(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.BlockResponse)) {
    throw new Error('Expected argument of type rpcpb.BlockResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_BlockResponse(buffer_arg) {
  return src_rpc_rpc_pb.BlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_GetAccountStateRequest(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.GetAccountStateRequest)) {
    throw new Error('Expected argument of type rpcpb.GetAccountStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_GetAccountStateRequest(buffer_arg) {
  return src_rpc_rpc_pb.GetAccountStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_GetAccountStateResponse(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.GetAccountStateResponse)) {
    throw new Error('Expected argument of type rpcpb.GetAccountStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_GetAccountStateResponse(buffer_arg) {
  return src_rpc_rpc_pb.GetAccountStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_GetBlockByHashRequest(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.GetBlockByHashRequest)) {
    throw new Error('Expected argument of type rpcpb.GetBlockByHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_GetBlockByHashRequest(buffer_arg) {
  return src_rpc_rpc_pb.GetBlockByHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_GetBlockByHeightRequest(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.GetBlockByHeightRequest)) {
    throw new Error('Expected argument of type rpcpb.GetBlockByHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_GetBlockByHeightRequest(buffer_arg) {
  return src_rpc_rpc_pb.GetBlockByHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_GetLastBlockRequest(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.GetLastBlockRequest)) {
    throw new Error('Expected argument of type rpcpb.GetLastBlockRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_GetLastBlockRequest(buffer_arg) {
  return src_rpc_rpc_pb.GetLastBlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_GetLastBlockResponse(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.GetLastBlockResponse)) {
    throw new Error('Expected argument of type rpcpb.GetLastBlockResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_GetLastBlockResponse(buffer_arg) {
  return src_rpc_rpc_pb.GetLastBlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_GetTxByHashRequest(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.GetTxByHashRequest)) {
    throw new Error('Expected argument of type rpcpb.GetTxByHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_GetTxByHashRequest(buffer_arg) {
  return src_rpc_rpc_pb.GetTxByHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_LockAccountRequest(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.LockAccountRequest)) {
    throw new Error('Expected argument of type rpcpb.LockAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_LockAccountRequest(buffer_arg) {
  return src_rpc_rpc_pb.LockAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_LockAccountResponse(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.LockAccountResponse)) {
    throw new Error('Expected argument of type rpcpb.LockAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_LockAccountResponse(buffer_arg) {
  return src_rpc_rpc_pb.LockAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_NewAccountRequest(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.NewAccountRequest)) {
    throw new Error('Expected argument of type rpcpb.NewAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_NewAccountRequest(buffer_arg) {
  return src_rpc_rpc_pb.NewAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_NewAccountResponse(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.NewAccountResponse)) {
    throw new Error('Expected argument of type rpcpb.NewAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_NewAccountResponse(buffer_arg) {
  return src_rpc_rpc_pb.NewAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_NodeInfoResponse(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.NodeInfoResponse)) {
    throw new Error('Expected argument of type rpcpb.NodeInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_NodeInfoResponse(buffer_arg) {
  return src_rpc_rpc_pb.NodeInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_NonParamsRequest(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.NonParamsRequest)) {
    throw new Error('Expected argument of type rpcpb.NonParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_NonParamsRequest(buffer_arg) {
  return src_rpc_rpc_pb.NonParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_SendTransactionRequest(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.SendTransactionRequest)) {
    throw new Error('Expected argument of type rpcpb.SendTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_SendTransactionRequest(buffer_arg) {
  return src_rpc_rpc_pb.SendTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_SendTransactionResponse(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.SendTransactionResponse)) {
    throw new Error('Expected argument of type rpcpb.SendTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_SendTransactionResponse(buffer_arg) {
  return src_rpc_rpc_pb.SendTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_TransactionResponse(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.TransactionResponse)) {
    throw new Error('Expected argument of type rpcpb.TransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_TransactionResponse(buffer_arg) {
  return src_rpc_rpc_pb.TransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_UnlockAccountRequest(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.UnlockAccountRequest)) {
    throw new Error('Expected argument of type rpcpb.UnlockAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_UnlockAccountRequest(buffer_arg) {
  return src_rpc_rpc_pb.UnlockAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpcpb_UnlockAccountResponse(arg) {
  if (!(arg instanceof src_rpc_rpc_pb.UnlockAccountResponse)) {
    throw new Error('Expected argument of type rpcpb.UnlockAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpcpb_UnlockAccountResponse(buffer_arg) {
  return src_rpc_rpc_pb.UnlockAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiServiceService = exports.ApiServiceService = {
  nodeInfo: {
    path: '/rpcpb.ApiService/NodeInfo',
    requestStream: false,
    responseStream: false,
    requestType: src_rpc_rpc_pb.NonParamsRequest,
    responseType: src_rpc_rpc_pb.NodeInfoResponse,
    requestSerialize: serialize_rpcpb_NonParamsRequest,
    requestDeserialize: deserialize_rpcpb_NonParamsRequest,
    responseSerialize: serialize_rpcpb_NodeInfoResponse,
    responseDeserialize: deserialize_rpcpb_NodeInfoResponse,
  },
  getBlockByHash: {
    path: '/rpcpb.ApiService/GetBlockByHash',
    requestStream: false,
    responseStream: false,
    requestType: src_rpc_rpc_pb.GetBlockByHashRequest,
    responseType: src_rpc_rpc_pb.BlockResponse,
    requestSerialize: serialize_rpcpb_GetBlockByHashRequest,
    requestDeserialize: deserialize_rpcpb_GetBlockByHashRequest,
    responseSerialize: serialize_rpcpb_BlockResponse,
    responseDeserialize: deserialize_rpcpb_BlockResponse,
  },
  getBlockByHeight: {
    path: '/rpcpb.ApiService/GetBlockByHeight',
    requestStream: false,
    responseStream: false,
    requestType: src_rpc_rpc_pb.GetBlockByHeightRequest,
    responseType: src_rpc_rpc_pb.BlockResponse,
    requestSerialize: serialize_rpcpb_GetBlockByHeightRequest,
    requestDeserialize: deserialize_rpcpb_GetBlockByHeightRequest,
    responseSerialize: serialize_rpcpb_BlockResponse,
    responseDeserialize: deserialize_rpcpb_BlockResponse,
  },
  getLastBlock: {
    path: '/rpcpb.ApiService/GetLastBlock',
    requestStream: false,
    responseStream: false,
    requestType: src_rpc_rpc_pb.GetLastBlockRequest,
    responseType: src_rpc_rpc_pb.GetLastBlockResponse,
    requestSerialize: serialize_rpcpb_GetLastBlockRequest,
    requestDeserialize: deserialize_rpcpb_GetLastBlockRequest,
    responseSerialize: serialize_rpcpb_GetLastBlockResponse,
    responseDeserialize: deserialize_rpcpb_GetLastBlockResponse,
  },
  getTxByHash: {
    path: '/rpcpb.ApiService/GetTxByHash',
    requestStream: false,
    responseStream: false,
    requestType: src_rpc_rpc_pb.GetTxByHashRequest,
    responseType: src_rpc_rpc_pb.TransactionResponse,
    requestSerialize: serialize_rpcpb_GetTxByHashRequest,
    requestDeserialize: deserialize_rpcpb_GetTxByHashRequest,
    responseSerialize: serialize_rpcpb_TransactionResponse,
    responseDeserialize: deserialize_rpcpb_TransactionResponse,
  },
  getAccountState: {
    path: '/rpcpb.ApiService/GetAccountState',
    requestStream: false,
    responseStream: false,
    requestType: src_rpc_rpc_pb.GetAccountStateRequest,
    responseType: src_rpc_rpc_pb.GetAccountStateResponse,
    requestSerialize: serialize_rpcpb_GetAccountStateRequest,
    requestDeserialize: deserialize_rpcpb_GetAccountStateRequest,
    responseSerialize: serialize_rpcpb_GetAccountStateResponse,
    responseDeserialize: deserialize_rpcpb_GetAccountStateResponse,
  },
};

exports.ApiServiceClient = grpc.makeGenericClientConstructor(ApiServiceService);
// Admin Service
var AdminServiceService = exports.AdminServiceService = {
  accounts: {
    path: '/rpcpb.AdminService/Accounts',
    requestStream: false,
    responseStream: false,
    requestType: src_rpc_rpc_pb.NonParamsRequest,
    responseType: src_rpc_rpc_pb.AccountsResponse,
    requestSerialize: serialize_rpcpb_NonParamsRequest,
    requestDeserialize: deserialize_rpcpb_NonParamsRequest,
    responseSerialize: serialize_rpcpb_AccountsResponse,
    responseDeserialize: deserialize_rpcpb_AccountsResponse,
  },
  newAccount: {
    path: '/rpcpb.AdminService/NewAccount',
    requestStream: false,
    responseStream: false,
    requestType: src_rpc_rpc_pb.NewAccountRequest,
    responseType: src_rpc_rpc_pb.NewAccountResponse,
    requestSerialize: serialize_rpcpb_NewAccountRequest,
    requestDeserialize: deserialize_rpcpb_NewAccountRequest,
    responseSerialize: serialize_rpcpb_NewAccountResponse,
    responseDeserialize: deserialize_rpcpb_NewAccountResponse,
  },
  unlockAccount: {
    path: '/rpcpb.AdminService/UnlockAccount',
    requestStream: false,
    responseStream: false,
    requestType: src_rpc_rpc_pb.UnlockAccountRequest,
    responseType: src_rpc_rpc_pb.UnlockAccountResponse,
    requestSerialize: serialize_rpcpb_UnlockAccountRequest,
    requestDeserialize: deserialize_rpcpb_UnlockAccountRequest,
    responseSerialize: serialize_rpcpb_UnlockAccountResponse,
    responseDeserialize: deserialize_rpcpb_UnlockAccountResponse,
  },
  lockAccount: {
    path: '/rpcpb.AdminService/LockAccount',
    requestStream: false,
    responseStream: false,
    requestType: src_rpc_rpc_pb.LockAccountRequest,
    responseType: src_rpc_rpc_pb.LockAccountResponse,
    requestSerialize: serialize_rpcpb_LockAccountRequest,
    requestDeserialize: deserialize_rpcpb_LockAccountRequest,
    responseSerialize: serialize_rpcpb_LockAccountResponse,
    responseDeserialize: deserialize_rpcpb_LockAccountResponse,
  },
  sendTransaction: {
    path: '/rpcpb.AdminService/SendTransaction',
    requestStream: false,
    responseStream: false,
    requestType: src_rpc_rpc_pb.SendTransactionRequest,
    responseType: src_rpc_rpc_pb.SendTransactionResponse,
    requestSerialize: serialize_rpcpb_SendTransactionRequest,
    requestDeserialize: deserialize_rpcpb_SendTransactionRequest,
    responseSerialize: serialize_rpcpb_SendTransactionResponse,
    responseDeserialize: deserialize_rpcpb_SendTransactionResponse,
  },
};

exports.AdminServiceClient = grpc.makeGenericClientConstructor(AdminServiceService);
