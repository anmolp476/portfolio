import {React, useState} from 'react';
import Layout from '../components/Layout'
import Typical from 'react-typical';


export default function Home() {

  return (
    <Layout>
      <div className="border border-dashed  w-3/5 absolute top-36">
        <p className="border border-dashed text-7xl">
          Hi, <br></br>My name is <span className='text-blue-800'>Anmol</span><br></br>
          I'm a{' '}
        </p>
          <Typical
              loop={Infinity}
              wrapper="p"
              steps={[
                'Web Developer',
                2000,
                'Software Engineering Student',
                2000,
              ]}/>
      </div>
    </Layout>
  )
}
