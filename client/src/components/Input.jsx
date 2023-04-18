import {useContext} from 'react';
import {TransactionContext} from '../context/TransactionContext';
import {handleChange} from "./Handlers";

export default function Input(props) {
    const context = useContext(TransactionContext);
    return (
        <input
            className="outline-none font-light rounded my-2 px-[10px] placeholder:text-[rgba(255,255,255,.2)] py-[.7rem] focus:bg-[rgba(255,255,255,.1)] focus:text-white !text-white text-[1rem] focus:text-[2xl]"
            placeholder={props.placeholder}
            name={props.name}
            type={props.type || 'text'}
            step={props.step || null}
            // value={props.name === 'amount' ? 0.0001 : context.placeholder}
            onChange={e => handleChange(e, props.name, context.setFormData)}
        />
    )
}
