import React, {useContext} from "react";
import {TransactionContext} from "../context/TransactionContext";
import {ConnectWalletButton, DisconnectWalletButton, AccountButton} from "./Buttons";


export default function Navbar() {
    const context = useContext(TransactionContext)
    const menu = ['Services', 'Transactions', 'Contact'];

    return (
        <nav className="flex flex-col md:flex-row justify-between px-[5vw] py-[2vh]">
            <h1 className="cursor-pointer font-bold text-[5vw]">LOGO</h1>
            <ul className="flex flex-col md:flex-row items-center -mr-[1vw]">
            {
                menu.map((item, i) =>
                    <div
                        key={i}
                        className={"transition-all ease-out hover:tracking-wider cursor-pointer rounded p-[1vw] mx-[2vw]"}>
                        {item}
                    </div>)
            }
            {!context.currentAccount ? <ConnectWalletButton /> : <AccountButton />}

            </ul>
        </nav>
    )
}