import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = ({blog, handleReadTime, handleBookmark}) => {
    // console.log(blog);

    return (
        <div>
            <div className='my-4'>
                <img className='rounded-lg' src={blog.blogCover} alt="" />
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <img className='w-14 h-14 rounded-full' src={blog.AuthorImage} alt="Image" />
                    <div className='text-left'>
                        <h4 className='text-xl font-bold'>{blog.AuthorName}</h4>
                        <p className='text-md'>{blog.PublishDate}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{blog.ReadTime} min read</p>
                    <button onClick={() => handleBookmark(blog.BlogTitle)}><FontAwesomeIcon icon={faBookmark} /></button>
                    <ToastContainer />
                </div>
            </div>
            <div className='text-start my-4'>
                <h1 className='text-3xl font-bold'>{blog.BlogTitle}</h1>
                <p className='my-5'>#beginner #programming</p>
                <button onClick={() =>handleReadTime(blog.ReadTime)} className='underline text-blue-800 bg-none' href="">Mark as Read</button>
            </div>
            <hr />
        </div>
    );
};

export default Blog;