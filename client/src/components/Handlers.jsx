import {sendTransaction} from "./Wallet";

export function handleChange(e, name, setFormData) {
    e.preventDefault();
    setFormData((prevState) => ({...prevState, [name]: e.target.value}));
}

export function handleSubmit(e) {
    const {addressTo, amount, keyword, message} = context.formData;
    e.preventDefault();
    if(!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
    console.log('transaction sent...');
}