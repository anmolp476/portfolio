import classNames from 'classnames'
import React, { useState } from 'react';

const Sidebar = () => {

    const [sideBar, toggleSidebar] = useState(false);

    const divCSS = classNames('h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col w-80',
                    {
                        'w-80': !sideBar,
                        'w-20': sideBar
                    });

    return (
        <div className={divCSS}>
            <div className='flex flex-col'>
                <div className='flex items-center pl-1 gap-4 border border-dashed'>
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar