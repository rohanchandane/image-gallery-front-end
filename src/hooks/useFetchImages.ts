import { useState, useEffect } from 'react';

interface useFetchImagesResponse {
  isLoading: boolean,
  fetchedImages: string[],
  totalImageCount: number
}

interface Props {
  skipRecords: number
}

function useFetchImages(props: Props): useFetchImagesResponse {
  const  { skipRecords } = props;

  const [fetchedImages, setFetchedImagesData] = useState<string[]>([]);
  const [totalImageCount, setTotalImageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/images?limit=10&skip=${skipRecords}`);
        const data = await response.json();
        setFetchedImagesData([...fetchedImages, ...data.data]);
        setTotalImageCount(data.total);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [skipRecords]);
  

  return { isLoading, fetchedImages, totalImageCount };
}

export default useFetchImages;
