import React from 'react'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
        <Sidebar/>
        <div className="bg-blue-900 flex-1 p-4 text-white">
            Portfolio.
        </div>
    </div>
  )
}

export default Layout