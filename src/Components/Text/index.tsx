import './Text.css';
interface Props {
    type: string;
    children: string;
}

function Text( props:Props ) {
    const {type, children } = props;

    return(
        <span className={type}>{ children }</span>
    );
}

export default Text;