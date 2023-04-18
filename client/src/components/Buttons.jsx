import {TransactionContext} from "../context/TransactionContext";
import {handleSubmit} from "./Handlers";
import {connectWallet, disconnetWallet} from './Wallet';
import React, {useContext} from "react";

export function ConnectWalletButton() {
    const context = useContext(TransactionContext);
    return (
        <button className="self-center text-xl capitalize bg-[#2546bd] rounded-full p-4 px-6" onClick={e => connectWallet(context.setCurrentAccount)}>Connect Wallet</button>
    )
}

export function DisconnectWalletButton() {
    return (
        <button className="text-xl capitalize my-[.5rem] py-[.7rem] w-full rounded-full border-2 p-[2vw]" onClick={() => disconnetWallet(context.setCurrentAccount)}>Disconnect</button>
    )
}

export function SendTransactionButton() {
    const context = useContext(TransactionContext);
    return (
        <button type="submit" className="text-xl capitalize my-[.5rem] py-[.7rem] w-full bg-[#ffa555] rounded-full" onClick={e => handleSubmit(e, context)}>Send</button>
    )
}

export function AccountButton() {
    const context = useContext(TransactionContext);
    return (
        <h2 className="self-center text-xl capitalize bg-[#2546bd] rounded-full p-4 px-6 cursor-none">Account: {context.currentAccount.slice(0,6) +'...'+context.currentAccount.slice(-4)}</h2>
    )
}

