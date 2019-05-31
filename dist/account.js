"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const messages = __importStar(require("./rpc/rpc_pb"));
const address = "127.0.0.1:7353";
const adminClient = client_1.Client.adminServiceClient(address);
const apiClient = client_1.Client.apiServiceClient(address);
/**
 * 转账：可配置转账接收地址列表，支出账户，可完成每个接收地址转出指定的金额
 *
 * @param myselfAddress 自己的账户地址
 * @param otherAddress map结构，key为其他人账户地址，value为转账金额
 */
function transferAccounts(myselfAddress, otherAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            otherAddress.forEach((value, key) => {
                let nonce = 0;
                getAccountState(myselfAddress)
                    .then((response) => {
                    nonce === 0 ? response.getNonce() + 1 : nonce + 1;
                    let param = new messages.SendTransactionRequest();
                    param.setFrom(myselfAddress);
                    param.setTo(key);
                    param.setAmount(value);
                    param.setNonce(nonce);
                    adminClient.sendTransaction(param, (error, response) => {
                        if (error) {
                            reject(error);
                        }
                        resolve(response);
                    });
                })
                    .catch((reason) => {
                    console.log(reason.message);
                });
            });
        });
    });
}
exports.transferAccounts = transferAccounts;
/**
 * 转账：一对一转账
 *
 * @param myselfAddress 自己的账户地址
 * @param otherAddress 其他人的账户地址
 * @param amount 转账金额
 */
function transferAccount(myselfAddress, otherAddress, amount, nonce) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            let param = new messages.SendTransactionRequest();
            param.setFrom(myselfAddress);
            param.setTo(otherAddress);
            param.setAmount(amount);
            param.setNonce(nonce);
            adminClient.sendTransaction(param, (error, response) => {
                if (error) {
                    reject(error);
                }
                resolve(response);
            });
        });
    });
}
exports.transferAccount = transferAccount;
/**
 * 获取本地账户列表
 */
function getAccounts() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const param = new messages.NonParamsRequest();
            adminClient.accounts(param, (error, response) => {
                if (error) {
                    reject(error);
                }
                resolve(response);
            });
        });
    });
}
exports.getAccounts = getAccounts;
/**
 * 解锁账户
 */
function unlockAccount(address, passphrase, duration) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const param = new messages.UnlockAccountRequest();
            param.setAddress(address);
            param.setPassphrase(passphrase);
            param.setDuration(duration);
            adminClient.unlockAccount(param, (error, response) => {
                if (error) {
                    reject(error);
                }
                resolve(response);
            });
        });
    });
}
exports.unlockAccount = unlockAccount;
/**
 * 获取指定账户状态
 */
function getAccountState(account) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const param = new messages.GetAccountStateRequest();
            param.setAddress(account);
            apiClient.getAccountState(param, (error, response) => {
                if (error) {
                    reject(error);
                }
                resolve(response);
            });
        });
    });
}
exports.getAccountState = getAccountState;
