import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AGPImg from '../public/assets/projects/AGP.png'
import HGSImg from '../public/assets/projects/HomeGoodsStore.png'
import TDAImg from '../public/assets/projects/ToDoApp.png'
import ProjectComp from './ProjectComp'



const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[purple]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>

{/* Container holds all of the projects */}
            <div className='grid md:grid-cols-2 gap-8'>

{/* Project 1 */}
                <ProjectComp 
                    title="Essentials." 
                    backgroundImg={HGSImg} 
                    projectUrl='https://homegoods-store.herokuapp.com/'
                    tech='Django Rest Framework, React, Python, PostgreSQL'/>

{/* Project 2 */}                
                <ProjectComp 
                    title="Accomplished." 
                    backgroundImg={TDAImg} 
                    projectUrl='https://accomplished-to-do-app.herokuapp.com/to-do'
                    tech='Express, MongoDB, Node.js'/>

{/* Project 3 */}                
                <ProjectComp 
                    title="America's Gun Problem" 
                    backgroundImg={AGPImg} 
                    projectUrl='https://americas-gun-problem.herokuapp.com/'
                    tech='MongoDB, Express, React, PostgreSQL'/>
            </div>
        </div>
    </div>
  )
}

export default Projects