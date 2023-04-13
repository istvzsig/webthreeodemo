import { handleChange } from "./Handlers";

export default function Input(props) {
    return (
        <input
            className="text-black outline-none font-light rounded my-2 px-[10px] py-[.7rem] focus:bg-[rgba(255,255,255,.1)] focus:text-white active:text-red-900"
            placeholder={props.placeholder}
            name={props.name}
        />
    )
}
