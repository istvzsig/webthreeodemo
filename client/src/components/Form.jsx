import Loader from './Loader';

function Input(classProps=null) {
    return (
        <input className='text-black font-light rounded my-[.5rem] px-[10px] py-[.7rem]' />
    )
}

function Button() {
    return (
        <button
            className="text-2xl uppercase my-[.5rem] py-[.7rem] w-full bg-[#2546bd] hover:bg-[#ffa555] rounded">Send</button>
    )
}

function sendTransaction(e) {
    e.preventDefault();
    console.log(e);
}

export default function Form() {
    const items = ["Enter xy", "ASDSAD", "Marosan attila Gyorgy"];
    let isLoading = true;
    return (
        <form className="flex flex-col self-center w-[100%] h-[100%] p-[2vw] pt-0 max-w-[420px]">
            {
                items.map((input, i) => 
                    <Input  key={i} />)
            }
            {isLoading ? <Loader /> : <Button />}
        </form>
    )
}