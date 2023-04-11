import React, { useEffect, useState } from "react";
import {ethers} from 'ethers';

import { contractAbi, contractAddress } from "../../../smart_contract/utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

function getEthereumContract() {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAbi, contractAddress, signer);
    console.log({provider, signer, transactionContract});
}

export function TransactionProvider({children}) {
    return (
        <TransactionContext.Provider value={{}}>
            {children}
        </TransactionContext.Provider>
    )
}