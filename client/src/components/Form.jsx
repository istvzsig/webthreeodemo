import Input from './Input';
import Loader from './Loader';
import {SendButton} from './Buttons';
import { handleChange } from './Handlers';

export default function Form() {
    const items = ["Address To", "Amount (ETH)", "Keyword (GIF)", "Enter Message..."];
    const names = ["addressTo", "amount", "keyword", "message"];
    return (
        <div className='self-center md:max-w-600 max-w-full'>
            <form className="flex flex-col self-center sm:w-72 w-full">
                {items.map((value, i) => <Input key={i} placeholder={value} name={names[i]} handleChange={handleChange}/>)}
                <SendButton />
                <Loader />
            </form>
        </div>
    )
}