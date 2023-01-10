import React from 'react'
import Layout from '../components/Layout'


const Contact = () => {
  return (
    <Layout>
      <div name="This is the main div" className="flex flex-row w-3/5 h-full ml-24 sm:ml-0">

        <form method="POST" action="https://getform.io/f/870afaff-27e3-41f6-86fe-e980cd28f7ed" className="mt-4 flex flex-col items-center gap-8 justify-center w-full h-full">

          <div name="This will contain the header text" className="flex flex-col w-full">
            <p  className="text-4xl sm:text-5xl">
              <span className="text-blue-700 ">Contact</span> Me!
            </p>
            <div name="This contains the part of the header that is not capitalized" className="flex flex-col sm:flex-row">
              <p className="italic opacity-50 mr-1">
                Complete the form below or shoot me an email at
              </p>
              <span className="text-blue-800 italic">anmolp476@gmail.com</span>
            </div>
          </div>

          <div name="This will contain the input elements" className="flex flex-col gap-2 w-full">
            <input name="name" className="bg-white w-full rounded p-2 text-black" type="text" placeHolder="Your Name..."></input>
            <input name="email" className="bg-white w-full my-4 p-2 rounded text-black" type="email" placeholder="Your Email..." required></input>
            <textarea name="message" className="bg-white w-full rounded p-2 text-black -mb-4" rows="10" placeholder="Hi there..." required></textarea>
          </div>

          <div name="This div will contain only the button. I covered it with a div so I can style the button easier" 
               className="w-1/5 flex flex-row border border-dashed justify-center mb-40 sm:mb-4 -mt-8">
            <button className="text-white border-2 hover:bg-blue-700 hover:border-blue-700 px-10 sm:px-4 py-0 sm:py-3 my-14 sm:my-8 mx-auto flex items-center">Let's Talk!</button>
          </div>
        </form>

      </div>
    </Layout>
  )
}

export default Contact