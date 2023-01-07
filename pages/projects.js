import React from 'react'
import Layout from '../components/Layout'
import PhoneBookImg from '../images/phoneBookProject.jpg';
import CountriesDataImg from '../images/countriesData.jpg';
import JavaEightBallImg from '../images/java8ballApp.jpg';
import PortfolioImg from '../images/portfolio.jpg';
import WorldGrowthImg from '../images/worldGrowth.jpg';

const Projects = () => {
  return (
    <Layout>
      <div name="The main container" className=' w-full h-full p-2 flex flex-col'>
        <div name="The header container" className="flex flex-col mt-20  text-4xl w-full">
          <p>
            <span className="text-blue-700">Projects</span> I've Completed So Far,
          </p>
        </div>
        
        <div name="The projects container" className="p-4 pr-24 mr-64 pl-0 grid sm:grid-cols-3 sm:grid-rows-2 h-full border border-dashed">

          <div name="Project #1 container border" className="p-2 shadow-lg shadow-[#000000]  h-48 w-52">
            <div name="Project #1 container" className="group bg-cover bg-no-repeat bg-start h-full w-full" 
              style={{backgroundImage:`url(${PhoneBookImg.src})`}}>
                
                <div name="Project #1 details container" 
                className="flex flex-col justify-center font-bold items-center pt-8 text-md opacity-0 w-full h-full group-hover:bg-slate-800 group-hover:opacity-100 group-hover:backdrop-blur-sm duration-300">
                  
                  <span className="text-center mb-10 w-auto text-cyan-500">
                    Fullstack Phone Book M.E.R.N. App
                  </span>

                  <div name="buttons wrapper" className="mb-8 flex flex-row justify-around w-full">

                    <a target="_blank" className="w-1/3 h-8" href="https://github.com/anmolp476/PhoneBookMERN">
                      <button className="hover:bg-slate-700 mb-10 border w-full h-full text-sm border-cyan-500 pb-1 text-cyan-500 ring-4">
                        Source
                      </button>
                    </a>

                    <a target="_blank" className="w-1/3 h-8" href="https://anmolp476.github.io/PhoneBookFrontEnd/">
                      <button className="hover:bg-slate-700 mb-10 border w-full h-full text-sm border-cyan-500 pb-1 text-cyan-500 ring-4">
                        Live
                      </button>
                    </a>
                  </div>


                </div>
            </div>
          </div>

          <div name="Project #2 container border" className="p-2 shadow-lg shadow-[#00000085]  h-48 w-52">
            <div name="Project #2 container" className="group bg-cover bg-no-repeat bg-start h-full w-full" 
              style={{backgroundImage:`url(${CountriesDataImg.src})`}}>
                
                <div name="Project #2 details container" 
                className="flex flex-col justify-center font-bold items-center pt-8 text-md opacity-0 w-full h-full group-hover:bg-slate-800 group-hover:opacity-100 group-hover:backdrop-blur-sm duration-300">
                  
                  <span className="text-center mb-10 w-auto text-cyan-500">
                    Country Data Finder
                  </span>

                  <div name="buttons wrapper" className="mb-8 flex flex-row justify-around w-full">

                    <a target="_blank" className="w-1/3 h-8" href="https://github.com/anmolp476/countriesData">
                      <button className="hover:bg-slate-700 mb-10 border w-full h-full text-sm border-cyan-500 pb-1 text-cyan-500 ring-4">
                        Source
                      </button>
                    </a>

                    <a target="_blank" className="w-1/3 h-8" href="https://anmolp476.github.io/countriesData/">
                      <button className="hover:bg-slate-700 mb-10 border w-full h-full text-sm border-cyan-500 pb-1 text-cyan-500 ring-4">
                        Live
                      </button>
                    </a>
                  </div>


                </div>
            </div>
          </div>

          <div name="Project #3 container border" className="p-2 shadow-lg shadow-[#00000085]  h-48 w-52">
            <div name="Project #3 container" className="group bg-cover bg-no-repeat bg-start h-full w-full" 
              style={{backgroundImage:`url(${JavaEightBallImg.src})`}}>
                
                <div name="Project #3 details container" 
                className="flex flex-col justify-center font-bold items-center pt-8 text-md opacity-0 w-full h-full group-hover:bg-slate-800 group-hover:opacity-100 group-hover:backdrop-blur-sm duration-300">
                  
                  <span className="text-center mb-10 w-auto text-cyan-500">
                    Magic 8 Ball App
                  </span>

                  <div name="buttons wrapper" className="mb-8 flex flex-row justify-around w-full">

                    <a target="_blank" className="w-1/3 h-8" href="https://github.com/anmolp476/MagicEightBallJava">
                      <button className="hover:bg-slate-700 mb-10 border w-full h-full text-sm border-cyan-500 pb-1 text-cyan-500 ring-4">
                        Source
                      </button>
                    </a>
                  </div>


                </div>
            </div>
          </div>

          <div name="Project #4 container border" className="p-2 shadow-lg shadow-[#00000085] h-48 w-52">
            <div name="Project #4 container" className="group bg-cover bg-no-repeat bg-start h-full w-full" 
              style={{backgroundImage:`url(${PortfolioImg.src})`}}>
                
                <div name="Project #4 details container" 
                className="flex flex-col justify-center font-bold items-center pt-8 text-md opacity-0 w-full h-full group-hover:bg-slate-800 group-hover:opacity-100 group-hover:backdrop-blur-sm duration-300">
                  
                  <span className="text-center mb-10 w-auto text-cyan-500">
                    My Portfolio Website
                  </span>

                  <div name="buttons wrapper" className="mb-8 flex flex-row justify-around w-full">

                    <a target="_blank" className="w-1/3 h-8" href="https://github.com/anmolp476/portfolio">
                      <button className="hover:bg-slate-700 mb-10 border w-full h-full text-sm border-cyan-500 pb-1 text-cyan-500 ring-4">
                        Source
                      </button>
                    </a>

                    <a target="_blank" className="w-1/3 h-8" href="https://portfolio-anmolp476.vercel.app">
                      <button className="hover:bg-slate-700 mb-10 border w-full h-full text-sm border-cyan-500 pb-1 text-cyan-500 ring-4">
                        Live
                      </button>
                    </a>
                  </div>


                </div>
            </div>
          </div>

          <div name="Project #5 container border" className="p-2 shadow-lg shadow-[#00000085]  h-48 w-52">
            <div name="Project #5 container" className="group bg-contain bg-no-repeat bg-start h-full w-full" 
              style={{backgroundImage:`url(${WorldGrowthImg.src})`}}>
                
                <div name="Project #5 details container" 
                className="flex flex-col justify-center font-bold items-center pt-8 text-md opacity-0 w-full h-full group-hover:bg-slate-800 group-hover:opacity-100 group-hover:backdrop-blur-sm duration-300">
                  
                  <span className="text-center mb-10 w-auto text-cyan-500">
                    World Growth Rate Predictor
                  </span>

                  <div name="buttons wrapper" className="mb-8 flex flex-row justify-around w-full">

                    <a target="_blank" className="w-1/3 h-8" href="https://github.com/anmolp476/REC2022Project">
                      <button className="hover:bg-slate-700 mb-10 border w-full h-full text-sm border-cyan-500 pb-1 text-cyan-500 ring-4">
                        Source
                      </button>
                    </a>

                  </div>


                </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Projects