
import { useState } from 'react';
import '../styles/custominput.css'

interface CustomInputProps {
    id: string;
    label: string;
    type: string;
    value: string;
    placeholder?: string;
    required: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const CustomInput = (props: CustomInputProps) => {

    const [errorClass, setError] = useState("");

    const onInvalid = () => {
        setError("Error");
    }

    return (
        <div className="CustomInputContainer">
            {
                props.required ? 
                <input type={props.type} id={props.id} onChange={props.onChange} placeholder={props.placeholder} onInvalid={onInvalid} required/> : 
                <input type={props.type} id={props.id} onChange={props.onChange} placeholder={props.placeholder}/> 
            }

            <label className={errorClass} htmlFor={props.id}>{props.label}</label>
        </div>
    )

}

export default CustomInput;