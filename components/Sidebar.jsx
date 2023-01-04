import classNames from 'classnames'
import React, { useState } from 'react';
import {RiComputerFill, RiComputerLine} from 'react-icons/ri';
import {FaBars} from 'react-icons/fa';

const Sidebar = () => {

    const [sideBar, toggleSidebar] = useState(false);

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

    const collapseIconStyle = classNames("p-4 rounded bg-light-lighter absolute",
    {
        "right-0": !sideBar,
        "pl-2": sideBar,
        "pt-14":sideBar
    });

    const collapseIconDivStyle = classNames("pl-1 gap-4 border border-dashed",
    {
        ["flex items-center"]: !sideBar,
        ["hidden"]: sideBar,
    })

    const handleCollapse = () =>
    {
        toggleSidebar(!sideBar);
    }


    return (
        <div className={divCSS}>
            <div className='flex flex-col'>
                <div className="border border-dashed flex items-center justify-between relative">
                    <div className={collapseIconDivStyle}>
                        <RiComputerLine style={logoIconStyle}/>
                        <span className={classNames('mt-2 text-lg font-medium text-white', {hidden:sideBar})}>
                            Logo
                        </span>
                    </div>
                    <button className={collapseIconStyle} onClick={handleCollapse}>
                        <FaBars style={{color:"blue", fontSize:"1.8em"}}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar