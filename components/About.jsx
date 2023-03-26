import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='cols-span-2'> 
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>Not your normal Developer</p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repellendus quibusdam in quam neque, sit delectus fugiat unde? Quod, quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea in facere modi, magni dolores nostrum veniam quas eligendi pariatur recusandae praesentium iure impedit architecto, officia ut eos doloribus quos quod.
                </p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quo amet dignissimos obcaecati eius? Dolores unde cumque corrupti atque distinctio accusamus reprehenderit alias repellendus totam possimus ipsa omnis corporis repudiandae, molestias, placeat laboriosam, ex harum autem. Laboriosam non quidem alias sed saepe quisquam dolorum expedita harum itaque fuga. Hic, praesentium.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About