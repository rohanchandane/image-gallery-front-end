import './Button.css';
interface Props {
    type: string;
    children: string;
    onClick?: () => any;
}

function Button(props: Props) {
    const { type, children, onClick } = props;
    return(
        <button className={ type } onClick={onClick}> {children} </button>
    )
}

export default Button;