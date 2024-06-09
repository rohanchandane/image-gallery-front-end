import './App.css'
import Text from './Components/Text';
import ImageList from './Components/ImageList';
import Button from './Components/Button';
import { useEffect, useState } from 'react';

function App() {
  const [skipRecords, setSkipRecords] = useState<number>(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);
  const [endOfPagination, setEndOfPagination] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`http://localhost:3000/images?limit=10&skip=${skipRecords}`);
      const data = await response.json();
      console.log(data.total, images.length);
      setImages([...images, ...data.data]);
      if(data.total <= images.length) { 
        setEndOfPagination(true);
      }
    }
    fetchImages();
  }, [skipRecords]);

  const setPagination = () => {
    setSkipRecords(skipRecords + 10);
  }

  const handleSubmit = async (event: any) => {  
    event.preventDefault();

    if (!selectedFile) {
      return alert('Please select an image');
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      setSelectedFile(null);
      alert('Image uploaded successfully!');
      
    } catch (error) {
      console.error(error);
      alert('Upload failed. Please try again.');
    }

  }



  const handleFileInput = (event: any) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <div className="app-header">
        <Text type="header">Infinite Scroll Gallery</Text>
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" onChange={handleFileInput} />
          <Button type="primary" >Upload Image</Button>
        </form>
        
      </div>
      <div className="app-body">
        <ImageList imageUrls={images} />  
      </div>

      <br></br>      
      <br></br>
   
      {!endOfPagination && <Button type="primary" onClick={setPagination}>Load More</Button>}   
      
    </>
  )
}

export default App
