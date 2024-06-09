import './App.css'
import Text from './Components/Text';
import ImageList from './Components/ImageList';
import Button from './Components/Button';
import Comments from './Components/Comments';
import { useEffect, useState, useRef } from 'react';

function App() {
  //"https://dummyjson.com/comments?limit=10&skip=0"
  const API = `https://dummyjson.com/comments?`;
  const [skipRecords, setSkipRecords] = useState<number>(0);
  const [comments, setComments] = useState([]);

  //////////////
  const [ isVisible, setIsVisible ] = useState(false)
  const containerRef = useRef(null);
  
  // const [endOfPagination, setEndOfPagination] = useState(false);
  // const callbackFunction = (entries) => {
  //   const [ entry ] = entries
  //   setIsVisible(entry.isIntersecting)

  //   if (isVisible) {
  //     setPagination();
  //     console.log( "visible" );
  //   }
  // }
  
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.5
  // }

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options)
  //   if (containerRef.current) observer.observe(containerRef.current)
    
  //   if (endOfPagination) {
  //     return () => {
  //       if(containerRef.current) observer.unobserve(containerRef.current)
  //     }
  //   }
  // }, [containerRef, options])

  useEffect(() => {
    console.log(comments);
    const fetchData = async () => {
      const response = await fetch(`${API}limit=10&skip=${skipRecords}`);
      const data = await response.json();
      if(data.total === comments.length) setEndOfPagination(true);  
      setComments([...comments, ...data.comments]);
    } 

    fetchData()
  }, [skipRecords]);

  const setPagination = () => {
    setSkipRecords(skipRecords + 10);
  }
  //////////////

  return (
    <>



      <div className="app-header">
        <Text type="header">Infinite Scroll Gallery</Text>
        <Button type="primary">Upload Image</Button>
      </div>
      <div className="app-body">
        <ImageList imageUrls={[
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200"
        ]} />  
      </div>

         



      <br></br>      
      <br></br>
      <br></br>
      <br></br>
      <br></br>



      <div className="comments">
        <Comments comments={comments} />
        {/* another option can be to create new object after each fetch */}
        {/* <div className="box" ref={containerRef}>Loading...</div> */}
      </div>

      <Button type="primary" onClick={setPagination}>Load More</Button>
    </>
  )
}

export default App
