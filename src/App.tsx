import './App.css'
import Text from './Components/Text';
import ImageList from './Components/ImageList';
import Button from './Components/Button';
import { useEffect, useState } from 'react';
import useFetchImages from './hooks/useFetchImages';
import useUploadImage from './hooks/useUploadImage';
import useSocketConnection from './hooks/useSocketConnection';

function App() {
  const [skipRecords, setSkipRecords] = useState<number>(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { images, endOfPagination, isLoading, setImages } = useFetchImages(skipRecords);
  const { isUploading, setFormData } = useUploadImage();
  const { newImageData } = useSocketConnection();

  useEffect(() => {
    if(newImageData) {
      setImages([ newImageData, ...images]);
    }
  }, [newImageData]);

  const setPagination = () => {
    setSkipRecords(skipRecords + 10);
  }

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {  
    event.preventDefault();
    
    if (!selectedFile) {
      return alert('Please select an image');
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    setFormData(formData); 
  }

  return (
    <>
      <div className="app-header">
        <Text type="header">Infinite Scroll Gallery</Text>
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" onChange={handleFileInput} />
          <Button type="primary" disabled={isUploading}>Upload Image</Button>
        </form>
        
      </div>
      <div className="app-body">
        <ImageList imageUrls={images} />  
      </div>

      <br></br>      
      <br></br>
   
      {!endOfPagination && <Button type="primary" onClick={setPagination} disabled={isLoading}>
        Load More
      </Button>}   
      
    </>
  )
}

export default App
