import React, { useEffect, useState, useContext } from "react";
import {checkConnectedWallet, sendTransaction} from '../components/Wallet';

export const TransactionContext = React.createContext();

export function TransactionProvider({children}) {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({addressTo:'', amount:'', keyword:'', message:''});
    // const [notification, setNotification] = useState({h2:'', p:''}); 

    useEffect(() => {checkConnectedWallet(setCurrentAccount)}, []); // check only once if have connected accounts
    
    return (
        <TransactionContext.Provider value={{currentAccount, setCurrentAccount, formData, setFormData, sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}