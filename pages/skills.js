import React from 'react'
import Layout from '../components/Layout'
import { FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { DiGit } from 'react-icons/di';

const Skills = () => {
  return (
    <Layout>
      <div className="flex flex-col py-12 my-12 mr-0 w-4/6 items-start">

        <div className="flex flex-col items-center">
          <div className="text-5xl text-center">
            <p className="">
              My Toolbox Of <span className="text-blue-700">Skills</span> & <span className="text-blue-700">Tools</span>
            </p>
          </div>
          <div className=" grid grid-cols-4 grid-rows-2 gap-3 p-4 px-5 py-8 top-48 left-56 overflow-hidden text-center">
            <div className="flex flex-col items-center shadow-md mx-1 py-2 px-2 shadow-[#00000085] hover:scale-110 duration-500 text-6xl">
              <SiMongodb/>
              <p className="text-2xl">MongoDB</p>
            </div>
            <div className="flex flex-col items-center shadow-md shadow-[#00000085] hover:scale-110 p-2 duration-500 text-6xl">
              <SiReact/>
              <p className="text-2xl">React</p>
            </div>
            <div className="flex flex-col items-center shadow-md px-2 shadow-[#00000085] hover:scale-110 p-2 duration-500 text-6xl">
              <SiExpress/>
              <p className="text-2xl">Express</p>
            </div>
            <div className="flex flex-col items-center shadow-md px-2 shadow-[#00000085] hover:scale-110 p-2 duration-500 text-6xl">
              <FaNodeJs/>
              <p className="text-2xl">Node</p>
            </div>
            <div className="flex flex-col items-center shadow-md px-2 shadow-[#00000085] hover:scale-110 p-2 duration-500 text-6xl">
              <SiNextdotjs/>
              <p className="text-2xl">Next</p>
            </div>
            <div className="flex flex-col items-center shadow-md px-2 shadow-[#00000085] hover:scale-110 p-2 duration-500 text-6xl">
              <SiTailwindcss/>
              <p className="text-2xl">Tailwind</p>
            </div>
            <div className="flex flex-col items-center shadow-md px-2 shadow-[#00000085] hover:scale-110 p-2 duration-500 text-6xl">
              <DiGit/>
              <p className="text-2xl">Git</p>
            </div>
            <div className="flex flex-col items-center shadow-md px-2 shadow-[#00000085] hover:scale-110 p-2 duration-500 text-6xl">
              <FaGithub/>
              <p className="text-2xl">GitHub</p>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Skills


