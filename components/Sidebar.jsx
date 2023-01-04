import classNames from 'classnames'
import React, { useState } from 'react';
import {RiComputerFill, RiComputerLine} from 'react-icons/ri';
import {FaBars} from 'react-icons/fa';

const Sidebar = () => {

    const [sideBar, toggleSidebar] = useState(false);

    const [toggleBars, toggleTheBars] = useState(false);

    const divCSS = classNames('h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col w-80',
                    {
                        'w-80': !sideBar,
                        'w-20': sideBar
                    });

    const logoIconStyle = 
    {
        color: 'blue',
        fontSize: '2em',
    }

    const collapseIconStyle = "p-4 rounded bg-light-lighter absolute right-0"

    const handleCollapse = () =>
    {
        toggleSidebar(!sideBar);
    }

    const mouseDetected = () =>
    {
        toggleTheBars(!toggleBars);
    }


    return (
        <div className={divCSS} 

            onMouseEnter={mouseDetected}
            onMouseLeave={mouseDetected}
            
            >
            <div className='flex flex-col'>
                <div className="border border-dashed flex items-center justify-between relative">
                    <div className='flex items-center pl-1 gap-4 border border-dashed'>
                        <RiComputerLine style={logoIconStyle}/>
                        <span className={classNames('mt-2 text-lg font-medium text-white', {hidden:sideBar})}>
                            Logo
                        </span>
                    </div>
                    {toggleBars && <button className={collapseIconStyle} onClick={handleCollapse}>
                        <FaBars style={{color:"blue"}}/>
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar