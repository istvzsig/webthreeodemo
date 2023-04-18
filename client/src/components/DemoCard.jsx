import React, {useContext} from 'react';
import ETHLlogo from '../../src/assets/eth-logo-white.png';
import { TransactionContext } from '../context/TransactionContext';

export default function DemoCard(currentAccount) {
    const sampleHash = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';
    const context = useContext(TransactionContext);

    return (
        <div className="p-3 justify-end item-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white self-center">
            <div className="flex flex-col h-full justify-between">
                <img src={ETHLlogo} alt="ETH-logo" className="max-w-[33px]"/>
                <div>
                    <p className="font-[300] text-sm">
                        
                    {
                        !context.currentAccount ? 
                            sampleHash.slice(0,6) + '...' + sampleHash.slice(sampleHash.length-4)
                        : context.currentAccount.slice(0,6) + '...' + context.currentAccount.slice(context.currentAccount.length-4)
                    }
                    </p>
                    <h2 className="font-[400] text-lg">Ethereum</h2>
                </div>
            </div>
        </div>
    )
}