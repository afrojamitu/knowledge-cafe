import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';

const Bookmark = ({ time, bookmark }) => {
    // console.log(bookmark);

    const [readTime, setReadTime] = useState(time)

    useEffect(() => {
        const getReadTime = localStorage.getItem("Read Time");
        setReadTime(getReadTime);
    }, [time])

    return (
        <div>
            <div className='my-3 bg-slate-100 border-2 border-indigo-300 p-4 rounded-lg'>
                <h4 className='text-xl font-bold'>Spent time on read : {readTime}  min</h4>
            </div>

            <div className='my-3 bg-slate-100 p-4 rounded-lg'>
                <h2 className='text-2xl text-start font-bold'>Bookmarked Blogs: {bookmark.length}</h2>

                <Title bookmark={bookmark} />
                

            </div>
            


        </div>
    );
};

export default Bookmark;
