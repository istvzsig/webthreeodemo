import Loader from './Loader';
import Input from './Input';
import Button from './Button';
import DemoCard from './DemoCard';

export default function Form() {
    const items = ["Enter something 1", "Enter something 2", "Enter something 3"];
    let isLoading = false;
    return (
        <div className='self-center md:max-w-600 max-w-full'>
            <DemoCard />
            <form className="flex flex-col self-center sm:w-72 w-full">
                {items.map((input, i) => <Input key={i} placeholder={input} />)}
                {isLoading ? <Loader /> : <Button />}
            </form>
        </div>
    )
}