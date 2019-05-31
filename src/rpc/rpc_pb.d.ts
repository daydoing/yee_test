// package: rpcpb
// file: src/rpc/rpc.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class NonParamsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NonParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NonParamsRequest): NonParamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NonParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NonParamsRequest;
    static deserializeBinaryFromReader(message: NonParamsRequest, reader: jspb.BinaryReader): NonParamsRequest;
}

export namespace NonParamsRequest {
    export type AsObject = {
    }
}

export class BlockResponse extends jspb.Message { 
    getHash(): string;
    setHash(value: string): void;

    getParentHash(): string;
    setParentHash(value: string): void;

    getHeight(): number;
    setHeight(value: number): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;

    getChainId(): number;
    setChainId(value: number): void;

    getConsensusRoot(): string;
    setConsensusRoot(value: string): void;

    getStateRoot(): string;
    setStateRoot(value: string): void;

    getTxsRoot(): string;
    setTxsRoot(value: string): void;

    getReceiptsRoot(): string;
    setReceiptsRoot(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlockResponse): BlockResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockResponse;
    static deserializeBinaryFromReader(message: BlockResponse, reader: jspb.BinaryReader): BlockResponse;
}

export namespace BlockResponse {
    export type AsObject = {
        hash: string,
        parentHash: string,
        height: number,
        timestamp: number,
        chainId: number,
        consensusRoot: string,
        stateRoot: string,
        txsRoot: string,
        receiptsRoot: string,
    }
}

export class GetBlockByHashRequest extends jspb.Message { 
    getHash(): string;
    setHash(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlockByHashRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlockByHashRequest): GetBlockByHashRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlockByHashRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlockByHashRequest;
    static deserializeBinaryFromReader(message: GetBlockByHashRequest, reader: jspb.BinaryReader): GetBlockByHashRequest;
}

export namespace GetBlockByHashRequest {
    export type AsObject = {
        hash: string,
    }
}

export class GetBlockByHeightRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlockByHeightRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlockByHeightRequest): GetBlockByHeightRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlockByHeightRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlockByHeightRequest;
    static deserializeBinaryFromReader(message: GetBlockByHeightRequest, reader: jspb.BinaryReader): GetBlockByHeightRequest;
}

export namespace GetBlockByHeightRequest {
    export type AsObject = {
        height: number,
    }
}

export class GetLastBlockResponse extends jspb.Message { 
    getHash(): string;
    setHash(value: string): void;


    hasBlock(): boolean;
    clearBlock(): void;
    getBlock(): BlockResponse | undefined;
    setBlock(value?: BlockResponse): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLastBlockResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLastBlockResponse): GetLastBlockResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLastBlockResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLastBlockResponse;
    static deserializeBinaryFromReader(message: GetLastBlockResponse, reader: jspb.BinaryReader): GetLastBlockResponse;
}

export namespace GetLastBlockResponse {
    export type AsObject = {
        hash: string,
        block?: BlockResponse.AsObject,
    }
}

export class GetLastBlockRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLastBlockRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLastBlockRequest): GetLastBlockRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLastBlockRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLastBlockRequest;
    static deserializeBinaryFromReader(message: GetLastBlockRequest, reader: jspb.BinaryReader): GetLastBlockRequest;
}

export namespace GetLastBlockRequest {
    export type AsObject = {
    }
}

export class TransactionResponse extends jspb.Message { 
    getHash(): string;
    setHash(value: string): void;

    getNonce(): number;
    setNonce(value: number): void;

    getFrom(): string;
    setFrom(value: string): void;

    getRecipient(): string;
    setRecipient(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionResponse): TransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionResponse;
    static deserializeBinaryFromReader(message: TransactionResponse, reader: jspb.BinaryReader): TransactionResponse;
}

export namespace TransactionResponse {
    export type AsObject = {
        hash: string,
        nonce: number,
        from: string,
        recipient: string,
        amount: string,
    }
}

export class GetTxByHashRequest extends jspb.Message { 
    getHash(): string;
    setHash(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTxByHashRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTxByHashRequest): GetTxByHashRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTxByHashRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTxByHashRequest;
    static deserializeBinaryFromReader(message: GetTxByHashRequest, reader: jspb.BinaryReader): GetTxByHashRequest;
}

export namespace GetTxByHashRequest {
    export type AsObject = {
        hash: string,
    }
}

export class GetAccountStateResponse extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): void;

    getNonce(): number;
    setNonce(value: number): void;

    getBalance(): string;
    setBalance(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccountStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccountStateResponse): GetAccountStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccountStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccountStateResponse;
    static deserializeBinaryFromReader(message: GetAccountStateResponse, reader: jspb.BinaryReader): GetAccountStateResponse;
}

export namespace GetAccountStateResponse {
    export type AsObject = {
        address: string,
        nonce: number,
        balance: string,
    }
}

export class GetAccountStateRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccountStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccountStateRequest): GetAccountStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccountStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccountStateRequest;
    static deserializeBinaryFromReader(message: GetAccountStateRequest, reader: jspb.BinaryReader): GetAccountStateRequest;
}

export namespace GetAccountStateRequest {
    export type AsObject = {
        address: string,
    }
}

export class NodeInfoResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getVersion(): number;
    setVersion(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NodeInfoResponse): NodeInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeInfoResponse;
    static deserializeBinaryFromReader(message: NodeInfoResponse, reader: jspb.BinaryReader): NodeInfoResponse;
}

export namespace NodeInfoResponse {
    export type AsObject = {
        id: string,
        version: number,
    }
}

export class AccountsResponse extends jspb.Message { 
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): void;
    addAddresses(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AccountsResponse): AccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountsResponse;
    static deserializeBinaryFromReader(message: AccountsResponse, reader: jspb.BinaryReader): AccountsResponse;
}

export namespace AccountsResponse {
    export type AsObject = {
        addressesList: Array<string>,
    }
}

export class NewAccountRequest extends jspb.Message { 
    getPassphrase(): string;
    setPassphrase(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewAccountRequest): NewAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewAccountRequest;
    static deserializeBinaryFromReader(message: NewAccountRequest, reader: jspb.BinaryReader): NewAccountRequest;
}

export namespace NewAccountRequest {
    export type AsObject = {
        passphrase: string,
    }
}

export class NewAccountResponse extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewAccountResponse): NewAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewAccountResponse;
    static deserializeBinaryFromReader(message: NewAccountResponse, reader: jspb.BinaryReader): NewAccountResponse;
}

export namespace NewAccountResponse {
    export type AsObject = {
        address: string,
    }
}

export class UnlockAccountRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): void;

    getPassphrase(): string;
    setPassphrase(value: string): void;

    getDuration(): number;
    setDuration(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnlockAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnlockAccountRequest): UnlockAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnlockAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnlockAccountRequest;
    static deserializeBinaryFromReader(message: UnlockAccountRequest, reader: jspb.BinaryReader): UnlockAccountRequest;
}

export namespace UnlockAccountRequest {
    export type AsObject = {
        address: string,
        passphrase: string,
        duration: number,
    }
}

export class UnlockAccountResponse extends jspb.Message { 
    getResult(): boolean;
    setResult(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnlockAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UnlockAccountResponse): UnlockAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnlockAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnlockAccountResponse;
    static deserializeBinaryFromReader(message: UnlockAccountResponse, reader: jspb.BinaryReader): UnlockAccountResponse;
}

export namespace UnlockAccountResponse {
    export type AsObject = {
        result: boolean,
    }
}

export class LockAccountRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LockAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LockAccountRequest): LockAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LockAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LockAccountRequest;
    static deserializeBinaryFromReader(message: LockAccountRequest, reader: jspb.BinaryReader): LockAccountRequest;
}

export namespace LockAccountRequest {
    export type AsObject = {
        address: string,
    }
}

export class LockAccountResponse extends jspb.Message { 
    getResult(): boolean;
    setResult(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LockAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LockAccountResponse): LockAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LockAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LockAccountResponse;
    static deserializeBinaryFromReader(message: LockAccountResponse, reader: jspb.BinaryReader): LockAccountResponse;
}

export namespace LockAccountResponse {
    export type AsObject = {
        result: boolean,
    }
}

export class SendTransactionRequest extends jspb.Message { 
    getFrom(): string;
    setFrom(value: string): void;

    getTo(): string;
    setTo(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    getNonce(): number;
    setNonce(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendTransactionRequest): SendTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTransactionRequest;
    static deserializeBinaryFromReader(message: SendTransactionRequest, reader: jspb.BinaryReader): SendTransactionRequest;
}

export namespace SendTransactionRequest {
    export type AsObject = {
        from: string,
        to: string,
        amount: string,
        nonce: number,
    }
}

export class SendTransactionResponse extends jspb.Message { 
    getHash(): string;
    setHash(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendTransactionResponse): SendTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTransactionResponse;
    static deserializeBinaryFromReader(message: SendTransactionResponse, reader: jspb.BinaryReader): SendTransactionResponse;
}

export namespace SendTransactionResponse {
    export type AsObject = {
        hash: string,
    }
}
