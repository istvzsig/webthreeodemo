import { sendTransaction } from "./Wallet";

export function handleChange(e, name) {
    e.preventDefault();
    setFormData((prevState) => ({...prevState, [name]: e.target.value}));
    console.log('value changed')
}

export function handleSubmit(e) {
    e.preventDefault();
    const transactionContext = useContext(TransactionContext);
    const {addressTo, amount, keyword, message} = transactionContext.formData;
    if(!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
}