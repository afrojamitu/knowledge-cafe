import { useState } from 'react';
import './App.css';
import BlogPost from './components/BlogPost/BlogPost';
import Blogs from './components/Blogs/Blogs';
import Bookmark from './components/Bookmark/Bookmark';
import Header from './components/Header/Header';



function App() {
  const [time, setTime] = useState()
  const [bookmark, setBookmark] = useState([])

  const handleReadTime = (readTime) =>{
    // console.log(readTime)
    const previousReadTime = JSON.parse(localStorage.getItem("Read Time"));
    if(previousReadTime){
      const totalTime = previousReadTime + parseInt(readTime);
      localStorage.setItem("Read Time", totalTime);
      // console.log(totalTime);
      setTime(totalTime);
    }
    else{
      localStorage.setItem("Read Time", readTime);
      setTime(readTime);
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>      
      <Blogs handleReadTime={handleReadTime} bookmark={bookmark} setBookmark={setBookmark}></Blogs>
      <Bookmark time={time} bookmark={bookmark}></Bookmark>
      </div>
      <BlogPost></BlogPost>
      
    </div>
  )
};

export default App;
