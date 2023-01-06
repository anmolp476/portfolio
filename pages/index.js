import { React } from 'react';
import { AiFillLinkedin, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import Layout from '../components/Layout'
import { TypeAnimation  } from 'react-type-animation';

export default function Home() {

  return (
    <Layout>
      <div className="w-3/5 absolute top-28">
        <p className="text-7xl">
          Hi, <br></br>My name is <span className="text-blue-800">Anmol</span><br></br>
          I'm a
        </p>
        <TypeAnimation
          sequence={[
            `Web Developer 💻`,
            1000,
            `Software Engineering Student 🦾`,
            1000,
            'Origami Enthusiast 📄',
            1000
          ]}
          wrapper='span'
          cursor={true}
          repeat={Infinity}
          style={{fontSize:"3em"}}
        />
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
    </Layout>
  )
}
