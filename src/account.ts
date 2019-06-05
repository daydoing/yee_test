import { Client } from "./client";
import * as grpc from "grpc";
import * as messages from "./rpc/rpc_pb";

const address: string = "127.0.0.1:7353";
const adminClient = Client.adminServiceClient(address);
const apiClient = Client.apiServiceClient(address);

/**
 * 转账：可配置转账接收地址列表，支出账户，可完成每个接收地址转出指定的金额
 *
 * @param myselfAddress 自己的账户地址
 * @param otherAddress map结构，key为其他人账户地址，value为转账金额
 */
async function transferAccounts(
  myselfAddress: string,
  otherAddress: Map<string, string>
): Promise<messages.SendTransactionResponse[]> {
  let allPromise: Promise<messages.SendTransactionResponse>[] = [];
  let nonce: number = 0;

  otherAddress.forEach((value: string, key: string) => {
    let p = new Promise(
      (
        resolve: (response: messages.SendTransactionResponse) => void,
        reject: (error: grpc.ServiceError) => void
      ): void => {
        getAccountState(myselfAddress)
          .then((response: messages.GetAccountStateResponse) => {
            nonce === 0 ? response.getNonce() + 1 : nonce + 1;
            let param = new messages.SendTransactionRequest();
            param.setFrom(myselfAddress);
            param.setTo(key);
            param.setAmount(value);
            param.setNonce(nonce);

            adminClient.sendTransaction(
              param,
              (
                error: grpc.ServiceError,
                response: messages.SendTransactionResponse
              ) => {
                if (error) {
                  reject(error);
                }

                resolve(response);
              }
            );
          })
          .catch((reason: grpc.ServiceError) => {
            console.log(reason.message);
          });
      }
    );

    allPromise.push(p);
  });

  return Promise.all(allPromise);
}

/**
 * 转账：一对一转账
 *
 * @param myselfAddress 自己的账户地址
 * @param otherAddress 其他人的账户地址
 * @param amount 转账金额
 */
async function transferAccount(
  myselfAddress: string,
  otherAddress: string,
  amount: string,
  nonce: number
): Promise<messages.SendTransactionResponse> {
  return new Promise(
    (
      resolve: (response: messages.SendTransactionResponse) => void,
      reject: (error: grpc.ServiceError) => void
    ): void => {
      let param = new messages.SendTransactionRequest();
      param.setFrom(myselfAddress);
      param.setTo(otherAddress);
      param.setAmount(amount);
      param.setNonce(nonce);

      adminClient.sendTransaction(
        param,
        (
          error: grpc.ServiceError,
          response: messages.SendTransactionResponse
        ) => {
          if (error) {
            reject(error);
          }

          resolve(response);
        }
      );
    }
  );
}

/**
 * 获取本地账户列表
 */
async function getAccounts(): Promise<messages.AccountsResponse> {
  return new Promise(
    (
      resolve: (response: messages.AccountsResponse) => void,
      reject: (error: grpc.ServiceError) => void
    ): void => {
      const param = new messages.NonParamsRequest();
      adminClient.accounts(
        param,
        (error: grpc.ServiceError, response: messages.AccountsResponse) => {
          if (error) {
            reject(error);
          }

          resolve(response);
        }
      );
    }
  );
}

/**
 * 解锁账户
 */
async function unlockAccount(
  address: string,
  passphrase: string,
  duration: number
): Promise<messages.UnlockAccountResponse> {
  return new Promise(
    (
      resolve: (response: messages.UnlockAccountResponse) => void,
      reject: (error: grpc.ServiceError) => void
    ): void => {
      const param = new messages.UnlockAccountRequest();
      param.setAddress(address);
      param.setPassphrase(passphrase);
      param.setDuration(duration);

      adminClient.unlockAccount(
        param,
        (
          error: grpc.ServiceError,
          response: messages.UnlockAccountResponse
        ) => {
          if (error) {
            reject(error);
          }

          resolve(response);
        }
      );
    }
  );
}

/**
 * 获取指定账户状态
 */
async function getAccountState(
  account: string
): Promise<messages.GetAccountStateResponse> {
  return new Promise(
    (
      resolve: (response: messages.GetAccountStateResponse) => void,
      reject: (error: grpc.ServiceError) => void
    ): void => {
      const param = new messages.GetAccountStateRequest();
      param.setAddress(account);
      apiClient.getAccountState(
        param,
        (
          error: grpc.ServiceError,
          response: messages.GetAccountStateResponse
        ) => {
          if (error) {
            reject(error);
          }

          resolve(response);
        }
      );
    }
  );
}

export {
  transferAccount,
  transferAccounts,
  getAccounts,
  getAccountState,
  unlockAccount
};
