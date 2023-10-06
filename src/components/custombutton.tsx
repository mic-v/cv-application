import '../styles/custombutton.css'

interface CustomButtonProps {
    text: string;
    type: "button" | "reset" | "submit" | undefined;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = (props: CustomButtonProps) => {
    return (
        <button style={props.style} type={props.type} className="CustomButton" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default CustomButton;