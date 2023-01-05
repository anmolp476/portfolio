import {React, useState} from 'react';
import Layout from '../components/Layout'
import Typical from 'react-typical';


export default function Home() {

  return (
    <Layout>
      <div className="border border-dashed text-5xl w-3/5 absolute top-36">
        <p>
          Hi, <br></br>my name is Anmol<br></br>
          I'm a{' '}
          <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'dev',
                1000,
                'designer',
                1000,
              ]}/>
        </p>
      </div>
    </Layout>
  )
}
