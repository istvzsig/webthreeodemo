import React, {useEffect, useState} from "react";
import {checkConnectedWallet, sendTransaction, getCurrentWalletBalance} from '../components/Wallet';

export const TransactionContext = React.createContext();

export function TransactionProvider({children}) {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({addressTo:'', amount:'', keyword:'', message:''});
    // const [notification, setNotification] = useState({h2:'', p:''}); 
    const [balance, setBalance] = useState('');

    useEffect(() => {checkConnectedWallet(setCurrentAccount)}, []); // check only once if have connected accounts
    getCurrentWalletBalance(currentAccount, setBalance);

    return (
        <TransactionContext.Provider value={
            {
                currentAccount,
                setCurrentAccount,
                formData,
                setFormData,
                sendTransaction,
                balance,
                setBalance
            }
        }>
            {children}
        </TransactionContext.Provider>
    )
}