import {ethers} from 'ethers';
import {contractAbi, contractAddress} from "../../../smart_contract/utils/constants";

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

async function checkConnectedWallet() {
    try {
        if(!ethereum) return;
        const accounts = await ethereum.request({method: 'eth_accounts'});
        if(accounts.length) {
            setCurrentAccount(accounts[0]);
            // getAllTransactions();
        }
        else {
            console.log('No account found.');
        }
    } 
    catch(error) {
        console.error(error);
        throw new Error('No Etherium Object');
    }
}

async function connectWallet(e) {
    e.preventDefault();
    try {
        if(!ethereum) return;
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        setCurrentAccount(accounts[0]);
    }
    catch(error) {
        console.error(error);
        throw new Error('No Etherium Object');
    }
}

async function setCurrentAccount(e) {
    // console.log(e);
}

export {
    checkConnectedWallet,
    connectWallet,
    getEthereumContract,
    sendTransaction,
    setCurrentAccount,
}