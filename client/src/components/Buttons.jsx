import React, {useContext} from "react";
import {TransactionContext} from '../context/TransactionContext'
import { handleSubmit } from "./Handlers";

export function ConnectWalletButton() {
    const {connectWallet, currentAccount} = useContext(TransactionContext);
    const connectWalletButton = <button className="text-xl capitalize my-[.5rem] py-[.7rem] w-full bg-[#2546bd] rounded" onClick={connectWallet}>Connect Wallet</button>;
    return (!currentAccount ? connectWalletButton : 'Account Connected');
}

export function SendButton() {
    return (
        <button className="text-xl capitalize my-[.5rem] py-[.7rem] w-full bg-[#ffa555] rounded" onClick={handleSubmit}>Send</button>
    )
}