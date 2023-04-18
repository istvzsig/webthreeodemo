
import { ethers } from "ethers";

export function handleChange(e, name, setFormData) {
    e.preventDefault();
    setFormData((prevState) => ({...prevState, [name]: e.target.value}));
}

export function handleSubmit(e, context) {
    e.preventDefault();
    if(!ethers.isAddress(context.formData.addressTo) || !context.formData.amount || !context.formData.keyword || !context.formData.message) {
        return; // add notification here
    };
    context.sendTransaction(context);
}