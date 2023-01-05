import {React, useState} from 'react';
import Layout from '../components/Layout'
import { TypeAnimation  } from 'react-type-animation';

export default function Home() {

  return (
    <Layout>
      <div className="w-3/5 absolute top-36">
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
            'Origami Enthusiast 📃',
            1000
          ]}
          wrapper='span'
          cursor={true}
          repeat={Infinity}
          style={{fontSize:"3em"}}
        />

      </div>
    </Layout>
  )
}
