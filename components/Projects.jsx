import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AGPImg from '../public/assets/projects/AGP.png'
import HGSImg from '../public/assets/projects/HomeGoodsStore.png'
import TDAImg from '../public/assets/projects/ToDoApp.png'
import ProjectComp from './ProjectComp'



const Projects = () => {
  return (
    <>
    <div id='projects' className='w-screen h-20'></div>
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-4 py-16'>
            <p className='text-2xl mb-10 tracking-widest uppercase text-[#495f4b] font-bold'>Projects</p>

{/* Container holds all of the projects */}
            <div className='grid md:grid-cols-2 gap-8'>

{/* Project 1 */}
                <ProjectComp 
                    title="Essentials." 
                    backgroundImg={HGSImg}
                    projectPage='/ProjectOne' 
                    tech='Django, React, Python, PostgreSQL'/>

{/* Project 2 */}                
                <ProjectComp 
                    title="Accomplished." 
                    backgroundImg={TDAImg} 
                    projectPage='/ProjectTwo'
                    projectUrl='https://accomplished-to-do-app.herokuapp.com/to-do'
                    tech='Express, MongoDB, Node.js'/>

{/* Project 3 */}                
                <ProjectComp 
                    title="America's Gun Problem" 
                    backgroundImg={AGPImg}
                    projectPage='/ProjectThree' 
                    projectUrl='https://americas-gun-problem.herokuapp.com/'
                    tech='MongoDB, Express, React, PostgreSQL'/>
            </div>
        </div>
    </div>
  </>
  )
}

export default Projects