import React from 'react'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
        <Sidebar/>
        <div className="flex-1 p-4 text-white bg-gray-900">
            Portfolio.
        </div>
    </div>
  )
}

export default Layout