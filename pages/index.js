import { React } from 'react';
import { AiFillLinkedin, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import Layout from '../components/Layout'
import { TypeAnimation  } from 'react-type-animation';

export default function Home() {

  return (
    <Layout>
      <div className="flex flex-col mt-24 w-4/6 items-center sm:ml-0 ml-20">
        <div name="This is created so I can edit the everything in the homepage at once">
          <p className="md:text-7xl text-4xl">
            Hi, <br></br>My name is <span className="text-blue-800">Anmol</span><br></br>
            I'm a
          </p>
          <div className="mb-2 border border-dashed text-2xl sm:4xl md:text-5xl w-full">
            <TypeAnimation
              sequence={[
                `Web Developer 💻`,
                1000,
                `SWE Student 🦾`,
                1000,
                'Origami Enthusiast 📄',
                1000
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
            />
          </div>
          <div className="w-2/5 flex flex-row justify-start gap-5">
            <button className="border-2 rounded font-bold text-cyan-600 border-cyan-600 p-2 px-3 hover:bg-slate-800">
              <a target="_blank" href="https://drive.google.com/file/d/1TJmFC8GNx3sTOb_LIm0o7pnhVd7Jcrpl/view?usp=sharing">
                Resume
              </a>
            </button>
            <button className="text-5xl text-cyan-600">
               <a target="_blank" href="https://www.linkedin.com/in/panchal2003/">
                <AiOutlineLinkedin/>
               </a>
            </button>
            <button className="text-5xl text-cyan-600">
              <a target="_blank" href="https://github.com/anmolp476">
                <AiOutlineGithub/>
              </a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
