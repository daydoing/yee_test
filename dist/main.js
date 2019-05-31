"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
// 将本地的多个账户余额汇集到一个指定账户
function assembleAccount(address, addressPasswordMap) {
    account_1.getAccounts()
        .then((response) => {
        let nonce = 0;
        response.getAddressesList().forEach((value, index) => {
            account_1.getAccountState(value)
                .then((response) => {
                nonce === 0 ? response.getNonce() + 1 : nonce + 1;
                const password = addressPasswordMap.get(response.getAddress());
                account_1.unlockAccount(response.getAddress(), password, 3000000000)
                    .then((accountResponse) => {
                    if (accountResponse.getResult() &&
                        response.getBalance() !== "") {
                        account_1.transferAccount(value, address, response.getBalance(), nonce)
                            .then((response) => {
                            console.info(response.getHash());
                        })
                            .catch((reason) => {
                            console.error(reason.message);
                        });
                    }
                })
                    .catch((reason) => {
                    console.error(reason.message);
                });
            })
                .catch((reason) => {
                console.error(reason.message);
            });
        });
    })
        .catch((reason) => {
        console.error(reason.message);
    });
}
// 多个本地账户不停相互转账
function loopTransferAccount(addressPasswordMap) {
    account_1.getAccounts()
        .then((response) => {
        let nonce = 0;
        const addressesList = response.getAddressesList();
        while (true) {
            addressesList.forEach((value, index) => {
                account_1.getAccountState(value)
                    .then((response) => {
                    nonce === 0 ? response.getNonce() + 1 : nonce + 1;
                    const password = addressPasswordMap.get(response.getAddress());
                    account_1.unlockAccount(response.getAddress(), password, 3000000000)
                        .then((accountResponse) => {
                        if (accountResponse.getResult() &&
                            response.getBalance() !== "") {
                            account_1.transferAccount(value, addressesList[addressesList.length - 1 - index], response.getBalance(), nonce)
                                .then((response) => {
                                console.info(response.getHash());
                            })
                                .catch((reason) => {
                                console.error(reason.message);
                            });
                        }
                    })
                        .catch((reason) => {
                        console.error(reason.message);
                    });
                })
                    .catch((reason) => {
                    console.error(reason.message);
                });
            });
        }
    })
        .catch((reason) => {
        console.error(reason.message);
    });
}
