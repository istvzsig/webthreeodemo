export function handleChange(e, name) {
    e.preventDefault();
    setFormData((prevState) => ({...prevState, [name]: e.target.value}));
    console.log('value changed')
}

export function handleSubmit(e, name) {}