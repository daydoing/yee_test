import {
  getAccounts,
  getAccountState,
  transferAccount,
  unlockAccount
} from "./account";
import {
  AccountsResponse,
  GetAccountStateResponse,
  SendTransactionResponse,
  UnlockAccountResponse
} from "./rpc/rpc_pb";
import { ServiceError } from "grpc";

// 将本地的多个账户余额汇集到一个指定账户
function assembleAccount(
  address: string,
  addressPasswordMap: Map<string, string>
) {
  getAccounts()
    .then((response: AccountsResponse) => {
      let nonce: number = 0;
      response.getAddressesList().forEach((value: string, index: number) => {
        getAccountState(value)
          .then((response: GetAccountStateResponse) => {
            nonce === 0 ? response.getNonce() + 1 : nonce + 1;
            const password = addressPasswordMap.get(
              response.getAddress()
            ) as string;
            unlockAccount(response.getAddress(), password, 3000000000)
              .then((accountResponse: UnlockAccountResponse) => {
                if (
                  accountResponse.getResult() &&
                  response.getBalance() !== ""
                ) {
                  transferAccount(value, address, response.getBalance(), nonce)
                    .then((response: SendTransactionResponse) => {
                      console.info(response.getHash());
                    })
                    .catch((reason: ServiceError) => {
                      console.error(reason.message);
                    });
                }
              })
              .catch((reason: ServiceError) => {
                console.error(reason.message);
              });
          })
          .catch((reason: ServiceError) => {
            console.error(reason.message);
          });
      });
    })
    .catch((reason: ServiceError) => {
      console.error(reason.message);
    });
}

// 多个本地账户不停相互转账
function loopTransferAccount(addressPasswordMap: Map<string, string>): void {
  getAccounts()
    .then((response: AccountsResponse) => {
      let nonce: number = 0;
      const addressesList = response.getAddressesList();
      while (true) {
        addressesList.forEach((value: string, index: number) => {
          getAccountState(value)
            .then((response: GetAccountStateResponse) => {
              nonce === 0 ? response.getNonce() + 1 : nonce + 1;
              const password = addressPasswordMap.get(
                response.getAddress()
              ) as string;
              unlockAccount(response.getAddress(), password, 3000000000)
                .then((accountResponse: UnlockAccountResponse) => {
                  if (
                    accountResponse.getResult() &&
                    response.getBalance() !== ""
                  ) {
                    transferAccount(
                      value,
                      addressesList[addressesList.length - 1 - index],
                      response.getBalance(),
                      nonce
                    )
                      .then((response: SendTransactionResponse) => {
                        console.info(response.getHash());
                      })
                      .catch((reason: ServiceError) => {
                        console.error(reason.message);
                      });
                  }
                })
                .catch((reason: ServiceError) => {
                  console.error(reason.message);
                });
            })
            .catch((reason: ServiceError) => {
              console.error(reason.message);
            });
        });
      }
    })
    .catch((reason: ServiceError) => {
      console.error(reason.message);
    });
}
