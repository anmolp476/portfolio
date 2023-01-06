import React from 'react'
import Layout from '../components/Layout'

const Projects = () => {
  return (
    <Layout>
      <div name="The main container" className='border border-dashed w-full h-full p-2 flex flex-col'>
        <div name="The header container" className="flex flex-col mt-20 border border-dashed text-4xl">
          <p>
            These are the <span className="text-blue-600">projects</span> I completed so far,
          </p>
        </div>
        
        <div name="The projects container" className="border border-dashed p-4 grid grid-cols-3 gap-4">

          <div name="Project #1 container">
              
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Projects