import { useState } from 'react';
export default initialValue => {

    const [value, setValue] = useState(initialValue);
    
    const handleChange =(name)=> e => {
        setValue({...value,[name]: e.target.value });
    };
    const reset = (name,surname,bookvalue) => {
        setValue({[name]:"",[surname]:"",[bookvalue]:""});
    }
    return [value, handleChange, reset];
}