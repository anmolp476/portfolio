import React from 'react'
import Layout from '../components/Layout'


const Experience = () => {
  return (
    <Layout>
      <div name="The main div">

        <div className="flex flex-col sm:items-start items-end mr-4 sm:mr-0">
          <div name="The header container" className="flex flex-col sm:items-start border border-dashed items-end mt-24 text-2xl sm:text-5xl w-full mb-2">
            <p>
              Relevant <span className="text-blue-700">Work Experience</span>,
            </p>
          </div>
          <div name="The content div" className="w-4/5 sm:w-3/5">
            <div name="The python tutor div" className="w-full ">
              <div name="The python tutor header div" className="flex flex-row justify-between w-full text-md border border-dashed sm:text-2xl">
                <p className="text-blue-700">Python Tutor for Varsity Tutors</p>
                <p>Jun 2022 - Jan 2023</p>
              </div>
          
              <div name="The description of python tutor div overflow-hidden">
                <ul className="list-disc ml-8 mt-2">
                  <li className="mb-2">
                    Experience teaching Python to students of all levels,
                    including beginners and those with some programming experience
                  </li>
                  <li className="mb-2">
                    Able to adapt teaching style and
                    approach to the individual needs and learning styles of each student
                  </li>
                  <li className="mb-2">
                    Able to adapt teaching style and
                    approach to the individual needs and learning styles of each student
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Experience


