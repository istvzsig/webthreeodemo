import React, {useContext} from 'react';
import {ethers} from 'ethers';
import {contractAbi, contractAddress} from "../../../smart_contract/utils/constants";
import { TransactionContext } from '../context/TransactionContext';

async function setAccount(method, setCurrentAccount) {
    try {
        if(!ethereum) return;
        const accounts = await ethereum.request({method: method})
        setCurrentAccount(accounts[0]);
    }
    catch(error) {
        console.error(error);
        throw new Error('No Etherium Object');
    }
}

function getEthereumContract() {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAbi, contractAddress, signer);
    console.log({provider, signer, transactionContract});
}

async function sendTransaction() {
    try {
        if(!ethereum) return
        // get the data from the form
    }
    catch(error) {console.error(error)}
}

async function checkConnectedWallet(setCurrentAccount) {
    await setAccount('eth_accounts', setCurrentAccount);
}

async function connectWallet(setCurrentAccount) {
    await setAccount('eth_requestAccounts', setCurrentAccount);
    // window.location.reload(); // just to make sure
}

async function disconnetWallet(setCurrentAccount) {
    setCurrentAccount('');
    console.log('disconnected...');
}

export {
    checkConnectedWallet,
    connectWallet,
    disconnetWallet,
    getEthereumContract,
    sendTransaction,
}

