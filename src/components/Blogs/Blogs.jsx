import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import { toast } from 'react-toastify';

const Blogs = ({handleReadTime, bookmark, setBookmark}) => {
    // console.log()
    const [blogs, setBlogs] = useState([])
    

    useEffect(() =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    })

    const handleBookmark = (blog) =>{
        // console.log(blog)
        const exist = bookmark.find((book) => book.id == blog.id);
        if(exist){
            toast.error('Already Bookmarked!')
        }
        else{
            toast.success('Bookmarked!')
        }
        const newBookmark = [...bookmark, blog];
        setBookmark(newBookmark);  
    }

    

    return (
        <div className='mb-5'>
            {
                blogs.map(blog => (
                    <Blog handleReadTime={handleReadTime} 
                    key={blog.id} 
                    blog={blog}
                    handleBookmark={handleBookmark}
                    ></Blog>
                ))
            };
        </div>
    );
};

export default Blogs;