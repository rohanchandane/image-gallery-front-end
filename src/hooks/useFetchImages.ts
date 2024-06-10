import { useState, useEffect } from 'react';

function useFetchImages(skipRecords: number) {
  const [images, setImages] = useState<string[]>([]);
  const [endOfPagination, setEndOfPagination] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/images?limit=10&skip=${skipRecords}`);
        const data = await response.json();
        setImages([...images, ...data.data]);
        if(data.total === images.length) { 
          setEndOfPagination(true);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [skipRecords]);
  

  return { images, setImages, endOfPagination, isLoading };
}

export default useFetchImages;
