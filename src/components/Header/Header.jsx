import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between text-3xl font-bold mb-4'>
                <h1>Knowledge Cafe</h1>
                <img className='w-16 h-16 rounded-full' src="https://i.pinimg.com/originals/83/2a/46/832a460b522c84fa9650c11face5927e.jpg" alt="" />
            </nav>
            <hr />
        </div>
    );
};

export default Header;