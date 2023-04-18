import React, { useEffect, useState } from "react";
import {checkConnectedWallet} from '../components/Wallet';

export const TransactionContext = React.createContext();

export function TransactionProvider({children}) {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({addressTo:'', amount:'', keyword:'', message:''});
    // const [notification, setNotification] = useState({h2:'', p:''}); 

    useEffect(() => {checkConnectedWallet(setCurrentAccount)}, []); // check only once if have connected accounts

    return (
        <TransactionContext.Provider value={{currentAccount, setCurrentAccount, formData, setFormData}}>
            {children}
        </TransactionContext.Provider>
    )
}