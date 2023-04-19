import {ethers, parseEther, formatEther, formatUnits, hexlify} from 'ethers';
import {contractAbi, contractAddress} from "../../../smart_contract/utils/constants";

async function setAccount(method, setCurrentAccount) {
    try {
        if(!ethereum) return;
        const accounts = await ethereum.request({method: method});
        setCurrentAccount(accounts[0]);
    }
    catch(error) {
        console.error(error);
        throw new Error('No Etherium Object');
        
    }
}

function getEthereumContract() {
    const provider = new ethers.JsonRpcProvider('http://localhost:5555');
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer);
    
    return transactionContract;
}

async function sendTransaction(context) {
    try {
        const transactionContract = getEthereumContract();
        let wei = parseEther(context.formData.amount);
        // console.log();

        await ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
                from: context.currentAccount,
                to: context.formData.addressTo,
                gas: '0x5208', // 21000 GWEI
                value: '0x' + wei.toString(16),
            }]
        })
    }
    catch(error) {console.error(error)}
}

async function checkConnectedWallet(setCurrentAccount) {
    await setAccount('eth_accounts', setCurrentAccount);
}       

async function connectWallet(setCurrentAccount) {
    await setAccount('eth_requestAccounts', setCurrentAccount);
    console.log('Connected...');
}

async function disconnetWallet() {
    await setAccount('', null);
    // await window.location.reload(); // just to make sure
}

export {
    checkConnectedWallet,
    connectWallet,
    disconnetWallet,
    getEthereumContract,
    sendTransaction,
}

