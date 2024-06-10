import './style.css';
import Text from '../Text';
interface Props {
    url: string;
    type: string;
    title: string;
}
function DisplayImage(props: Props) {
    const  { url, type, title="image title" } = props;
    return(
        <>
            <div className="display-image">
                <img src={url} className={type}/>
                <Text type="image-title">{title}</Text>
            </div>
        </>
    )
}
export default DisplayImage;