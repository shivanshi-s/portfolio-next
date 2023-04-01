import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin, FaGithub, FaBlog, FaMicroblog, FaMedium } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'


const SocialIcons = () => {
    return (
      <div className="flex flex-wrap md:flex-nowrap space-x-4">
        <a href="#">
          <FaGithub className="m-6 text-[#5651e5]" size={60} />
        </a>
        <a href="#">
          <FaTwitter className="m-6 text-[#5651e5]" size={60} />
        </a>
        <a href="#">
          <FaLinkedin className="m-6 text-[#5651e5]" size={60} />
        </a>
        <a href="#">
          <SiHashnode className="m-6 text-[#5651e5]" size={60} />
        </a>
        <a href="#">
          <FaMedium className="m-6 text-[#5651e5]" size={60} />
        </a>
      </div>
    );
  };

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-20 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get in Touch</h2>
            <div className="bg-gradient-to-r from-gray-100 to-purple-100 flex justify-center items-center h-[70vh]">
            <div className="w-full max-w-4xl h-full p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
                Want to work together?
            </h2>
            <p className="text-[#5651e5] pt-5 pb-10">
                I'm open to internship positons and freelance work. Feel free to reach out for collaborations, get help with communities or just a friendly hello!
                </p>

            <SocialIcons />
            
            <button className=" text-white px-6 py-2 rounded-md mt-6 ml-3">
                <FaEnvelope className="inline-block m-2" size={18} />
                   <a href=""></a> DROP A MAIL
            </button>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Contact