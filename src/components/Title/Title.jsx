import React from 'react';

const Title = ({ bookmark }) => {

    return (
        <div>
            {
                bookmark.map((blog, index) => (
                <div key={index}>
                    <div className='bg-white text-2xl font-medium py-8 px-4 mx-8 my-4 rounded-lg'>
                    {blog} 
                    
                </div>
                </div>
            ))
            }
        </div>
    );
};

export default Title;