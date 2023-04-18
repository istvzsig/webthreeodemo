import React, {useContext} from 'react';
import DemoCard from './DemoCard';
import Form from './Form';
import { TransactionContext } from '../context/TransactionContext';

export default function Hero() {
    const context = useContext(TransactionContext);
    return (
        <section className="flex md:flex-row flex-col md:justify-evenly">
            <div className="max-w-full">
                <h1 className="text-5xl text-center md:text-left font-semibold pb-[2vh]">Send Test Crypto <br /> accross the world</h1>
                <p className="text-sl text-center md:text-left font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, corrupti repellat? Inventore id dolorem adipisci. Veritatis ipsam quos provident molestias aut minus excepturi officiis earum perferendis, numquam similique labore totam.</p>
            </div>
            <div className='flex flex-col jusitify-between'>
                <DemoCard />
                {
                    !context.currentAccount
                    ? <p className="text-sl text-center md:text-left font-light p-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, corrupti repellat? Inventore id dolorem adipisci. Veritatis ipsam quos provident molestias aut minus excepturi officiis earum perferendis, numquam similique labore totam.</p>
                    : <Form />
                }
            </div>
        </section>
    )
}