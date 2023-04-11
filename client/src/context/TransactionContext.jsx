import React, { useEffect, useState } from "react";
import * as Wallet from '../components/Wallet';
import { handleChange } from "../components/Handlers";

export const TransactionContext = React.createContext();

export function TransactionProvider({children}) { 
    const [currentAccount, setCurrentAccount] = useState('')
    const [formData, setFormData] = useState({addressTo:'', amount:'', keyword:'', message:''})

    useEffect(() => {Wallet.checkConnectedWallet()}, []);
    return (
        <TransactionContext.Provider value={{connectWallet: Wallet.connectWallet, currentAccount, formData, setFormData, handleChange}}>
            {children}
        </TransactionContext.Provider>
    )
}