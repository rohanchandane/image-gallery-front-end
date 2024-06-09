import  './ImageList.css';
import DisplayImage from "../DisplayImage";

interface Props {
    imageUrls: any[];
}

function ImageList(props: Props) {
    const { imageUrls } = props;

    return(
        <div className="image-list">
            {
                imageUrls.map((image, index) => { 
                    return (<DisplayImage key={index} url={image.url} type="thumbnail" title={image.name}/>);
                })
            }
        </div>
    )
}    
export default ImageList;