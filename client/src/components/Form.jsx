import {useContext} from 'react';
import Input from './Input';
import Loader from './Loader';
import {SendTransactionButton} from './Buttons';
import { handleChange } from './Handlers';
import { TransactionContext } from '../context/TransactionContext';

export default function Form() {
    const context = useContext(TransactionContext);
    const inputs = ["Address To", "Amount (ETH)", "Keyword (GIF)", "Enter Message..."];
    const names = ["addressTo", "amount", "keyword", "message"];

    return (
        <div className='self-center md:max-w-600 max-w-full'>
            <form action='/' className="flex flex-col self-center sm:w-72 w-full">
                {
                    inputs.map((input, index) =>
                    <Input step={0.0001} type={names[index] == 'amount' ? 'number' : 'text'} key={index} placeholder={input} name={names[index]} handleChange={e => handleChange(e, names[index], cntext.setFormdata)}/>
                    )
                }
                <SendTransactionButton />
                {/* <Loader /> */}
            </form>
        </div>
    )
}