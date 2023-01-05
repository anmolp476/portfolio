import classNames from 'classnames'
import React, { useMemo, useState } from 'react';
import {RiComputerFill, RiComputerLine, 
        RiToolsFill, AiFillHome, AiOutlineCode, AiFillCode, 
        RiBriefcaseLine, RiBriefcaseFill, RiMailLine, RiMailFill} from 'react-icons/ri';
import {FaBars} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Sidebar = () => {

    const menuArray = 
    [
        {id: 1, label: "Home", icon: AiFillHome, link:"/"},
        {id: 2, label: "Skills", icon: RiToolsFill, link:"/skills"},
        {id: 3, label: "Projects", icon: AiOutlineCode, link:"/projects"},
        {id: 4, label: "Experience", icon: RiBriefcaseLine, link:"/experience"},
        {id: 5, label: "Contact Me", icon: RiMailLine, link:"/contact"},
    ]


    const [sideBar, toggleSidebar] = useState(false);

    const router = useRouter();

    const activeMenu = useMemo(() => menuArray.find(menu=>menu.link===router.pathname), [router.pathname])

    const divCSS = classNames('h-screen px-4 pt-8 pb-4 bg-black flex justify-between flex-col w-80',
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
    });

    const collapseIconDivStyle = classNames("pl-1 gap-4",
    {
        ["flex items-center"]: !sideBar,
        ["hidden"]: sideBar,
    })

    const handleCollapse = () =>
    {
        toggleSidebar(!sideBar);
    }

    const menuIconsClass = (menu) =>
    {
        return classNames("flex items-center cursor-pointer hover:bg-slate-800 rounded w-full overflow-hidden whitespace-nowrap",
                        {
                            "bg-slate-800": activeMenu.id===menu.id
                        })
    };


    return (
        <motion.div className={divCSS} style={{transition: "width 300ms cubic-bezier(0.2,0,0,1) 0s"}}>
            <div className='flex flex-col'>
                <div className="flex items-center justify-between relative">
                    <div className={collapseIconDivStyle}>
                        <RiComputerLine style={logoIconStyle}/>
                        <span className={classNames('mt-2 text-lg font-medium text-white', {hidden:sideBar})}>
                            Logo
                        </span>
                    </div>
                    <button className={collapseIconStyle} onClick={handleCollapse}>
                        <FaBars style={{color:"blue", fontSize:"1.8em"}}/>
                    </button>

                    <div className="flex flex-col items-start absolute top-28">
                        {menuArray.map(({icon: Icon, ...menu}) => 
                        {
                            const theClasses = menuIconsClass(menu);
                            return(
                                <div className={theClasses}>
                                    <Link href={menu.link}>
                                        <a className="flex py-4 px-3 items-center w-full h-full">
                                            <div>
                                                <Icon/>
                                            </div>
                                            {!sideBar && (
                                                <span className={classNames("text-md font-medium text-gray-400")}></span>
                                            )}
                                        </a>
                                    </Link>
                                    {menu.label}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar