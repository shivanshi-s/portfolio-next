import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectOne from '../public/assets/projects/projectOne.png'; 
import projectTwo from '../public/assets/projects/projectTwo.png'
import projectThree from '../public/assets/projects/projectThree.png'
import projectFour from '../public/assets/projects/projectFour.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem title="Finance Tracker App" 
                    backgroundImg={projectOne} 
                    projectUrl='/projectOne' 
                    tech='React JS'
                />

                <ProjectItem
                    title='Food App UI'
                    backgroundImg={projectTwo}
                    projectUrl='/projectTwo'
                    tech='React JS, Tailwind'
                />
                <ProjectItem
                    title='Vacation App UI'
                    backgroundImg={projectThree}
                    projectUrl='/projectThree'
                    tech='React JS, Tailwind'
                />
                <ProjectItem
                    title='Forgot to Dunk'
                    backgroundImg={projectFour}
                    projectUrl='/projectFour'
                    tech='Vanilla JavaScript'
                />

            </div>
        </div>
    </div>
  )
}

export default Projects