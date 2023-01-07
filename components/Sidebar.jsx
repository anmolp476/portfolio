import classNames from 'classnames'
import React, { useMemo, useState } from 'react';
import {RiComputerFill, RiComputerLine, 
        RiToolsFill, RiBriefcaseLine, RiBriefcaseFill, RiMailLine, RiMailFill} from 'react-icons/ri';
import {AiOutlineCode, AiFillCode, AiFillHome, AiOutlineHome} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Sidebar = () => {

    const menuArray = 
    [
        {id: 1, label: "Home", Icon: AiFillHome, link:"/"},
        {id: 2, label: "Skills", Icon: RiToolsFill, link:"/skills"},
        {id: 3, label: "Projects", Icon: AiOutlineCode, link:"/projects"},
        {id: 4, label: "Experience", Icon: RiBriefcaseLine, link:"/experience"},
        {id: 5, label: "Contact Me", Icon: RiMailLine, link:"/contact"},
    ]


    const [sideBar, toggleSidebar] = useState(false);

    const router = useRouter();

    const activeMenu = useMemo(() => menuArray.find(menu=>menu.link===router.pathname), [router.pathname])

    const divCSS = classNames('z-10 border sm:static fixed border-dashed h-screen px-4 pt-8 pb-4 bg-black flex justify-between flex-col',
                    {
                        'w-52': !sideBar,
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
        "pt-12": sideBar
    });

    const collapseIconDivStyle = classNames("pl-3 gap-4",
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
        return classNames("flex items-center cursor-pointer hover:bg-slate-800 rounded overflow-hidden whitespace-nowrap",
                        {
                            "w-full":!sideBar,
                            "w-12":sideBar,
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
                            
                        </span>
                    </div>
                    <button className={collapseIconStyle} onClick={handleCollapse}>
                        <FaBars style={{color:"blue", fontSize:"1.8em"}}/>
                    </button>

                    <div className="flex flex-col items-start absolute top-28">
                        {menuArray.map((item) => 
                        {
                            const Icon = item.Icon //This is for getting the icon from the object
                            console.log(item)
                            const theClasses = menuIconsClass(item.id);
                            return(
                                <div className={theClasses}>
                                    
                                    <Link href={item.link}>
                                        <a className="flex py-4 px-4 items-center w-full h-full">
                                            <div style={{width:"2.5rem"}}>
                                                <Icon/> {/* And I'm trying to post the icon like this*/}
                                            </div>
                                            {!sideBar && (
                                                <span className={classNames("text-md font-medium text-red-400")}></span>
                                            )}
                                            {!sideBar && item.label}
                                        </a>
                                    </Link>
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