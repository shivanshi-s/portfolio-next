import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Shivanshi</span></h1>
                <h1 className='py-2 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am a front-end web developer and a community enthusiast specializing in building (and ocassionally desigining) exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications while learning other technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://www.linkedin.com/in/shivanshi-saxena12/" target='_blank'><FaLinkedin/></a> 
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://www.github.com/shivanshi-s/" target='_blank'><FaGithub/></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://twitter.com/whatshivanshi" target='_blank'><FaTwitter/></a> 
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://whatshivanshi.hashnode.dev/" target='_blank'><SiHashnode/></a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main