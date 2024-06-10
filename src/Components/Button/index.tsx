import './Button.css';
interface Props {
    type: string;
    children: string;
    onClick?: () => any;
    disabled?: boolean;
}

function Button(props: Props) {
    const { type, children, onClick, disabled=false } = props;
    return(
        <button className={ type } onClick={onClick} disabled={disabled}> {children} </button>
    )
}

export default Button;