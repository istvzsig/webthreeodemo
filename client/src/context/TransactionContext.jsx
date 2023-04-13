import React, { useEffect, useState } from "react";
import {checkConnectedWallet} from '../components/Wallet';

export const TransactionContext = React.createContext();

export function TransactionProvider({children}) {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({addressTo:'', amount:'', keyword:'', message:''});
    
    useEffect(() => {checkConnectedWallet(setCurrentAccount)}, []);
    
    return (
        <TransactionContext.Provider value={{currentAccount, setCurrentAccount}}>
            {children}
        </TransactionContext.Provider>
    )
}