import { TransactionContext } from "../context/TransactionContext";
import {handleSubmit} from "./Handlers";
import {connectWallet, disconnetWallet} from './Wallet';
import React, {useContext} from "react";

export function ConnectWalletButton() {
    const context = useContext(TransactionContext);
    return (
        <button className="max-w-[400px] self-center text-xl capitalize my-[.5rem] py-[.7rem] w-full bg-[#2546bd] rounded-full" onClick={() => connectWallet(context.setCurrentAccount)}>Connect Wallet</button>
    )
}

export function SendButton() {
    return (
        <button className="text-xl capitalize my-[.5rem] py-[.7rem] w-full bg-[#ffa555] rounded-full" onClick={e => handleSubmit()}>Send</button>
    )
}

export function DisconnectWalletButton() {
    const context = useContext(TransactionContext);
    return (
        <button className="text-xl capitalize my-[.5rem] py-[.7rem] w-full rounded-full border-2 p-[2vw]" onClick={() => disconnetWallet(context.setCurrentAccount)}>Disconnect</button>
    )
}