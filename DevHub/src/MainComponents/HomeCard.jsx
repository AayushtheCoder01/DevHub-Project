import React from 'react'
import './homecard.css'
import features from '../FeatureArr'

function HomeCard() {
    const myImage = "../public/Snapchat-1190848567.jpg"
  return (
    <>
    <div className='flex justify-center mt-10 p-10 flex-col'>
    <h2 className='title-h2 text-center text-white font-semibold text-3xl md:text-5xl'>Welcome to Dev<span className='title-text text-center text-blue-600 font-bold'>Hub</span>.</h2>
    </div>
    <p className=" text-center text-gray-400 m-3 mx-10 md:mx-40">
    Welcome to DevHub, a platform for developers, created by Aayush Kumar. DevHub empowers you with a suite of essential tools to enhance your productivity and skills. Whether you're managing your time with the built-in timer and stopwatch, tracking your expenses efficiently, organizing your tasks with a powerful to-do list, or honing your typing skills through practice sessions, DevHub has got you covered.
      </p>
    <section className="py-14 text-white">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-400 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Increase your <span className='text-blue-500 font-bold'>Prodictivity</span> as Developer
                    </h3>
                    <p className="mt-7">
                        Here are some Products.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-400 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomeCard