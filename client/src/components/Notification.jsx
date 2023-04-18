import React, {useContext} from 'react';
import { TransactionContext } from '../context/TransactionContext';

export default function Notification() {
    const context = useContext(TransactionContext);
    return (
        <div className="notification z-1000 position-fixed top-[50vh] left-0 bg-white max-w-[300px] text-[#222] min-h-[88px]">
            <h2 className="text-xl">{context.notification.h2}</h2>
            <p className="font-light text-sl">{context.notification.p}</p>
        </div>
    )
}