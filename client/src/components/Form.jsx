import DemoCard from './DemoCard';
import Input from './Input';
import Loader from './Loader';
import * as Button from './Buttons';
import { handleChange } from './Handlers';
import { checkConnectedWallet } from './Wallet';

export default function Form() {
    const items = ["Address To", "Amount (ETH)", "Keyword (GIF)", "Enter Message..."];
    const names = ["addressTo", "amount", "keyword", "message"];
    return (
        <div className='self-center md:max-w-600 max-w-full'>
            <DemoCard />
            <form className="flex flex-col self-center sm:w-72 w-full">
                {items.map((value, i) => <Input key={i} placeholder={value} name={names[i]} handleChange={handleChange}/>)}
                {isWalletConnected ? <Button.ConnectWalletButton /> : <Button.SendButton />}
            </form>
        </div>
    )
}